/**
 * @generated-from ./$enumerate.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { InputIterable, GeneratorIterator } from '../../internal/iterable';
declare function enumerate<T = any>(
  iterable: InputIterable<T>,
  start?: number,
): GeneratorIterator<[number, T]>;
export default enumerate;