{
    // 基本数据类型赋值
    let str = 'jack'
    let newStr = str
    console.log('基本数据类型赋值', str, newStr, str === newStr) // jack jack true
    newStr = 'mike'
    console.log('基本数据类型赋值', str, newStr, str === newStr) // jack mike false

    // 引用数据类型赋值
    const arr = [1, 3, 5]
    const obj = {
        a: 1,
        b: 2,
        d: {
            e: 'jack'
        }
    }
    let newArr = arr // 进行赋值
    let newObj = obj

    // 更改数据
    newArr[3] = 7
    newObj.c = 3
    newObj.d.e = 'mike'

    console.log('引用数据类型赋值', newArr, arr) // [ 1, 3, 5, 7 ] [ 1, 3, 5, 7 ]
    console.log('引用数据类型赋值', newObj, obj)
    // { a: 1, b: 2, d: { e: 'mike' }, c: 3 } { a: 1, b: 2, d: { e: 'mike' }, c: 3 }
    console.log(newArr === arr, newObj === obj) // true true

    // 赋值一个新对象
    newObj = {
        name: 'jack',
        age: 34
    }
    console.log('引用数据类型赋值', newObj, obj)
    // { name: 'jack', age: 34 } { a: 1, b: 2, d: { e: 'mike' }, c: 3 }
}

{
    // 第一层数据为基本数据类型 数组为例
    const arr = [1, 3, 5]
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    console.log('浅拷贝-基本数据', newArr, arr, newArr === arr, newArr[1] === arr[1])
    // [ 1, 3, 5 ] [ 1, 3, 5 ] false true

    // 第一层数据为基本数据类型 对象为例
    const obj = {
        a: 1,
        b: 2,
    }
    const newObj = {}
    for (let key in obj) {
        newObj[key] = obj[key]
    }
    console.log('浅拷贝-基本数据', newObj, obj, newObj === obj, newObj.a === obj.a)
    // { a: 1, b: 2 } { a: 1, b: 2 } false true
    newObj.c = 3
    console.log('浅拷贝-基本数据', newObj, obj)
    // { a: 1, b: 2, c: 3 } { a: 1, b: 2 }

    // 第一层数据为引用类型数据 数组为例
    const arr1 = [1, {
        a: 6
    }, {
        b: 7
    }]
    const newArr1 = []
    for (let i = 0; i < arr1.length; i++) {
        newArr1.push(arr1[i])
    }
    console.log('浅拷贝-数组', newArr1, arr1, newArr1 === arr1)
    // [ 1, { a: 6 }, { b: 7 } ] [ 1, { a: 6 }, { b: 7 } ] false
    newArr1[0] = 5
    newArr1[1] = 7
    newArr1[2].b = 9
    console.log('浅拷贝-数组', newArr1, arr1, newArr1 === arr1)
    // [ 5, 7, { b: 9 } ] [ 1, { a: 6 }, { b: 9 } ] false
    console.log('浅拷贝-数组', newArr1[2].b === arr1[2].b) // true


    // 第一层数据为引用类型数据 对象为例

    const obj1 = {
        a: 1,
        c: {
            d: 4
        },
        d: {
            e: 6
        }
    }

    const newObj1 = {}
    for (let key in obj1) {
        newObj1[key] = obj1[key]
    }
    console.log('浅拷贝-对象', newObj1, obj1, newObj1.c === obj1.c)
    // { a: 1, c: { d: 4 }, d: { e: 6 } } { a: 1, c: { d: 4 }, d: { e: 6 } } true
    newObj1.a = 2
    newObj1.c = 3
    newObj1.d.e = 8

    console.log('浅拷贝-对象', newObj1, obj1)
    // { a: 2, c: 3, d: { e: 8 } } { a: 1, c: { d: 4 }, d: { e: 8 } }
}

{
    // 遍历复制 浅拷贝
    const arr = [1, 3, 5, {
        a: 6
    }]
    const obj = {
        a: 1,
        b: 2,
        c: {
            d: 4
        }
    }
    // 遍历复制
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    const newObj = {}
    for (let key in obj) {
        newObj[key] = obj[key]
    }
    // 修改第二层数据时 浅拷贝
    // arr[3].a = 7
    // obj.c.d = 2
    newArr[3].a = 7
    newObj.c.d = 2
    console.log('浅拷贝', newArr, arr) // [ 1, 3, 5, { a: 7 } ] [ 1, 3, 5, { a: 7 } ]
    console.log('浅拷贝', newObj, obj) // { a: 1, b: 2, c: { d: 2 } } { a: 1, b: 2, c: { d: 2 } }
}

