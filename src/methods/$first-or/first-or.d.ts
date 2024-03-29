/**
 * @generated-from ./$first-or.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { InputIterable, Iterable, Promise } from '../../internal/iterable';
declare function firstOr<Iter extends InputIterable<any>, E>(
  whenEmpty: E,
  iterable: Iter,
): Iter extends [infer First, ...Array<any>]
  ? Promise<First>
  : Iter extends Iterable<infer T>
  ? Promise<T | E>
  : Promise<E>;
export default firstOr;
