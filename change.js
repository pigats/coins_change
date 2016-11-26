const _denominations = require('./denominations');

module.exports = (money, price) => {
    const SCALE_UP = 1 / _denominations.get()[0];
    const denominations = _denominations.get().map(el => el * SCALE_UP);

    const change = [];
    change.length = denominations.length;
    change.fill(0);

    const diff = Math.round((money - price) * SCALE_UP);

    if(diff === 0) {
        return change;
    }

    const table = {};
    table[0] = change.slice(0);

    const numberOfCoins = function(change) {
        return change.reduce((sum, coins) => sum += coins, 0);
    };

    // loop through all amounts, from the minimum denomination to diff, incrementing by the smallest denomination
    for(let i = denominations[0]; i <= diff; i += denominations[0]) {
        table[i] = change.slice(0);

        // add one denomination at a time, and check whether it allows for a smaller number of coins
        for(let j = 0, l = denominations.length; j < l; j += 1) {
            if(j === 0) {
                table[i][j] = i / denominations[0];
                continue;
            }

            if(denominations[j] > i) { 
                break;
            }

            let useThisDenomination = table[i - denominations[j]].slice(0);
            useThisDenomination[j] += 1;
            let n = numberOfCoins(useThisDenomination);
            
            let doNotUseThisDenomination = table[i].slice(0);
            let m = numberOfCoins(doNotUseThisDenomination);

            table[i] = n < m ? useThisDenomination : doNotUseThisDenomination;
        }
    }

    return table[diff];
}
