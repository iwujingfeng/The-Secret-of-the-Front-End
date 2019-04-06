{
    // 获取元素在数组中的索引
    const arr = ['jack', 'mike', 'rose']
    const index = arr.indexOf('rose')
    console.log('索引', index) // 2

    const mikeIndex = arr.findIndex(item => item === 'mike')
    console.log('findIndex获取索引', mikeIndex) // 1
}

{
    // 从数组中删除指定索引位置的元素
    const arr = ['jack', 'mike', 'rose']
    const roseIndex = arr.indexOf('rose')
    arr.splice(roseIndex, 1)
    console.log('splice删除', arr) // [ 'jack', 'mike' ]
    const mikeIndex = arr.indexOf('mike')
    const delEl = arr.splice(mikeIndex, 1)
    console.log('splice删除', arr, delEl) // [ 'jack' ] [ 'mike' ]

    // 如果将splice方法的执行结果赋值给变量，该变量返回的是删除的元素
    // 场景：一个循环后的列表 点击某一列表项的删除按钮 获取该列表项的索引 然后删除 当然 最佳实践是直接点击获取索引
}

{
    // 从数组中删除和添加元素
    splice(2, 0, "Lemon", "Kiwi")
}

{
    // 从数组中获取一个指定元素
    const arr = ['jack', 'mike', 'rose']
    const roseIndex = arr.indexOf('rose')
    const rose = arr.slice(roseIndex, roseIndex + 1)
    console.log('获取元素', rose) // [ 'rose' ]

    const mike = arr.find(item => item === 'mike')
    console.log('find获取元素', mike) // mike
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

    // 数组和字符串都有indexOf和includes方法
}

{
    // 判断数组是否为空
    const arr = []
    console.log(JSON.stringify(arr) === '[]') // true
    console.log(arr.length === 0) // true
    console.log(+arr === 0) // true
}

{
    // 获取数组的的某些元素
    const arr = ['jack', 'mike', 'rose', "yoyo"]
    console.log(arr[2]) // 知道索引位置的
    const [a, b, ...c] = arr // 获取前面几个元素
    console.log(a, b, c) //jack mike [ 'rose', 'yoyo' ]
    console.log(arr[arr.length - 1]) // 获取数组最后一个值
}

{
    // 动态移动数组中的元素，例如数组中对象的值变化后，对象移动到数组的顶部渲染，聊天列表功能，不能用反转
    // 先获取要移动的元素在数组中的索引index
    arr.splice(0, 0, arr[index]); // 0位置 删除0项 添加移动的项
    arr.splice(index + 1, 1) // 数组length+1了 删除移动项目时 index要加1
}

{
    // 获取一个数组中的最大值
    var arr = [1, 2, 3];
    var max = Math.max(...arr); // 扩展开 因为只接受一组数组 而不是数组
}