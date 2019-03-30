// arr.reduce((total,num)=>{return total + num;}) //total是初始化的总数累加

{
    const arr = [{
        name: 'jack',
        age: 16
    }, {
        name: 'jack',
        age: 20
    }]
    const result = arr.some(item => {
        return item.age > 18
    })
    console.log('some', result) // true
}

{
    const arr = [{
        name: 'jack',
        age: 16
    }, {
        name: 'jack',
        age: 20
    }]
    const result = arr.every(item => {
        return item.age > 18
    })
    console.log('every', result) // false
}

{
    const arr = [{
        name: 'jack',
        age: 16
    }, {
        name: 'jack',
        age: 20
    }]
    const result = arr.filter(item => {
        return item.age > 18
    })
    console.log('filter', result) // [ { name: 'jack', age: 20 } ]
}

{
    const arr = [{
        name: 'jack',
        age: 16
    }, {
        name: 'jack',
        age: 20
    }, {
        name: 'jack',
        age: 30
    }]
    const result = arr.find(item => {
        return item.age > 18
    })
    console.log('find', result) // { name: 'jack', age: 20 }
}

{
    const arr = [{
        name: 'jack',
        age: 16
    }, {
        name: 'jack',
        age: 20
    }, {
        name: 'jack',
        age: 30
    }]
    const result = arr.findIndex(item => {
        return item.age > 18
    })
    console.log('find', result) // 1
}

{
    // 如果数组元素是基础数据类型
    const arr1 = [2, 4, 5]
    const result0 = arr1.map(item => {
        return item * 2
    })
    console.log('map-0', result0) // [ 4, 8, 10 ]
    // 如果数组元素是对象
    const arr2 = [{
        name: 'jack',
        age: 16,
        sex: 1
    }, {
        name: 'jack',
        age: 20,
        sex: 2
    }]
    // 情况一
    const result = arr2.map(item => {
        return item.age * 2
    })
    console.log('map-1', result) // [ 32, 40 ]

    // 情况二
    const result2 = arr2.map(item => {
        return {
            name: item.name,
            age: item.age * 2,
            sex: item.sex === 1 ? '男' : item.sex === 2 ? '女' : '保密'
        }
    })
    console.log('map-2', result2)
    // [ { name: 'jack', age: 32, sex: '男' },{ name: 'jack', age: 40, sex: '女' } ]
}

{
    const arr = [{
        name: 'jack',
        age: 16,
        sex: 1
    }, {
        name: 'jack',
        age: 20,
        sex: 2
    }]
    arr.forEach(item => {
        item.age = item.age * 2;
        item.sex = item.sex === 1 ? '男' : item.sex === 2 ? '女' : '保密'
    })

    console.log('数组循环过滤', arr)
    // [ { name: 'jack', age: 32, sex: '男' },{ name: 'jack', age: 40, sex: '女' } ]
}

{
    const arr = [{
        name: 'jack',
        age: 35
    }, {
        name: 'mike',
        age: 30
    }]
    // 根据数字排序
    arr.sort((a, b) => {
        return a.age - b.age // 按照age进行升序排序
        // return b.age - a.age 按照age进行降序排序
    })
    console.log('sort', arr) // [ { name: 'mike', age: 30 }, { name: 'jack', age: 35 } ]

    // 根据字母排序
    arr.sort()
    arr.reverse()
    console.log('sort', arr) // [ { name: 'mike', age: 30 }, { name: 'jack', age: 35 } ]
}

{
    // 数组元素为数字
    const arr = [2, 4, 6]
    const sum = arr.reduce((total, item) => {
        console.log(total, item)
        return total + item // 累加 必须赋值给变量sum
    })
    console.log('reduce1', sum) // 12

    // 数组元素为对象 计算属性之和
    const arr1 = [{
        name: 'jack',
        age: 35
    }, {
        name: 'mike',
        age: 30
    }]
    // 根据数字排序
    const sum1 = arr1.reduce((total, item) => {
        return total + item.age // 累加 必须赋值给变量sum
    }, 0) // 必须传初始值
    console.log('reduce2', sum1) // 65
}