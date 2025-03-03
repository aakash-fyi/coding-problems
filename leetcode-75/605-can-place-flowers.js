// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let counter = 0
    for (let i = 0; i < flowerbed.length; i++) {
        let value = flowerbed[i]
        let prefix = i === 0 ? 0 : flowerbed[i-1]
        let suffix = i === (flowerbed.length-1) ? 0 : flowerbed[i+1]

        if ((prefix + value + suffix) === 0) {
            counter += 1
            flowerbed[i] = 1
              if (counter >= n) return true; // Early exit if we meet `n`
        }

    }



    return counter >= n
};