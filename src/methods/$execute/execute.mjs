/**
 * @generated-from ./$execute.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { wrapWithMethodIterable } from '../../internal/iterable';
export function* execute(func, ...args) {
  while (true) {
    yield func(...args);
  }
}
export default wrapWithMethodIterable(execute);
