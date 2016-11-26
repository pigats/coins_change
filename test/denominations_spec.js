const assert = require('chai').assert;
const denominations = require('../denominations');

describe('denominations', () => {
    let defaultDenominations = [0.01, 0.05, 0.1, 0.25, 0.5, 1];
    afterEach(() => {
        denominations.set(defaultDenominations);
    });

    describe('.get()', () => {
        it('is a function', () => {
            assert.isFunction(denominations.get);
        });

        it('returns the denominations array', () => {
            assert.sameMembers(denominations.get(), defaultDenominations); 
        });
    });

    describe('.set()', () => {
        it('is a function', () => {
            assert.isFunction(denominations.set);
        });

        it('sets the denominations array', () => {
            let customDenominations = [1, 3, 4];
            denominations.set(customDenominations);
            assert.sameMembers(denominations.get(), customDenominations);
        });

        it('sorts the values in the passed argument', () => {
            let customDenominations = [4, 1, 3];
            let orderedCustomDenominations = customDenominations.sort((a, b) => a - b);
            denominations.set(customDenominations);
            assert.sameMembers(denominations.get(), orderedCustomDenominations);
        });
    });
});
