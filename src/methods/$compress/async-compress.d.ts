/**
 * @generated-from ./$compress.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncInputIterable, AsyncGeneratorIterator } from '../../internal/async-iterable';
declare function asyncCompress<T = any>(
  iterable: AsyncInputIterable<T>,
  compress: AsyncInputIterable<boolean>,
): AsyncGeneratorIterator<T>;
export default asyncCompress;
