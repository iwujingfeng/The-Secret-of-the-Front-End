{
  // indexOf includes去重
  const arrUnique = function (arr) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
      //   if (result.indexOf(arr[i]) == -1) {
      //     result.push(arr[i])
      //   }
      if (!result.includes(arr[i])) {
        result.push(arr[i])
      }
    }
    return result
  }

  // 测试
  const arr = [1, 2, 3, 4, 3, 5, 6, 2, 6]
  console.log('indexOf or includes', arrUnique(arr)) // [ 1, 2, 3, 4, 5, 6 ]
  const arr1 = [{
      name: 'jack',
      age: 16
    },
    {
      name: 'jack',
      age: 16
    }
  ]
  console.log('indexOf or includes', arrUnique(arr1))
  // [ { name: 'jack', age: 16 }, { name: 'jack', age: 16 } ]
}

{
  // set去重
  const arr = [1, 2, 3, 4, 3, 5, 6, 2, 6]
  console.log('set', Array.from(new Set(arr))) // [ 1, 2, 3, 4, 5, 6 ]
  const arr1 = [{
      name: 'jack',
      age: 16
    },
    {
      name: 'jack',
      age: 16
    }
  ]
  console.log('set', Array.from(new Set(arr1)))
  // [ { name: 'jack', age: 16 }, { name: 'jack', age: 16 } ]
}

{
  // reduce()实现数组去重
  const arr = [1, 2, 3, 4, 3, 5, 6, 2, 6]
  const newArr = arr.reduce((initArr, item) => {
    if (initArr.indexOf(item) === -1) {
      initArr.push(item)
    }
    return initArr
  }, [])
  console.log('reduce去重', newArr) // [ 1, 2, 3, 4, 5, 6 ]
}

{
  // filter去重
  const arr = [1, 2, 3, 4, 3, 5, 6, 2, 6]
  const newArr = arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index
  })
  console.log('filter去重', newArr) // [ 1, 2, 3, 4, 5, 6 ]
}

{
  // sort()排序与相邻元素比较去重
  const arr = [5, 1, 2, 3, 4, 3, 5, 6, 2, 6]
  arr.sort()
  const newArr = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      newArr.push(arr[i])
    }
  }
  console.log('相邻元素比较去重', arr, newArr) // [ 1, 2, 3, 4, 5, 6 ]
}

{
  // 临时对象存储不重复元素进行判断
  const arr = [5, 1, 2, 3, 4, 3, 5, 6, 2, 6]
  const temp = {} // 临时对象
  const newArr = []
  arr.forEach(item => {
    if (!temp[item]) {
      // 判断元素在对象中是否有值
      newArr.push(item)
      temp[item] = true // 设为true 下次遇到重复元素 不再push
    }
  })
  console.log('临时对象存储不重复元素', newArr) // [ 5, 1, 2, 3, 4, 6 ]
}

{
  // 数组下标指针遍历
  const arr = [5, 1, 2, 3, 4, 3, 5, 6, 2, 6]
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        j = ++i
      }
    }
    newArr.push(arr[i])
  }
  console.log('数组下标指针遍历', newArr) // [ 1, 4, 3, 5, 2, 6 ]
}

{
  // filter()方法结合Map对象去重
  const arr = [5, 1, 2, 3, 4, 3, 5, 6, 2, 6]
  const map = new Map()
  const newArr = arr.filter(item => {
    return !map.has(item) && map.set(item, 1)
  })
  console.log('filter()与Map去重', newArr) // [ 5, 1, 2, 3, 4, 6 ]
}

{
  // 新旧数组双重循环去重
  const arr = [1, 1, 2, 3, 5, 3, 1, 5, 6, 5, 4]
  var newArr = [arr[0]]
  for (var i = 1; i < arr.length; i++) {
    var repeat = false
    for (var j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        repeat = true
        break
      }
    }
    if (!repeat) {
      newArr.push(arr[i])
    }
  }
  console.log('双重循环', newArr) // [ 1, 2, 3, 5, 6, 4 ]
}

{
  // 数组元素为引用类型时 set去重
  const oldArr = [{
      name: 'jack',
      age: 16
    },
    {
      name: 'jack',
      age: 16
    },
    {
      name: 'mike',
      age: 30
    }
  ]
  const stringifyList = [] // 数组中元素JSON字符串化后的数组
  const resultArr = [] //最终去重后的数组
  oldArr.forEach(item => {
    stringifyList.push(JSON.stringify(item))
  })
  Array.from(new Set(stringifyList)).forEach(item => {
    resultArr.push(JSON.parse(item))
  })
  console.log('对象', resultArr)
  // [ { name: 'jack', age: 16 }, { name: 'mike', age: 30 } ]
}

{
  // 数组元素为引用类型时 利用对象属性唯一性去重
  const oldArr = [{
      name: 'jack',
      age: 16
    },
    {
      name: 'jack',
      age: 16
    },
    {
      name: 'mike',
      age: 30
    }
  ]

  let tempObj = {};
  let resultArr = [];
  oldArr.forEach(item => {
    tempObj[JSON.stringify(item)] = true
  })
  const keys = Object.keys(tempObj)
  keys.forEach(item => {
    resultArr.push(JSON.parse(item))
  })
  console.log("对象", resultArr); // [ { name: 'jack', age: 16 }, { name: 'mike', age: 30 } ]
}