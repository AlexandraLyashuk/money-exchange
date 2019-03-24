// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    const COINS = {
        50: 'H',
        25: 'Q',
        10: 'D',
        5: 'N',
        1: 'P'
      }
      
        if (currency > 10000) {
          return {error: "You are rich, my friend! We don't have so much coins for exchange"}
        }
        const coinsNumbers = [50, 25, 10, 5, 1]
        const result = {}
        for (let coin of coinsNumbers) {
          if (coin <= currency) {
            let val = Math.floor(currency/coin)
            result[COINS[coin]] = val
            currency -= val*coin
          }
          if (currency === 0) {
            break
          }
        }
        return result
      
    // Return an object containing the minimum number of coins needed to make change
}
