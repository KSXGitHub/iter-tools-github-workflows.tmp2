import { $async, $await, $iteratorSymbol } from '../../../generate/async.macro';
import { WeakExchange } from '../../internal/queues';

import { $cursor } from '../$cursor/$cursor';
import $toAnySubseq from '../../internal/$to-any-subseq';
import internalStartsWith from '../$starts-with_/iterable-starts-with';

const startsWithConfig = { any: false, subseq: true };

function lengthOfFullMatch(buffer, state, onSubseqs) {
  for (const subsequence of onSubseqs) {
    if (internalStartsWith(buffer, startsWithConfig, subsequence)) {
      return subsequence.length;
    }
  }
  return -1;
}

$async;
function fetch(state, onSubseqs) {
  const { iterator, weakExchange } = state;

  if (state.subsequenceEnded) {
    return false;
  }

  const { done, value: buffer } = $await(iterator.next());

  state.subsequenceEnded = state.done = done;

  if (!done) {
    state.idx++;

    const matchedLength = lengthOfFullMatch(buffer, state, onSubseqs);
    state.subsequenceEnded = matchedLength > 0;

    for (let i = 0; i < matchedLength - 1; i++) {
      $await(iterator.next());
    }

    if (state.subsequenceEnded) {
      state.consumer = weakExchange.spawnConsumer();
    } else {
      weakExchange.push(buffer.get(0));
    }
  }

  return !state.subsequenceEnded;
}

$async;
function returnIterator(state) {
  const { groupsConsumed, done, idx, nGroups, iterator } = state;

  if (groupsConsumed && !done && idx === nGroups) {
    if (typeof iterator.return === 'function') $await(iterator.return());
  }
}

$async;
function fetchSubsequence(state, onSubseqs, isFirst) {
  if (isFirst && !state.done) return;
  while ($await(fetch(state, onSubseqs)));
}

$async;
function* generateSubsequence(state, onSubseqs, consumer, isFirst) {
  try {
    yield 'ensure finally';

    if (isFirst && !consumer.isEmpty()) yield consumer.shift();

    while ($await(fetch(state, onSubseqs))) yield consumer.shift();
  } finally {
    returnIterator(state);
  }
}

$async;
function* $iterableSplitOn(iterable, config, on) {
  const onSubseqs = $await($toAnySubseq(config, on))
    .filter(subseq => subseq.length)
    .sort((a, b) => b.length - a.length);

  const maxMatchLength = onSubseqs.reduce((max, { length }) => Math.max(max, length), 1);

  const state = {
    iterator: null,
    idx: 0,
    weakExchange: new WeakExchange(),
    consumer: null,
    nGroups: 0,
    groupsConsumed: false,
    subsequenceEnded: false,
  };

  try {
    state.iterator = $cursor(iterable, { size: maxMatchLength, trailing: true })[$iteratorSymbol]();
    state.consumer = state.weakExchange.spawnConsumer();

    let isFirst = true;
    // We must peek the first item to know if we are done before without yielding any subseq
    $await(fetch(state, onSubseqs));

    while (!state.done) {
      state.nGroups++;
      const subsequence = $await(generateSubsequence(state, onSubseqs, state.consumer, isFirst));
      $await(subsequence.next()); // ensure finally

      yield subsequence;
      $await(fetchSubsequence(state, onSubseqs, isFirst));

      isFirst = false;
      state.subsequenceEnded = false;
    }
  } finally {
    state.groupsConsumed = true;
    $await(returnIterator(state));
  }
}

export default $iterableSplitOn;
