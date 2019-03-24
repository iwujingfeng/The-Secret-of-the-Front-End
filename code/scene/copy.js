{
    // 原始数据
    const arr = [1, 3, 5]
    const obj = {
        a: 1,
        b: 2
    }
    const newArr = arr // 进行赋值
    const newObj = obj

    // 更改数据
    newArr[3] = 7
    newObj.c = 3

    console.log('=', newArr, arr) // 值相同 原始数据也被更改
    console.log('=', newObj, obj) // 值相同 原始数据也被更改
}

{
    // 遍历复制 深拷贝
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
    // 修改第一层数据 深拷贝
    // arr[3] = 7
    // obj.c = 3
    newArr[3] = 7
    newObj.c = 3
    console.log('深拷贝', newArr, arr) // [ 1, 3, 5, 7 ] [ 1, 3, 5, { a: 6 } ]
    console.log('深拷贝', newObj, obj) // { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: { d: 4 } }
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
        a: 1,
        b: 2,
        c: {
            d: 4
        }
    }

    const newObj = Object.assign({}, obj)
    // 修改第一层数据 深拷贝
    newObj.a = 3
    // obj.a = 3
    console.log('Object.assign', newObj, obj) // { a: 3, b: 2, c: { d: 4 } } { a: 1, b: 2, c: { d: 4 } }

    // 修改第二层数据 浅拷贝
    newObj.c.d = 3
    // obj.c.d = 3
    console.log('Object.assign', newObj, obj) // { a: 3, b: 2, c: { d: 4 } } { a: 1, b: 2, c: { d: 4 } }
}

{
    // JSON解析
    const obj = {
        name: 'jack',
        arr: [1]
    }
    const newObj = JSON.parse(JSON.stringify(obj))
    newObj.arr = [5]
    // obj.arr = [5]
    console.log('JSON', newObj, obj) // { name: 'jack', arr: [ 5 ] } { name: 'jack', arr: [ 1 ] }

    var arr = [{
        name: 'jack'
    }]
    const newArr = JSON.parse(JSON.stringify(arr))
    newArr[0].name = 'mike'
    // arr[0].name = 'mike'
    console.log('JSON', newArr, arr) // [ { name: 'mike' } ] [ { name: 'jack' } ]
}

{
    // 回头分析 递归实现深拷贝
    function deepCopy(source) {
        let target = Array.isArray(source) ? [] : {}
        for (var k in source) {
            if (typeof source[k] === 'object') {
                target[k] = deepCopy(source[k])
            } else {
                target[k] = source[k]
            }
        }
        return target
    }
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