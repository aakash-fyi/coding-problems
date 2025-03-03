// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let word = s.split('')
    let vowels = 'aeiouAEIOU'
    let start = 0
    let end = s.length - 1
    while (start < end) {
        while (start < end && !vowels.includes(word[start])) {
            start++
        }

        while (start < end && !vowels.includes(word[end])) {
            end--
        }

        [word[start], word[end]] = [word[end], word[start]]
        start++
        end--

    }

    return word.join('')

};


