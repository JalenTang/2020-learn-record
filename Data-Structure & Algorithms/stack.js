function Stack() {
    this.size = 0
    this.data = []

    // Add a value to the top of the stack
    this.push = function (value) {
        this.data[this.size] = value
        this.size++
        // or this.data.push(value)
    }

    // Remove a value from the top of the stack, and return it
    this.pop = function () {
        if (this.size === 0) {
            console.log();
            return 
        }
        const lastKey = this.size - 1
        const result = this.data[lastKey]
        delete this.data[lastKey]
        this.size--
        return result
        // or this.data.pop()
    }

    // return the top value of the stack, without removing it
    this.peek = function () {
        // if (this.size === 0) {
        //     return 
        // }
        return this.data[this.size - 1]
    }

    // check if stack is empty
    this.isEmpty = function () {
        return this.size === 0
    }

    // clear stack
    this.clear = function() {
        delete this.data
        this.size = 0
        this.data = []
    }
}

const fruitStack = new Stack()
fruitStack.push('apple')
console.log(fruitStack.isEmpty());
console.log(fruitStack.peek());
fruitStack.pop('apple')
console.log(fruitStack.isEmpty());

