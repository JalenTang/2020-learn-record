let obj1 = { name: '小明' }
let arr = []
arr = [obj1]
obj1 = null

console.log(obj1);
console.log(arr[0]);

let obj2 = { name: '小明' }
let ws = new WeakSet()
ws.add(obj2)
obj2 = null

console.log(obj2);
console.log(ws);

