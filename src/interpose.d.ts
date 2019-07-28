/**
 * @generated-from ./$interpose.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { InputIterable, GeneratorIterator } from './internal/iterable';
declare function interpose<I>(
  interposeItem: I,
): <T = any>(iterable: InputIterable<T>) => GeneratorIterator<T | I>;
declare function interpose<I, T = any>(
  interposeItem: I,
  iterable: InputIterable<T>,
): GeneratorIterator<T | I>;
export default interpose;
