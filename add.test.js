// test/math.test.js
import { describe, it } from "mocha";
import { expect } from "chai";
import { add } from "./add.js";
describe('add()', () => {
  it('devrait retourner 4 pour 2 + 2', () => {
    expect(add(2, 2)).to.equal(4);
  });

  it('devrait retourner -1 pour -2 + 1', () => {
    expect(add(-2, 1)).to.equal(-1);
  });
});
