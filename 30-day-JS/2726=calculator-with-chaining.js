class Calculator {

    /** 
     * @param {number} value
     */
    constructor(value) {
        this.initial = value
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.initial = value + this.initial
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.initial = this.initial - value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.initial = this.initial * value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw Error('Division by zero is not allowed')
        } else {
            this.initial = this.initial / value
            return this
        }

    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.initial = this.initial ** value
        return this
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.initial
    }
}