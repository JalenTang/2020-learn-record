// 将传入对象的下划线命名方式全部换为驼峰式(考虑递归的场景)

// 判断对象
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

// 首字母大写
function uppercaseFirst(str) {
    return str[0].toUpperCase() + str.substr(1)
}

// 下划线转驼峰
function underscoreToCamel(str) {
    const [$1, ...$2] = str.split('_')
    return $2.reduce((prev, value) => {
        return prev + uppercaseFirst(value)
    }, $1)
}

function changeName(obj) {
    const res = {}
    Object.keys(obj).forEach(key => {
        const value = obj[key]
        const camelKey = underscoreToCamel(key)
        if (isObject(value)) { // 递归
            res[camelKey] = changeName(value)
        } else {
            res[camelKey] = value
        }
    })

    return res
}

const obj = {
    first_name: 'chen',
    res_res: {
        a_b_cc: [1, 2, 3]
    }
}

const res = changeName(obj)

console.log(res);
