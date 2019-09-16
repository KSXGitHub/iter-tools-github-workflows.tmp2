/**
 * @generated-from ./$drop-while.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from '../../internal/iterable';

function* dropWhile(iterable, func) {
  let drop = true;
  let c = 0;

  for (const item of iterable) {
    if (!drop) {
      yield item;
    } else {
      drop = func(item, c++);

      if (!drop) {
        yield item;
      }
    }
  }
}

export default iterableCurry(dropWhile);
