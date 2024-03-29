/**
 * @generated-from ./$flat.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import {
  AsyncInputIterable,
  AsyncDefinedInputIterable,
  AsyncGeneratorIterator,
  AsyncMaybePromise,
} from '../../internal/async-iterable';
type AsyncFlattened<T> = T extends Array<infer U> ? U : T extends ReadonlyArray<infer U> ? U : T extends AsyncDefinedInputIterable<infer U> ? U : T; // prettier-ignore

declare function asyncFlat<U>(depth: 0, iterable: U): AsyncGeneratorIterator<AsyncFlattened<U>>; // prettier-ignore

declare function asyncFlat<U>(depth: 1, iterable: U): AsyncGeneratorIterator<AsyncFlattened<AsyncFlattened<U>>>; // prettier-ignore

declare function asyncFlat<U>(depth: 2, iterable: U): AsyncGeneratorIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>; // prettier-ignore

declare function asyncFlat<U>(depth: 3, iterable: U): AsyncGeneratorIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>; // prettier-ignore

declare function asyncFlat<U>(depth: 4, iterable: U): AsyncGeneratorIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>; // prettier-ignore

declare function asyncFlat<U>(depth: 5, iterable: U): AsyncGeneratorIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>; // prettier-ignore

declare function asyncFlat<U>(depth: 6, iterable: U): AsyncGeneratorIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>>; // prettier-ignore

declare function asyncFlat<U>(depth: 7, iterable: U): AsyncGeneratorIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>>>; // prettier-ignore

declare function asyncFlat(depth: 0): <U>(iterable: U) => AsyncGeneratorIterator<AsyncFlattened<U>>; // prettier-ignore

declare function asyncFlat(depth: 1): <U>(iterable: U) => AsyncGeneratorIterator<AsyncFlattened<AsyncFlattened<U>>>; // prettier-ignore

declare function asyncFlat(depth: 2): <U>(iterable: U) => AsyncGeneratorIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>; // prettier-ignore

declare function asyncFlat(depth: 3): <U>(iterable: U) => AsyncGeneratorIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>; // prettier-ignore

declare function asyncFlat(depth: 4): <U>(iterable: U) => AsyncGeneratorIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>; // prettier-ignore

declare function asyncFlat(depth: 5): <U>(iterable: U) => AsyncGeneratorIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>; // prettier-ignore

declare function asyncFlat(depth: 6): <U>(iterable: U) => AsyncGeneratorIterator<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>>>>; // prettier-ignore

declare function asyncFlat(
  depth: 7,
): <U>(
  iterable: U,
) => AsyncGeneratorIterator<
  AsyncFlattened<
    AsyncFlattened<
      AsyncFlattened<
        AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<AsyncFlattened<U>>>>>
      >
    >
  >
>;
declare function asyncFlat(
  shouldFlat: (item: any) => AsyncMaybePromise<boolean>,
  depth: number,
  iter: AsyncInputIterable<any>,
): AsyncGeneratorIterator<any>;
declare function asyncFlat(iterable: AsyncInputIterable<any>): AsyncGeneratorIterator<any>;
declare function asyncFlat(
  depth: number,
  iterable: AsyncInputIterable<any>,
): AsyncGeneratorIterator<any>;
declare function asyncFlat(
  depth?: number,
): (iterable: AsyncInputIterable<any>) => AsyncGeneratorIterator<any>;
export default asyncFlat;
