/**
 * @generated-from ./interleave.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { Promise, Iterable } from '../../../internal/iterable';
import { interleave, InterleaveBuffer, toArray } from '../../..';
describe('interleave', () => {
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const c = [7, 8, 9];
  it('can be used to implement a round robin interleave', () => {
    const roundRobin = interleave(function*(
      canTakeAny: () => Promise<InterleaveBuffer<number> | null>,
      a: InterleaveBuffer<number>,
      b: InterleaveBuffer<number>,
      c: InterleaveBuffer<number>,
    ) {
      while (canTakeAny()) {
        if (a.canTake()) yield a.take();
        if (b.canTake()) yield b.take();
        if (c.canTake()) yield c.take();
      }
    });
    expect(toArray(roundRobin(a, b, c))).toEqual([1, 4, 7, 2, 5, 8, 3, 6, 9]);
  });
  it('can be passed options for the generator', () => {
    const options = {};
    expect.assertions(1);
    toArray(
      interleave(
        function*(o: {}): Iterable<any> {
          expect(o).toBe(options);
        },
        options,
        null,
      ),
    );
  });
  describe('the return value of canTakeAny', () => {
    it('can be used to do concatenation', () => {
      const concatenate = interleave(function*(
        canTakeAny: () => Promise<InterleaveBuffer<number> | null>,
        a: InterleaveBuffer<number>,
        b: InterleaveBuffer<number>,
        c: InterleaveBuffer<number>,
      ) {
        let buffer = canTakeAny();

        while (buffer) {
          yield buffer.take();
          buffer = canTakeAny();
        }
      });
      expect(Array.from(concatenate(a, b, c))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });
});
