/**
 * @generated-from ./$includes-subseq.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { InputIterable, Promise, MaybePromise } from '../../internal/iterable';
declare function includesSubseq(
  subseq: InputIterable<any>,
): (iterable: InputIterable<any>) => Promise<boolean>;
declare function includesSubseq(
  subseq: InputIterable<any>,
  iterable: InputIterable<any>,
): Promise<boolean>;
export default includesSubseq;
