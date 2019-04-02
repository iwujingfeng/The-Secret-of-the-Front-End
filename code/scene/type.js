{
    // 基本数组类型判断
    console.log(typeof 1 === "number"); // true
    console.log(typeof "jack" === 'string'); // true
    console.log(typeof undefined === 'undefined'); // true
    console.log(typeof true === 'boolean'); // 'true
    console.log(typeof Symbol() === 'symbol'); // true
    console.log(typeof b === 'undefined'); // 判断未声明的变量 true
}


{
    // 判断是否是数组
    const arr = []
    console.log(arr instanceof Array) // true 任何数组都是Array的一个实例
    console.log(arr instanceof Object) // true 因为 Array 本质上是 Object 的一个子类型 所以，要判断是数组还是对象 必须先判断是否是数组类型

    console.log(arr.constructor === Array) // true js中每个对象都有 constructor 属性

    console.log(Array.prototype.isPrototypeOf(arr)) // true 利用isPrototypeOf()方法，判定 Array.prototype 是不是在 arr 的原型链中

    console.log(Object.getPrototypeOf(arr) === Array.prototype) // true

    console.log(Object.prototype.toString.call(arr) === '[object Array]') // true
    console.log(Object.prototype.toString.apply(arr) === '[object Array]') // true

    console.log(Array.isArray(arr)) // true

    // https://www.cnblogs.com/Walker-lyl/p/5597547.html
    // https://www.jb51.net/article/79939.htm
    // https://blog.csdn.net/oliverpeng1521314/article/details/70980129
    // https://www.cnblogs.com/leaf930814/p/6659996.html
}

{
    // 判断是否是对象
    const obj = {}
    // instanceof 不能判断 因为数组也是 Object
    console.log(obj.constructor === Object) // true
    console.log(Object.prototype.toString.call(obj) === '[object Object]') // true
    console.log(Object.prototype.toString.apply(obj) === '[object Object]') // true
}


{
    // instanceof 详解
}

{
    // constructor 详解
}

{
    // Object.prototype.toString 详解
    // 1.判断基本类型：
    console.log(Object.prototype.toString.call(null)); // '[object Null]'
    console.log(Object.prototype.toString.call(undefined)); // '[object Undefined]'
    console.log(Object.prototype.toString.call('abc')); // '[object String]'
    console.log(Object.prototype.toString.call(123)); // '[object Number]'
    console.log(Object.prototype.toString.call(true)); // '[object Boolean]'

    // 2.判断原生引用类型：
    console.log(Object.prototype.toString.call(function () {})); // '[object Function]'
    console.log(Object.prototype.toString.call(new Date())); // '[object Date]'
    console.log(Object.prototype.toString.call([])); // '[object Array]'
    console.log(Object.prototype.toString.call({})); // '[object Array]'
    console.log(Object.prototype.toString.call(/[hbc]at/gi)); // '[object RegExp]'
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    var person = new Person("Rose", 18);
    console.log(Object.prototype.toString.call(person)); // '[object Object]'
    // 很明显这种方法不能准确判断 person 是 Person 类的实例，而只能用instanceof 操作符来进行判断，如下所示：
    console.log(person instanceof Person); // true
}