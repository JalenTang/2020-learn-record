class A {
    constructor(a) {
        this.a = a
        this.main()
    }

    main() {
        console.log('this.a', this.a);
    }
}

class B extends A {
    constructor(a, b) {
        super(a)
        this.b = b
        this.main()
    }

    main() {
        console.log('this.b', this.b);
    }
}

class C extends B {
    constructor(a, b, c) {
        super(a, b)
        this.c = c
        this.main()
    }

    main() {
        console.log('this.c', this.c);
    }
}
const tag = new C(1, 2, 3);

// 写出输出结果
// this.c undefined
// this.c undefined
// this.c 3