/* 
对于简单数据类型，赋值就是拷贝
对于复杂数据类型，赋值就是浅拷贝
    浅拷贝-只拷贝引用，不拷贝值
    深拷贝-既拷贝引用，也拷贝值
*/

// for-in 递归深拷贝实现
function deepCopy(obj) {
    const copy = Array.isArray(obj) ? [] : {} // 判断数组和对象
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if (isObject(value)) {
                copy[key] = deepCopy(value)
            } else {
                copy[key] = value
            }
        }
    }
    return copy
}

// 判断对象
function isObject(val) {
    return typeof val === 'object' && val !== null
}

const obj = { name: 'jalen', age: 11, hobby: ['eat', 'basketball'] }
const res1 = deepCopy(obj)
const res2 = obj
res1.name = 'jalen1'
res1.hobby.pop()
res2.name = 'jalen2'
res2.hobby.push('play')
console.log(obj);
console.log(obj === res1);
console.log(obj === res2);
