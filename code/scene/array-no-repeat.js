{
    // 使用数组的 indexOf 方法去重
    const arrUnique = function (arr) {
        const result = []
        for (let i = 0; i < arr.length; i++) {
            if (result.indexOf(arr[i]) == -1) {
                result.push(arr[i])
            }
        }
        return result
    }

    // 测试
    const arr = [1, 2, 3, 4, 3, 5, 6, 2, 6]
    console.log('indexOf', arrUnique(arr))
    const arr2 = [{
            name: 'jack',
            age: 16
        },
        {
            name: 'jack',
            age: 20
        },
    ]
    const arr3 = [{
            name: 'jack',
            age: 16
        },
        {
            name: 'jack',
            age: 16
        },
    ]
    console.log('indexOf', arrUnique(arr2))
    console.log('indexOf', arrUnique(arr3))
}

{
    function unique(arr) {
        var res = [arr[0]];
        for (var i = 1; i < arr.length; i++) {
            var repeat = false;
            for (var j = 0; j < res.length; j++) {
                if (arr[i] === res[j]) {
                    repeat = true;
                    break;
                }
            }
            if (!repeat) {
                res.push(arr[i]);
            }
        }
        return res;
    }
    console.log('------------方法一---------------');

    console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]));
}

{
    // 去除数组中对象的某个属性值相同的对象
}