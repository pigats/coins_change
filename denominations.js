let denominations = [0.01, 0.05, 0.1, 0.25, 0.5, 1];

module.exports = {
    set: (values) => { 
        denominations = values.sort((a, b) => a - b);
    },

    get: () => denominations
}
