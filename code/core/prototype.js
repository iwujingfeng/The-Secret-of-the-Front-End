// 原型与继承

{
    const obj = {}
    const newObj = Object.create(obj)
    console.log(newObj.__proto__) // {}
    console.log(obj) // {}
    console.log(newObj.__proto__ === obj) // true
    console.log(obj.__proto__ === Object.prototype) // true
    console.log(newObj.__proto__ === Object.prototype); // false
    console.log(Object.prototype.__proto__) // null
}

{
    const newObj = {};
    console.log(newObj.__proto__ === Object.prototype); // true
}

{
    const str = new String('jack')
    console.log(str.String)
    console.log(Object.prototype.toString.call(str))
}

{
    const obj = {
        a: "jack"
    };
    // 原型链是 obj ---> Object.prototype ---> null
    const newObj = Object.create(obj); // newObj 是继承自 obj 的对象
    // 原型链是 newObj ---> obj ---> Object.prototype ---> null
    newObj.b = "rose";
    console.log(newObj.hasOwnProperty("a")); // false 因为 a 在原型链上 在 newObj 的原型 obj 中
    console.log(newObj.hasOwnProperty("b")); // true newObj 拥有自身属性 b
}

{
    const obj = Object.create(null) // obj 是 {}
    console.log(Object.getPrototypeOf(obj)) // obj 的原型是 null obj 没有继承Object.prototype
    console.log(obj.hasOwnProperty) // obj 没有自身属性 返回 undefined
}