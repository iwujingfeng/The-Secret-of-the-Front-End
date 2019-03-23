// 构造函数没有返回值 
{
    function TestNew(name) {
        this.name = name
        console.log(this); // TestNew { name: 'jack' }
    }
    TestNew.prototype.getName = function () {
        console.log(this.name)
    }

    const t = new TestNew('jack')
    console.log(t) // TestNew { name: 'jack' }
    console.log(t.name) // jack
    t.getName() // jack
}
// 构造函数返回原始值
{
    function TestNew(name) {
        this.name = name
        return 'rose'
    }
    TestNew.prototype.getName = function () {
        console.log(this.name)
    }

    const t = new TestNew('jack')
    console.log(t.name) // jack
    t.getName() // jack
}

// 构造函数返回对象
{
    function TestNew(name) {
        this.name = name
        console.log(this) // TestNew { name: 'jack' }
        return {
            age: 21
        }
    }
    TestNew.prototype.getName = function () {
        console.log(this.name)
    }

    const t = new TestNew('jack')
    console.log(t) // { age: 21 }
    console.log(t.age) // 21
    console.log(t.name) // undefined
    t.getName() // TypeError: t.getName is not a function
}

{
    // 模拟new运算符的实现
    function newInstance(cons, ...args) {
        const instance = {} // 01
        Object.setPrototypeOf(instance, cons.prototype) // 02
        const ret = cons.apply(instance, args) // 03
        return ret instanceof Object ? ret : instance // 04
    }

    // 测试
    function TestNew(name, args) {
        this.name = name
        console.log(this) // TestNew { name: 'jack' }
    }
    TestNew.prototype.getName = function () {
        console.log(this.name)
    }

    const t = newInstance(TestNew, 'jack')
    console.log(t) // TestNew { name: 'jack' }
    console.log(t.name) // jack
    t.getName() // jack
}