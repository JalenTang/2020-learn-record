// instanceof 检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
// 手写实现 递归实现
function selfInstanceof(left, right) {
    if (left === null) return false
    let proto = left.__proto__
    let prototype = right.prototype
    if (proto === null) {
        return false
    }

    if (proto === prototype) {
        return true
    }
    return selfInstanceof(proto, right)
}

const p = {}
console.log(p instanceof Object);
console.log(selfInstanceof(p, Object));

console.log(null instanceof Object);
console.log(selfInstanceof(null, Object));

console.log(Function instanceof Object);
console.log(selfInstanceof(Function, Object));
console.log(Object instanceof Function);
console.log(selfInstanceof(Object, Function));


