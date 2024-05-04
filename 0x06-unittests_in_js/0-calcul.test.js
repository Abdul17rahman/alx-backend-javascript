const { calculateNumber } = require('./0-calcul.js')
const assert = require('assert')

describe('Testing the addition function', () => {
	it('normal addition', () => {
		assert.strictEqual(calculateNumber(1,2), 3)
	})
	it('with decimal >= 0.5 ', () => {
    assert.strictEqual(calculateNumber(1.5, 1), 3);
    assert.strictEqual(calculateNumber(1, 2.6), 4);
    assert.strictEqual(calculateNumber(1.5, 2.6), 5);
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('decimal on one arg >= 0.5 ', () => {
    assert.strictEqual(calculateNumber(1.4, 1), 2);
    assert.strictEqual(calculateNumber(1, 2.1), 3);
    assert.strictEqual(calculateNumber(1.4, 1.4), 2);
  });

  it('not NaN', () => {
    assert.strictEqual(calculateNumber(), NaN);
    assert.strictEqual(calculateNumber(1, 'e'), NaN);
    assert.strictEqual(calculateNumber('e', 'e'), NaN);
  });
})