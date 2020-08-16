# ES6

## Class 的基本概念和继承

### Class 的继承

基本概念

1. `class`的继承基于关键字`extends`: `class B extend A {}`
2. `class`的继承中关键字`super`表示父类的构造函数，用来新建父类的`this`对象，子类必须在调用`super()`之后才能使用`this`

ES5 的继承 vsES6 的继承

1. ES5 的继承的本质是先创造子类的实例对象`this`，然后将父类的方法添加到`this`上
2. ES6 的继承的实质是先将父类实例对象的属性和方法加到`this`上（因此必须先调用`super`方法），再调用子类的构造函数修改`this`

关键字`super`

1. `super`既可以当函数，代表调用父类的构造函数；也可以作为对象，指向父类的原型对象，在静态方法中，指向父类；
2. **_注意_**：`super`虽然代表了父类的构造函数，但是返回的是子类的实例，即`super`内部的`this`指的是子类的实例；

例如：

```javascript
class A {
	constructor(a) {
		this.a = a;
		this.main();
	}

	main() {
		console.log('this.a', this.a);
	}
}

class B extends A {
	constructor(a, b) {
		super(a);
		this.b = b;
		this.main();
	}

	main() {
		console.log('this.b', this.b);
	}
}

class C extends B {
	constructor(a, b, c) {
		super(a, b);
		this.c = c;
		this.main();
	}

	main() {
		console.log('this.c', this.c);
	}
}
const tag = new C(1, 2, 3);

// 输出结果
// this.c undefined
// this.c undefined
// this.c 3
```

## Proxy 和 Reflect

### Proxy

**Proxy** 用于修改某些操作的默认行为。可以理解为在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截器。

语法：`const p = new Proxy(target, handler)`
参数：

- **target**: 表示使用 Proxy 代理的目标对象（可以是任何类型的对象，包括数组，函数，另一个 Proxy）
- **handle**: 一个表示拦截操作的对象，对象中的值表示了执行各种拦截操作时的行为，总体有 13 中操作符

1. `get(target, propKey, receiver)` 拦截对象的读取，比如`proxy.foo` 或者 `proxy['foo']`
2. `set(target, propKey, value, reveiver)` 拦截对象的赋值，比如`proxy.foo = v` 或者 `proxy['foo'] = v`， 返回一个布尔值
3. `has(target, key)` 拦截`key in proxy`的操作，返回一个布尔值
4. `deleteProperty(target, key)` 拦截`delete`操作, 比如`delete proxy.foo`或者`delete proxy['foo']`, 返回一个布尔值
5. `oweKeys(target, key)` 拦截读取对象的属性名操作，比如`Object.getOwnPropertyNames(proxy)`, `Object.getOwnPropertySymbols(proxy)`, `Object.keys(proxy)`, `for const key in proxy`，返回一个数组，区分于`Object.keys`只返回对象的可遍历属性, 该方法返回对象所有自身的属性.
6. `getOwnPropertyDescriptor(target, propKey)` 拦截`Object.getOwnPropertyDescriptor(proxy, key)`，返回属性的描述对象。
7. `defineProperty(target, key, desc)` 拦截 `Object.defineProperty(proxy, key, desc)` 或者 `Object.defineProperties(proxy, descs)`, 返回一个布尔值
8. `preventExtensions(target)` 拦截`Object.preventExtensions(proxy)`，返回一个布尔值。
9. `isExtensible(target)` 拦截`Object.isExtensible(proxy)`，返回一个布尔值。
10. `getPrototypeOf(target)` 拦截`Object.getPrototypeOf(proxy)`，返回一个对象。
11. `setPrototypeOf(target, proto)` 拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值。
12. `apply(target, object, args)` 拦截 Proxy 实例作为函数调用的操作，比如`proxy(...args)`、`proxy.call(object, ...args)`、`proxy.apply(...)`
13. `construct(target, args)` 拦截 Proxy 实例作为构造函数调用的操作，比如`new proxy(...args)`

- **静态方法`Proxy.revocable()`**: 创建一个可撤销的`proxy`对象, 例如`const { proxy, revoke } = Proxy.revcocable(target, handle)`

### Reflect

- **Reflect**是 ES6 为了操作对象新增的 API，设计目的有几个：

1. 原先在 `Object` 上的属于语言的内部方法（比如 `Object.defineProperty`）全部部署在 `Reflect` 上
2. 修改某些 `Object` 方法的返回结果，让返回值更加合理
3. 让 `Object` 方法从命令式变为函数式形成
4. `Reflect` 方法和 `Proxy` 方法一一对应

- **Reflect**对象的 13 种静态方法，对**Proxy**

1. `Reflect.get(target, name, receiver)`
2. `Reflect.set(target, name, value, receiver)`
3. `Reflect.has(target, name)`
4. `Reflect.deleteProperty(target, name)`
5. `Reflect.ownKeys(target)`
6. `Reflect.getOwnPropertyDescriptor(target, name)`
7. `Reflect.defineProperty(target, name, desc)`
8. `Reflect.preventExtensions(target)`
9. `Reflect.isExtensible(target)`
10. `Reflect.getPrototypeOf(target)`
11. `Reflect.setPrototypeOf(target, prototype)`
12. `Reflect.apply(target, thisArg, args)`
13. `Reflect.construct(target, args)`

### 具体 DEMO

```JavaScript
const target = { a: `it's a value` };
const handle = {
  get: function (target, key, receiver) {
    console.log(`get: ${key}`);
    return Reflect.get(target, key);
    },
  set: function (target, key, value, receiver) {
    Reflect.set(target, key, value);
    return false;
  },
  has: function (target, key) {
    console.log(`has: ${key}`);
    return Reflect.has(target, key);
  },
  deleteProperty: function (target, key) {
    console.log(`delete: ${key}`);
    return Reflect.deleteProperty(target, key);
  },
  ownKeys: function (target) {
    console.log(`ownKeys: ${target}`);
    return Reflect.ownKeys(target);
  },
  getOwnPropertyDescriptor: function (target, key) {
    console.log(`getOwnPropertyDescriptor: ${target}-${key}`);
    return Reflect.getOwnPropertyDescriptor(target, key);
  },
};
const proxy1 = new Proxy(target, handle);
const { proxy, revoke } = Proxy.revocablel(target, handle)
```
