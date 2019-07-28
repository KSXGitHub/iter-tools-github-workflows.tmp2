/**
 * @generated-from ./async-regexp-exec-iter.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncGeneratorIterator } from '../internal/async-iterable';
import { asyncRegexpExecIter, asyncToArray } from '..';
describe('asyncRegexpExecIter', () => {
  const getMatchesArray = async (iter: AsyncGeneratorIterator<string>) =>
    (await asyncToArray(iter)).map(matches => matches[0]);

  it('should exec 1', async () => {
    const re = /a+/g;
    const iter = asyncRegexpExecIter(re, ['aa', 'ba', 'cac']);
    expect(await getMatchesArray(iter)).toEqual(['aa', 'a', 'a']);
  });
  it('should exec 2', async () => {
    const re = /ca+t/g;
    const iter = asyncRegexpExecIter(re, ['caat', 'ca', 'dogcat']);
    expect(await getMatchesArray(iter)).toEqual(['caat', 'cat']);
  });
  it('should exec 3', async () => {
    const re = /ca+t/g;
    const iter = asyncRegexpExecIter(re, ['caa', 'a', 'tdogca', 't']);
    expect(await getMatchesArray(iter)).toEqual(['caaat', 'cat']);
  });
  it('should exec 4', async () => {
    const re = /ca+t/g;
    const iter = asyncRegexpExecIter(re, ['caa', 'a', 'tdogca', 'tcatx']);
    expect(await getMatchesArray(iter)).toEqual(['caaat', 'cat', 'cat']);
  });
  it('can be curried', async () => {
    const re = /a+/g;
    const aRE = asyncRegexpExecIter(re);
    const iter = aRE(['aa', 'ba', 'cac']);
    expect(await getMatchesArray(iter)).toEqual(['aa', 'a', 'a']);
  });
  it('should exec (nothing to exec)', async () => {
    const re = /a+/g;
    const iter = asyncRegexpExecIter(re, ['xbsd']);
    expect(await getMatchesArray(iter)).toEqual([]);
  });
  it('should exec (no iterables)', async () => {
    const re = /a+/g;
    const iter = asyncRegexpExecIter(re, null);
    expect(await getMatchesArray(iter)).toEqual([]);
  });
});
