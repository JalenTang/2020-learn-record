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
