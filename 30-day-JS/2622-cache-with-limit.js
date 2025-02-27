// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

// var TimeLimitedCache = function() {
//     this.memory =[]
// };

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const data = this.memory.find(value => key === value.key && value.status === 'active')
    if (data) {
        data.value = value
        clearTimeout(data.timeout)
        data.timeout = setTimeout(()=>{
            data.status = 'expired'
        },duration)
        return true
    }
    const newEntry = {
        key,
        value,
        duration,
        status:"active",
        timeout: setTimeout(()=>{
                newEntry.status = 'expired'
            },duration)
        
    }
    this.memory.push(newEntry)
    return false 
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const data = this.memory.find(value => key === value.key && value.status === 'active')
    if (data){
        return data.value
    }else {
        return -1
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const data = this.memory.filter(value => value.status === 'active')
    return data.length
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */