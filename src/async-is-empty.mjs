/**
 * @generated-from ./$is-empty.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import asyncFirstOr from './async-first-or';
const NONE = {};

async function asyncIsEmpty(iterable) {
  return (await asyncFirstOr(NONE, iterable)) === NONE;
}

export default asyncIsEmpty;
