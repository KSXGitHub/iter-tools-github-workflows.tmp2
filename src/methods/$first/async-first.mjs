/**
 * @generated-from ./$first.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncFirstOr } from '../$first-or/async-first-or';
export function asyncFirst(iterable) {
  return asyncFirstOr(iterable, undefined);
}
export default asyncFirst;
