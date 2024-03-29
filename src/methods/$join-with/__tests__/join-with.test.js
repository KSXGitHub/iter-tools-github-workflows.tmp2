/**
 * @generated-from ./$join-with.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { joinWith, toArray } from '../../..';
describe('joinWith', () => {
  it('should join each group with the provided value', () => {
    expect(toArray(joinWith(null, [[1], [2], [3]]))).toEqual([1, null, 2, null, 3]);
  });
  it('should have two adjacent separators when encountering an empty group', () => {
    expect(toArray(joinWith(null, [[1], [], [3]]))).toEqual([1, null, null, 3]);
  });
  it('should yield a single separator when joining two empty groups', () => {
    expect(toArray(joinWith(null, [[], []]))).toEqual([null]);
  });
  it('passes through the empty iterable', () => {
    expect(toArray(joinWith(0, null))).toEqual([]);
  });
  it('passes through the empty string', () => {
    expect(toArray(joinWith(' ', ''))).toEqual([]);
  });
  describe('given a string', () => {
    it('should split on every item which is equal to the on argument', () => {
      expect(toArray(joinWith('Ø', ['11', '22', '33']))).toEqual([
        '1',
        '1',
        'Ø',
        '2',
        '2',
        'Ø',
        '3',
        '3',
      ]);
    });
  });
});
