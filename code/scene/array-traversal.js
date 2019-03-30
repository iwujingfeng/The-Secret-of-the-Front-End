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
    });
    arr.forEach((item, index) => {
        console.log('forEach', index, item) // 遍历索引
    });
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