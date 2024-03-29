/**
 * @generated-from ./$iterable-includes.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { cursor } from '../$cursor/cursor';
import toAnySubseq from '../../internal/to-any-subseq';
import startsWith from '../$starts-with_/iterable-starts-with';
const startsWithConfig = {
  any: true,
  subseq: true,
};

function iterableIncludes(iterable, config, value) {
  const subseqs = toAnySubseq(config, value);
  const maxMatchLength = subseqs.reduce((max, { length }) => Math.max(max, length), 1);
  let hasItems = false;

  for (const buffer of cursor(iterable, {
    size: maxMatchLength,
    trailing: true,
  })) {
    if (startsWith(buffer, startsWithConfig, subseqs)) {
      return true;
    }

    hasItems = true;
  }

  return !hasItems && !!subseqs.find(subseq => !subseq.length);
}

export default iterableIncludes;
