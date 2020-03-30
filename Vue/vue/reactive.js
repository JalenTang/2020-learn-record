/* 响应式原理核心源码 参照Vue.js源码删减 */

// 1.初始化所有数据 参数为Vue实例
function initState(vm) {
    vm._watchers = [] // 初始化依赖
    const opts = vm.$options
    // 初始化 props methods data computed watch等等
    if (opts.props) initProps(vm, opts.props)
    if (opts.methods) initMethods(vm, opts.methods)
    if (opts.data) {
        initData(vm)
    } else {
        observe(vm._data = {}, true)
    }
    if (opts.computed) initComputed(vm, opts.computed)
    if (opts.watch && opts.watch !== nativeWatch) {
        initWatch(vm, opts.watch)
    }
}

// 2. 以初始化data为例
function initData(vm) {
    let data = vm.$options.data
    data = vm._data = typeof data === 'function'
        ? getData(data, vm)
        : data || {}
    const keys = Object.keys(data)
    let i = keys.length
    while (i--) {
        const key = keys[i]
        if (!isReserved(key)) {
            // 添加代理
            proxy(vm, `_data`, key)
        }
    }
    // 观察者模式
    observe(data, true /* asRootData */)
}

// 3.代理对象 改写get set
function proxy(target, sourceKey, key) {
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: function proxyGetter() {
            return this[sourceKey][key]
        },
        set: function proxySetter(val) {
            this[sourceKey][key] = val
        }
    })
}

// 4.观察者模式
function observe(value, asRootData) {
    // 不观察非对象 或者 VNode节点 的值
    if (!isObject(value) || value instanceof VNode) {
        return
    }
    // 判断对象是否已有观察者，单例模式
    let ob
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__
    } else if (
        shouldObserve &&
        !isServerRendering() &&
        (Array.isArray(value) || isPlainObject(value)) &&
        Object.isExtensible(value) &&
        !value._isVue
    ) {
        ob = new Observer(value)
    }
    if (asRootData && ob) {
        ob.vmCount++
    }
    return ob
}

// 5.观察者类 
class Observer {
    value: any;
    dep: Dep; // 依赖
    vmCount: number; // 实例计数

    constructor(value: any) {
        this.value = value
        this.dep = new Dep()
        this.vmCount = 0
        def(value, '__ob__', this) // 通过Object.defineProperty的形式定义一个响应式的属性
        if (Array.isArray(value)) { // 对数组做处理
            if (hasProto) {
                // arrayMethods = Object.create(Array.prototype)
                // value.__proto__ = arrayMethods
                // 通过继承的方式 新建了一个"Array"
                // 新建一个对象，并使用数组的原型对象提供新对象的__proto__
                protoAugment(value, arrayMethods)
            } else {
                // arrayKeys = Object.getOwnPropertyNames(arrayMethods)
                // 通过深拷贝的方式 新建了一个"Array"
                copyAugment(value, arrayMethods, arrayKeys)
            }

            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }

    // 遍历监听对象
    walk(obj: Object) {
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i])
        }
    }

    // 遍历监听数组
    observeArray(items: Array<any>) {
        for (let i = 0, l = items.length; i < l; i++) {
            observe(items[i])
        }
    }
}

// 6.响应式
function defineReactive(
    obj: Object,
    key: string,
    val: any,
    customSetter?: ?Function,
    shallow?: boolean
) {
    const dep = new Dep()

    const property = Object.getOwnPropertyDescriptor(obj, key)
    // 不可修改属性 直接返回
    if (property && property.configurable === false) {
        return
    }

    // cater for pre-defined getter/setters
    const getter = property && property.get
    const setter = property && property.set
    if ((!getter || setter) && arguments.length === 2) {
        val = obj[key]
    }

    let childOb = !shallow && observe(val)
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            const value = getter ? getter.call(obj) : val
            if (Dep.target) {
                dep.depend() // 添加依赖
                if (childOb) {
                    childOb.dep.depend()
                    if (Array.isArray(value)) {
                        dependArray(value)
                    }
                }
            }
            return value
        },
        set: function reactiveSetter(newVal) {
            const value = getter ? getter.call(obj) : val
            // 值未变化 直接返回
            if (newVal === value || (newVal !== newVal && value !== value)) {
                return
            }
            if (getter && !setter) return
            if (setter) {
                setter.call(obj, newVal)
            } else {
                val = newVal
            }
            childOb = !shallow && observe(newVal)
            dep.notify() // 通知依赖
        }
    })
}

// 7. 依赖
class Dep {
    static target: ?Watcher;
    id: number;
    subs: Array<Watcher>;

    constructor() {
        this.id = uid++
        this.subs = []
    }

    addSub(sub) {
        this.subs.push(sub)
    }

    removeSub(sub) {
        remove(this.subs, sub)
    }

    depend() {
        if (Dep.target) {
            Dep.target.addDep(this)
        }
    }

    notify() {
        // stabilize the subscriber list first
        const subs = this.subs.slice()
        if (process.env.NODE_ENV !== 'production' && !config.async) {
            // subs aren't sorted in scheduler if not running async
            // we need to sort them now to make sure they fire in correct
            // order
            subs.sort((a, b) => a.id - b.id)
        }
        // 依赖更新
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }
}
