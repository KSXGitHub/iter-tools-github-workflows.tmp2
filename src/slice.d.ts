/**
 * @generated-from ./$slice.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { InputIterable, GeneratorIterator } from './internal/iterable';
declare function slice<T = any>(
  opts:
    | number
    | {
        readonly start?: number;
        readonly end?: number;
        readonly step?: number;
      },
): (iterable: InputIterable<T>) => GeneratorIterator<T>;
declare function slice<T = any>(
  opts:
    | number
    | {
        readonly start?: number;
        readonly end?: number;
        readonly step?: number;
      },
  iterable: InputIterable<T>,
): GeneratorIterator<T>;
export default slice;
