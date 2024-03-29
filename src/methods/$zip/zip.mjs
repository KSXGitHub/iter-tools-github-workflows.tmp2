/**
 * @generated-from ./$zip.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';
import { map } from '../$map/map';
export function* zip(iterables) {
  const iters = iterables.map(arg => arg[Symbol.iterator]());
  const itersDone = iters.map(iter => ({
    done: false,
    iter,
  }));

  try {
    while (true) {
      const results = map(iters, iter => iter.next());
      const syncResults = results;
      const zipped = new Array(iters.length);
      let i = 0;
      let allDone = true;
      let done = false;

      for (const result of syncResults) {
        allDone = allDone && result.done;
        done = done || result.done;
        itersDone[i].done = result.done;
        zipped[i] = result.value;
        i++;
      }

      if (done) break;
      yield zipped;
      if (allDone) break;
    }
  } finally {
    for (const { iter, done } of itersDone) {
      if (!done && typeof iter.return === 'function') iter.return();
    }
  }
}
export default iterableCurry(zip, {
  variadic: true,
});
