/**
 * @generated-from ./$first.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { asyncFirst, range } from '..';
describe('asyncFirst', () => {
  it('returns first item', async () => {
    const iter = range(10);
    expect(await asyncFirst(iter)).toBe(0);
  });
  it('returns no items', async () => {
    const iter = range(0);
    expect(await asyncFirst(iter)).toBe(undefined);
  });
});
