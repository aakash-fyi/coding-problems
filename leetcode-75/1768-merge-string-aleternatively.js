// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let string = ''
    const length = Math.min(word1.length,word2.length)
    for (i=0; i< length; i++ ){
    string += word1[i] + word2[i]
    }
    return string + word1.slice(length) + word2.slice(length)
};