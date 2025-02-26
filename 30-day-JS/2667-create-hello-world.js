// Question is just about return 'Hello World'

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return  () => 'Hello World'
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */