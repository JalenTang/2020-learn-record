function Hero(name, options) {
    this.name = name
    this.options = options
}

const yasuo = new Hero('yasuo', { country: 'Japan' })

console.log(Hero.prototype.constructor === Hero); // true
console.log(yasuo.__proto__ === Hero.prototype); // true
console.log(Object.getPrototypeOf(yasuo) === Hero.prototype); // true
console.log(Hero.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null
