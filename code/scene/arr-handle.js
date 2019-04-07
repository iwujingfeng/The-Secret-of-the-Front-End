{
    // 获取元素在数组中的索引
    const arr = ['jack', 'mike', 'rose']
    const index = arr.indexOf('rose')
    console.log('indexOf', index) // 2

    const mikeIndex = arr.findIndex(item => item === 'mike')
    console.log('findIndex', mikeIndex) // 1
}

// 数组的增删改查
{
    // 数组中增加元素
    const arr = ['mike']
    const len = arr.push('rose')
    arr.unshift('jack')
    console.log('add', arr, len) // [ 'jack', 'mike', 'rose' ] 2

    // 从某个索引位置开始增加元素
    arr.splice(1, 0, 'john')
    console.log('add', arr) // [ 'jack', 'john', 'mike', 'rose' ]
    // splice实现数组头部增加元素
    arr.splice(0, 0, 'anne')
    console.log('add', arr) // [ 'anne', 'jack', 'john', 'mike', 'rose' ]
    // splice实现数组尾部增加元素
    arr.splice(arr.length, 0, 'emmy')
    console.log('add', arr) // [ 'anne', 'jack', 'john', 'mike', 'rose', 'emmy' ]

    arr[arr.length] = 'martin'
    console.log('add', arr) // [ 'anne', 'jack', 'john', 'mike', 'rose', 'emmy', 'martin' ]
}

{
    const arr = ['anne', 'jack', 'john', 'mike', 'rose', 'emmy', 'martin']
    const del = arr.shift()
    arr.pop()
    console.log('del', arr) // [ 'jack', 'john', 'mike', 'rose', 'emmy' ]
    console.log('del', del) // anne
    // 从数组中删除指定索引位置的元素
    const delEl = arr.splice(1, 1)
    console.log('del-index', arr, delEl) // [ 'jack', 'mike', 'rose', 'emmy' ] [ 'john' ]
    console.log('del-index', arr.length) // 4
    // splice删除数组头部元素
    arr.splice(0, 1)
    console.log('del', arr) // [ 'mike', 'rose', 'emmy' ]
    // splice删除数组尾部元素
    arr.splice(arr.length - 1, 1)
    console.log('del', arr) // [ 'mike', 'rose' ]

    delete arr[0]
    console.log('delete', arr) // [ <1 empty item>, 'rose' ]
    console.log('delete', arr.length) // 2

    // 从数组中删除指定元素
    const arr1 = ['jack', 'mike', 'rose']
    const roseIndex = arr1.indexOf('rose')
    arr1.splice(roseIndex, 1)
    console.log('del-el', arr1) // [ 'jack', 'mike' ]
}

{
    const arr = ['jack', 'mike', 'rose']
    // 通过索引修改
    arr[1] = 'john'
    console.log('modify', arr) // [ 'jack', 'john', 'rose' ]
    // splice修改
    arr.splice(2, 1, 'anne')
    console.log('modify', arr) // [ 'jack', 'john', 'anne' ]
    // 把某个元素替换为新的元素
    const index = arr.indexOf('john')
    arr.splice(index, 1, 'emmy')
    console.log('modify', arr) // [ 'jack', 'emmy', 'anne' ]
    // forEach等遍历修改
    const arr1 = ['jack', 'john', 'mike', 'rose', 'martin']
    arr1.forEach((item, index) => {
        if (item.indexOf('o') !== -1) {
            arr1[index] = 'martin'
        }
    })
    console.log('modify', arr1) // [ 'jack', 'martin', 'mike', 'martin', 'martin' ]
}

{
    const arr = ['jack', 'john', 'mike', 'rose', 'martin']
    console.log(arr[3]) // rose
    console.log(arr[arr.length - 1]) // martin 获取数组最后一个值
    function findEl(arr) {
        return arr.find(item => {
            return item.includes('o')
        })
    }
    console.log('find', findEl(arr)) // john
    function filterEl(arr) {
        return arr.filter(item => {
            return item.includes('o')
        })
    }
    console.log('filter', filterEl(arr)) // [ 'john', 'rose' ]

    // 解构赋值查找数组元素
    const [a, b, ...c] = arr // 获取前面几个元素
    console.log('...', a, b, c) // jack john [ 'mike', 'rose', 'martin' ]
}

{
    // 判断数组中是否包含指定的元素
    const arr = ['jack', 'mike', 'rose']
    console.log('indexOf', arr.indexOf('jack') !== -1) // true
    console.log('includes', arr.includes('mike')) // true
    const hasEl = arr.find(item => {
        console.log(item)
        return item === 'rose'
    })
    console.log('find', hasEl === 'rose') // true

    const hasElIndex = arr.findIndex(item => {
        return item === 'rose'
    })
    console.log('findIndex', hasElIndex !== -1) // true
}

{
    // 判断数组是否为空
    const arr = []
    console.log(arr.length === 0) // true
    console.log(JSON.stringify(arr) === '[]') // true
    console.log(+arr === 0) // true
}

{
    // 获取一个数组中的最大值和最小值
    // 排序
    var arr = [1, 3, 2, 5];
    arr.sort((a, b) => a - b)
    console.log('max', arr[arr.length - 1]) // 5
    console.log('min', arr[0]) // 1

    // apply
    console.log('max', Math.max.apply(null, arr)) // 5
    console.log('min', Math.min.apply(null, arr)) // 1

    // 扩展运算符
    console.log('max', Math.max(...arr)) // 5
    console.log('min', Math.min(...arr)) // 1
}

{
    // 动态移动数组中的元素
    const arr = ['jack', 'john', 'mike', 'rose', 'martin']
    const currentIndex = arr.indexOf('mike')
    arr.splice(0, 0, arr[currentIndex]);
    arr.splice(currentIndex + 1, 1)
    console.log('move', arr) // [ 'mike', 'jack', 'john', 'rose', 'martin' ]
}