{
    // Object.assign 浅拷贝
    const obj = {
        a: {
            b: 4
        }
    }
    const newObj = Object.assign({}, obj)
    newObj.a.b = 6
    newObj.c = 3
    console.log('Object.assign', newObj, obj) // { a: { b: 6 }, c: 3 } { a: { b: 6 } }
}

{
    // slice()方法深拷贝
    const arr = [1, {
        name: 'jack'
    }]
    const newArr = arr.slice()
    newArr[0] = 6
    newArr[1].name = 'mike'
    console.log('slice', newArr, arr) //[ 6, { name: 'mike' } ] [ 1, { name: 'mike' } ]
}

{
    // concat()方法深拷贝
    const arr = [1, {
        name: 'jack'
    }]
    const newArr = arr.concat()
    newArr[0] = 6
    newArr[1].name = 'mike'
    console.log('concat', newArr, arr) // [ 6, { name: 'mike' } ] [ 1, { name: 'mike' } ]
}

{
    // 扩展运算符深拷贝
    const arr = [1, {
        name: 'jack'
    }]
    const newArr = [...arr]
    newArr[0] = 6
    newArr[1].name = 'mike'
    console.log('扩展运算符', newArr, arr) // [ 6, { name: 'mike' } ] [ 1, { name: 'mike' } ]

    const obj = {
        name: 'jack',
        age: {
            a: 18
        },
        sex: [1]
    }
    const newObj = {
        ...obj
    }
    newObj.name = 'mike'
    newObj.age.a = 20
    newObj.sex.push(2)
    console.log('扩展运算符', newObj, obj) // { name: 'mike', age: { a: 20 }, sex: [ 1, 2 ] } { name: 'jack', age: { a: 20 }, sex: [ 1, 2 ] }
}

{
    // JSON解析
    const obj = {
        name: 'jack',
        arr: [1, 2]
    }
    const newObj = JSON.parse(JSON.stringify(obj))
    newObj.name = 'mike'
    // newObj.arr[1] = 5
    newObj.arr = newObj
    console.log('JSON-obj', newObj, obj)
    // { name: 'mike', arr: [ 1, 5 ] } { name: 'jack', arr: [ 1, 2 ] }

    var arr = [{
        name: 'jack'
    }]
    const newArr = JSON.parse(JSON.stringify(arr))
    newArr[0].name = 'mike'
    console.log('JSON-arr', newArr, arr) // [ { name: 'mike' } ] [ { name: 'jack' } ]
}

{
    // 递归实现深拷贝
    function isObject(obj) {
        return typeof obj === 'object' && obj != null;
    }

    function cloneDeep(sourceData, hash = new WeakMap()) {
        if (!isObject(sourceData)) return sourceData; // 非对象返回自身
        if (hash.has(sourceData)) return hash.get(sourceData); // 查哈希表
        const TargetData = Array.isArray(sourceData) ? [] : {}
        hash.set(sourceData, TargetData); // 哈希表设值

        for (key in sourceData) {
            if (Object.prototype.hasOwnProperty.call(sourceData, key)) {
                // 如果属性的值是引用类型 进行递归
                if (isObject(sourceData[key])) {
                    TargetData[key] = cloneDeep(sourceData[key], hash) // 传入哈希表
                } else {
                    TargetData[key] = sourceData[key]
                }
            }
        }
        return TargetData
    }

    // 测试对象深拷贝
    const obj = {
        name: 'jack',
        age: {
            a: 18
        }
    }
    // 设置循环引用
    obj.sex = obj // RangeError: Maximum call stack size exceeded
    const newObj = cloneDeep(obj)
    newObj.age.a = 30
    console.log('递归深拷贝', newObj, obj)
    // { name: 'jack', age: { a: 30 }, sex: [Circular] } 
    // { name: 'jack', age: { a: 18 }, sex: [Circular] }
    console.log('递归深拷贝', newObj.age.a === obj.age.a, newObj.name === obj.name)
    // false true

    // 测试数组深拷贝
    const arr = [1, {
        name: 'jack'
    }]
    const newArr = cloneDeep(arr)
    newArr[0] = 3
    newArr[1].name = 'mike'
    console.log('递归深拷贝', newArr, arr)
    // [ 3, { name: 'mike' } ] [ 1, { name: 'jack' } ]
}