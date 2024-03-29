/**
 * @generated-from ./$split.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { asyncSplit, asyncMap, asyncToArray } from '../../..';
describe('asyncSplit', () => {
  it('should yield an iterable for every item in the iterable', async () => {
    expect(
      await asyncToArray(asyncMap(group => asyncToArray(group), asyncSplit([1, 2, 3]))),
    ).toEqual([[1], [2], [3]]);
  });
});
