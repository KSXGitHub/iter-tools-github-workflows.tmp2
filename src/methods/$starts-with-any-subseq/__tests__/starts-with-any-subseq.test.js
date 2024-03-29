/**
 * @generated-from ./$starts-with-any-subseq.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { startsWithAnySubseq, range } from '../../..';
describe('startsWithAnySubseq', () => {
  it('returns true if the iterable starts with any of the given subsequences', () => {
    expect(startsWithAnySubseq([[0, 1], [1, 2]], range(0, 10))).toBe(true);
  });
  it('returns false if the iterable includes but does not start with any of the given subsequences', () => {
    expect(startsWithAnySubseq([[1, 2], [2, 3]], range(0, 10))).toBe(false);
  });
  it('returns true if the iterable equals any of the given subsequences', () => {
    expect(startsWithAnySubseq([range(0, 2), range(1, 3)], range(1, 3))).toBe(true);
  });
  it('returns true if no subsequences are given', () => {
    expect(startsWithAnySubseq([], range(1, 3))).toBe(true);
  });
  it('returns false if the given subsequences are longer than the iterable', () => {
    expect(startsWithAnySubseq([range(0, 3), range(1, 4)], range(1, 3))).toBe(false);
  });
  describe('when the iterable is empty', () => {
    it('returns true if any subsequence is empty', () => {
      expect(startsWithAnySubseq([[], [null]], [])).toBe(true);
    });
    it('returns false if all subsequences are not empty', () => {
      expect(startsWithAnySubseq([[undefined]], [])).toBe(false);
    });
  });
});
