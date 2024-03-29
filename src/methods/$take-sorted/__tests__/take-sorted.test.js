/**
 * @generated-from ./$take-sorted.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { takeSorted, toArray } from '../../..';
describe('takeSorted', () => {
  it('return smallest iterable', () => {
    const smallest3 = takeSorted(3, [99, 12, 4, 6, 97, 44, 66, 77, 98]);
    expect(toArray(smallest3)).toEqual([97, 98, 99]);
    const smallest1 = takeSorted(1, [99, 12, 4, 6, 97, 44, 66, 77, 98]);
    expect(toArray(smallest1)).toEqual([99]);
  });
  it('return smallest iterable, using comparator', () => {
    const smallest2 = takeSorted((a, b) => a.length - b.length, 2, [
      'abc',
      'a',
      'abcd',
      'abcd',
      'abcdef',
      'ab',
    ]);
    expect(toArray(smallest2)).toEqual(['abcd', 'abcdef']);
  });
  it('return smallest iterable, using curry', () => {
    const smallest3 = takeSorted(3)([99, 12, 4, 6, 97, 44, 66, 77, 98]);
    expect(toArray(smallest3)).toEqual([97, 98, 99]);
  });
});
