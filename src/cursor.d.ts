/**
 * @generated-from ./$cursor.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { Repeat8 } from './internal/types/utility';
import { InputIterable, GeneratorIterator } from './internal/iterable';
declare function cursor<Size extends number, Filler = undefined, T = any>(
  opts: {
    readonly size: Size;
    readonly trailing?: boolean;
    readonly filler?: Filler;
  },
  iterable: InputIterable<T>,
): GeneratorIterator<Repeat8<T | Filler, Size>>;
export default cursor;
