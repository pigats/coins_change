const assert = require('chai').assert;
const denominations = require('../denominations');
const change = require('../change');

describe('change', () => {
   let defaultDenominations = denominations.get();
    afterEach(() => {
        denominations.set(defaultDenominations);
    });

    it('returns the minimum coins number change', () => {
        assert.sameMembers(change(10, 9.22), [3, 0, 0, 1, 1, 0]);
    });

    it('works for non-canonical denominations sets', () => {
       denominations.set([1, 3, 4]); 
       assert.sameMembers(change(10, 4), [0, 2, 0]);
    });
});
