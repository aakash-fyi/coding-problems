/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const myObject = {}
    let newArray = [...arr1 ,...arr2]
    newArray.forEach(item => {
        myObject[item.id] = myObject[item.id] ? {...myObject[item.id] , ...item}: item
    })
     return Object.values(myObject);
};