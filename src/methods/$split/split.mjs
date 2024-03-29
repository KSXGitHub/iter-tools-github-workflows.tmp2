/**
 * @generated-from ./$split.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { map } from '../$map/map';

function* iterableOf(...items) {
  yield* items;
}

function split(iterable) {
  // String iterators already return an exploded version of the string.
  if (typeof iterable === 'string') {
    return iterable;
  } else {
    return map(iterable, item => iterableOf(item));
  }
}

export default split;
