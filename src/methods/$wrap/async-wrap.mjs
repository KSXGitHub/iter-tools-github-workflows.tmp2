/**
 * @generated-from ./$wrap.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncWrapWithMethodIterable, asyncEnsureIterable } from '../../internal/async-iterable';

async function* asyncIdentity(iterable) {
  yield* asyncEnsureIterable(iterable)[Symbol.asyncIterator]();
}

export default asyncWrapWithMethodIterable(asyncIdentity);