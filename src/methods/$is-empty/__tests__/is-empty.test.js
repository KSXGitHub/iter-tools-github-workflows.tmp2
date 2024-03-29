/**
 * @generated-from ./$is-empty.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { isEmpty, range } from '../../..';
describe('isEmpty', () => {
  describe('when iterable contains items', () => {
    it('returns true', () => {
      const iter = range(10);
      expect(isEmpty(iter)).toBe(false);
    });
  });
  describe('when iterable is empty', () => {
    it('returns false', () => {
      const iter = range(0);
      expect(isEmpty(iter)).toBe(true);
    });
  });
});
