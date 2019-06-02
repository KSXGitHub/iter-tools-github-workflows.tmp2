/**
 * @generated-from ./$flat-map.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { flatMap, toArray, range } from '..';
describe('flatMap', () => {
  it('returns flatMapped iterable', () => {
    const iter = flatMap(item => [item, item * 2], [1, 2, 3]);
    expect(toArray(iter)).toEqual([1, 2, 2, 4, 3, 6]);
  });
  it('returns flatMapped iterable from iterable', () => {
    const iter = flatMap(
      item => [item, item * 2],
      range({
        start: 1,
        end: 4,
      }),
    );
    expect(toArray(iter)).toEqual([1, 2, 2, 4, 3, 6]);
  });
  it('returns flatMapped iterable (curried version)', () => {
    const iter = flatMap(item => [item, item * 2]);
    expect(
      toArray(
        iter(
          range({
            start: 1,
            end: 4,
          }),
        ),
      ),
    ).toEqual([1, 2, 2, 4, 3, 6]);
  });
  it('returns empty iterable from null', () => {
    expect(toArray(flatMap(item => item, null))).toEqual([]);
  });
});
