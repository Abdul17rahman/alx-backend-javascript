const { calculateNumber } = require('./0-calcul.js')
const assert = require('assert')

describe('Testing the addition function', () => {
	it('Checking addition for int', () => {
		assert.strictEqual(calculateNumber(1,2), 3)
	})
})