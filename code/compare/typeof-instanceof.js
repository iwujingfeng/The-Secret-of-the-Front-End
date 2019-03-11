// 基本类型
{
    console.log(typeof 1); // 'number'
    console.log(typeof "jack"); // 'string'
    console.log(typeof undefined); // 'undefined'
    console.log(typeof true); // 'boolean'
    console.log(typeof Symbol()); // 'symbol'
    console.log(typeof b); // 判断未声明的变量 'undefined'
}

// 数组和对象
{
    console.log(typeof []); // 'object'
    console.log(typeof {}); // 'object'
    console.log(typeof console.log); // 'function'
    console.log(typeof
        function () {}) // 'function'
}

// 判断 null
{
    console.log(typeof null); // 'object'
}

// 
{
    const person = function () {}
    const nicole = new person()
    console.log(nicole instanceof person) // 返回布尔值 true
    console.log(nicole instanceof Object); // 返回布尔值 true
    console.log(Object.getPrototypeOf(nicole) === person.prototype) // 返回布尔值 true
    console.log(Object.prototype.isPrototypeOf(nicole)) // 返回布尔值 true
    console.log(person.prototype instanceof Object) // 返回布尔值 true
}

{
    const simpleStr = "This is a simple string";
    const myString = new String();
    const newStr = new String("String created with constructor");
    console.log(simpleStr instanceof String); // 返回 false, 检查原型链会找到 undefined
    console.log(myString instanceof String); // 返回 true
    console.log(newStr instanceof String); // 返回 true
    console.log(myString instanceof Object); // 返回 true
    const myDate = new Date();
    console.log(myDate instanceof Date); // 返回 true
    console.log(myDate instanceof Object); // 返回 true
    const myArr = []
    console.log(myArr instanceof Object) // 返回 true
    const myObj = {};
    console.log(myArr instanceof Object) // 返回 true
    const myNonObj = Object.create(null);
    console.log(myNonObj instanceof Object) // 这种方法创建的对象不是Object的一个实例
}