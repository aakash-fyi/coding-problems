// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and 
// those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
// var sortBy = function(arr, fn) {
//     const tempArray = []
//     for  (let i=0; i< arr.length; i++){
//         let sortKey = fn(arr[i])
//         tempArray.push({
//             key:sortKey,
//             value:arr[i]
//         })
//     }
//    return   tempArray.sort((a,b) => a.key -b.key).map(item => item.value)
// };
const sortBy = (arr, fn) => {
    return [...arr].sort((a, b) => fn(a) - fn(b))
   };