/**
 * @generated-from ./$batch.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { batch, toArray, range } from '..';
describe('batch', () => {
  it('returns an iterable with batches', () => {
    const iter = batch(2, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(toArray(iter)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });
  it('returns an iterable with batches when passed an iterable', () => {
    const iter = batch(
      2,
      range({
        start: 1,
        end: 10,
      }),
    );
    expect(toArray(iter)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });
  it('returns an iterable with batches when passed an iterable (2)', () => {
    const iter = batch(
      2,
      range({
        start: 1,
        end: 9,
      }),
    );
    expect(toArray(iter)).toEqual([[1, 2], [3, 4], [5, 6], [7, 8]]);
  });
  it('returns an iterable with batches (curried version)', () => {
    const iter = batch(2);
    expect(
      toArray(
        iter(
          range({
            start: 1,
            end: 10,
          }),
        ),
      ),
    ).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });
  it('returns an empty iterable when passed null', () => {
    expect(toArray(batch(2, null))).toEqual([]);
  });
});
