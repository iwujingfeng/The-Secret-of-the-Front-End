{
    const arr = [1, 2, 3, 4, 5]
    for (let i = 0; i < arr.length; i++) {
        console.log('for', arr[i]) // 1, 2, 3, 4, 5
    }
    for (let i = 0, len = arr.length; i < len; i++) {
        // 优化版
    }
}

{
    const arr = [1, 2, 3, 4, 5]
    arr.forEach(item => {
        console.log('forEach', item) // 1, 2, 3, 4, 5
        if (item > 3) {
            item = "3";
        }
    });
    console.log('forEach', arr) // [ 1, 2, 3, 4, 5 ]
    // 遍历索引
    arr.forEach((item, index) => {
        if (item > 3) {
            arr[index] = "3";
        }
    });
    console.log('forEach', arr) // [ 1, 2, 3, '3', '3' ]
    // 数组元素为引用类型
    const arr1 = [{
        name: 'jack',
        age: 18
    }, {
        name: 'mike',
        age: 20
    }]
    arr1.forEach(item => {
        item.age = 30
    })
    console.log('forEach', arr1) // [ { name: 'jack', age: 30 }, { name: 'mike', age: 30 } ]
}

{
    const arr = [1, 2, 3, 4, 5]
    for (let item of arr) {
        console.log('for...of...', item) // 1, 2, 3, 4, 5
    }
}

{
    const arr = [1, 2, 3, 4, 5]
    for (let index in arr) {
        console.log('for...in...', index) // 0,1, 2, 3, 4
    }
}

{
    const arr = [1, 2, 3, 4, 5]
    arr.map(item => {
        console.log('map', item) // 1, 2, 3, 4, 5
    });
}