# Coins change

The change making problem addresses the question: 
*how can a given amount of money be made with the least number of coins of given denominations?*
(https://en.wikipedia.org/wiki/Change-making_problem)

## Greedy approach
The naive, greedy approach consists in picking the largest denomination of coin which is not greater than the remaining amount. 
This local optimisation produces a globally optimal results **only** for the so called canonical coins systems.

## Dynamic programming approach
A general solution, valid for any set of denominations, can be obtained iterating over all the amounts from 0 to the given amount,
and over every subset of denominations smaller than the current amount. At each iteration, we decide whether to use the latest added 
denomination or not, checking whether it allows us to make up the current amount with a smaller number of coins.


## Usage
```
  const change = require('./change');
  change(money, price);
```

The default denominations set is `[0.01, 0.05, 0.1, 0.25, 0.5, 1]`. You may change it
```
  const denominations = require('./denominations');
  denominations.set([1, 3, 4]);
```

## Test

```
  $ npm install && npm test
```
