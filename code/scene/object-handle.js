{
    // 判断对象中是否包含某个属性
    const protoObj = {
        age: 30,
    }
    const obj = Object.create(protoObj)
    obj.name = 'jack'
    obj.sex = undefined
    console.log('xxx', obj)

    console.log(obj.name !== undefined) // true 
    console.log(obj['age'] !== undefined) // true 原型上的属性也判断为存在
    console.log(obj['sex'] !== undefined) // false 局限性就是：不能用在x的属性值存在，但可能为 undefined的场景。
    console.log(obj['job'] !== undefined) // false 

    console.log('in', 'age' in obj, 'sex' in obj, 'job' in obj) // true true false
    // 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true 局限性就是无法区分自身和原型链上的属性

    console.log('hasOwnProperty', obj.hasOwnProperty('name'), obj.hasOwnProperty('age')) // true false
}

{
    // 获取对象属性的数量
    const obj = {
        name: 'jack',
        age: 30,
        sex: '男'
    }
    console.log('Object.keys', Object.keys(obj).length) // 3

    const sum = []
    for (key in obj) {
        sum.push(key)
    }
    console.log('遍历', sum.length) // 3
}

{
    // 判断对象是否为空
}