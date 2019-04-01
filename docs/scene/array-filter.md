# 数组过滤

在业务场景中，对数组进行过滤操作很常见。形式上，这类方法可以在循环体内，`return` 一个过滤条件。

## arr.some()

```js
const arr = [
  {
    name: "jack",
    age: 16
  },
  {
    name: "jack",
    age: 20
  }
];
const result = arr.some(item => {
  return item.age > 18;
});
console.log("some", result); // true
```

:::tip 案例解析
`some()`方法的返回值是布尔值，多用于条件判断。该方法会检测数组中是否`有一个`元素满足条件，如果有，返回 `true` , 剩余的元素不会再执行检测。如果没有满足条件的元素，则返回 `false`。 需要 IE9 支持。
:::

## arr.every()

```js
const arr = [
  {
    name: "jack",
    age: 16
  },
  {
    name: "jack",
    age: 20
  }
];
const result = arr.every(item => {
  return item.age > 18;
});
console.log("every", result); // false
```

:::tip 案例解析
`every()`方法的返回值是布尔值，多用于条件判断。该方法会检测数组中是否`每一个`元素都满足条件，如果都符合条件，返回 `true` 。遍历过程中，如果有一个元素不满足条件，则整个表达式返回 `false` ，且剩余的元素也不会再进行检测。 需要 IE9 支持。
:::

## arr.filter()

```js
const arr = [
  {
    name: "jack",
    age: 16
  },
  {
    name: "jack",
    age: 20
  }
];
const result = arr.filter(item => {
  return item.age > 18;
});
console.log("filter", result); // [ { name: 'jack', age: 20 } ]
```

:::tip 案例解析
`filter()`方法的返回值是一个过滤后的新数组，多用于数组的过滤。返回的新数组，只包含符合条件的元素。 需要 IE9 支持。
:::

## arr.find()

```js
const arr = [
  {
    name: "jack",
    age: 16
  },
  {
    name: "jack",
    age: 20
  },
  {
    name: "jack",
    age: 30
  }
];
const result = arr.find(item => {
  return item.age > 18;
});
console.log("find", result); // { name: 'jack', age: 20 }
```

:::tip 案例解析
`find()`方法的返回值是符合条件的第一个元素。没有符合条件返回 `undefined`， 需要 IE12 支持
:::

## arr.findIndex()

```js
const arr = [
  {
    name: "jack",
    age: 16
  },
  {
    name: "jack",
    age: 20
  },
  {
    name: "jack",
    age: 30
  }
];
const result = arr.findIndex(item => {
  return item.age > 18;
});
console.log("findIndex", result); // 1
```

:::tip 案例解析
`findIndex()`方法的返回值是符合条件的第一个元素的索引。没有符合条件返回 `-1`， 需要 IE12 支持。
:::

## arr.map()

```js
// 如果数组元素是基础数据类型
const arr1 = [2, 4, 5];
const result0 = arr1.map(item => {
  return item * 2;
});
console.log("map-0", result0); // [ 4, 8, 10 ]
// 如果数组元素是对象
const arr2 = [
  {
    name: "jack",
    age: 16,
    sex: 1
  },
  {
    name: "jack",
    age: 20,
    sex: 2
  }
];
// 情况一
const result = arr2.map(item => {
  return item.age * 2;
});
console.log("map-1", result); // [ 32, 40 ]

// 情况二
const result2 = arr2.map(item => {
  return {
    name: item.name,
    age: item.age * 2,
    sex: item.sex === 1 ? "男" : item.sex === 2 ? "女" : "保密"
  };
});
console.log("map-2", result2);
// [ { name: 'jack', age: 32, sex: '男' },{ name: 'jack', age: 40, sex: '女' } ]
```

:::tip 案例解析
`map()`方法返回一个新的数组。通过对 map()方法的代码分析可以发现。如果数组元素是基础数据类型，可以对遍历出的每一个元素进行处理后直接 `return`，最终返回一个处理后的新的数组。但是，如果数组元素是对象，对对象的属性直接处理后 `return`（情况一），最终返回的并不是想要的数据结构，新的数组只会包含处理后的属性对应的值。所以，需要 `return` 一个完整的对象，在返回的对象中，对属性进行二次处理，才能最终获取到理想的数据结构。需要 IE9 支持。该方法适合对数组进行二次处理 格式化时间 重新计算等等。
:::

## 数组循环过滤数据

```js
const arr = [
  {
    name: "jack",
    age: 16,
    sex: 1
  },
  {
    name: "jack",
    age: 20,
    sex: 2
  }
];
arr.forEach(item => {
  item.age = item.age * 2;
  item.sex = item.sex === 1 ? "男" : item.sex === 2 ? "女" : "保密";
});

console.log("数组循环过滤", arr);
// [ { name: 'jack', age: 32, sex: '男' },{ name: 'jack', age: 40, sex: '女' } ]
```

:::tip 案例解析
对比 `map()`方法可以发现，实现的结果一样，但是代码书写方式不同。使用 `forEach()`或 `for` 循环无需 `return` 一个对象，只需要对希望格式化的属性进行处理，然后重新赋值给原有的属性，即可更新整个数组的数据。
:::
:::warning map()与循环过滤数据的对比
通过对比可以发现，使用循环更加的简洁，只需要操作需要格式化的属性即可，而 `map()`却需要手动 return 对象的每个属性。根据实际的需求和场景，如果不在意返回原始数组中对象的所有属性的话，使用循环是最方便的；但是，如果只想让新的数组中的对象只保留想要的属性，剔除不需要的属性的话，使用 `map()`方法是最佳的，因为想返回哪些属性，就 `return` 哪些属性。
:::

## arr.sort()

```js
const arr = [
  {
    name: "jack",
    age: 35
  },
  {
    name: "mike",
    age: 30
  }
];
// 根据数字排序
arr.sort((a, b) => {
  return a.age - b.age; // 按照age进行升序排序
  // return b.age - a.age 按照age进行降序排序
});
console.log("sort", arr); // [ { name: 'mike', age: 30 }, { name: 'jack', age: 35 } ]

// 根据字母排序
arr.sort();
arr.reverse();
console.log("sort", arr); // [ { name: 'mike', age: 30 }, { name: 'jack', age: 35 } ]
```

:::tip 案例解析
`sort()`方法的返回值是排序后的数组。排序方式包括根据数字排序和根据字母排序。需要注意的是，根据字母排序是，只使用 `sort()`是按照字母表顺序进行升序排序，如果要进行降序排序，需要多加一个 `reverse()`进行数组元素的反转。
:::

## arr.reduce()

```js
// 数组元素为数字
const arr = [2, 4, 6];
const sum = arr.reduce((total, item) => {
  console.log(total, item);
  return total + item; // 累加 必须赋值给变量sum
});
console.log("reduce1", sum); // 12

// 数组元素为对象 计算属性之和
const arr1 = [
  {
    name: "jack",
    age: 35
  },
  {
    name: "mike",
    age: 30
  }
];
const sum1 = arr1.reduce((total, item) => {
  return total + item.age; // 累加 必须赋值给变量sum
}, 0); // 必须传初始值
console.log("reduce2", sum1); // 65

// 使用reduce计算数组元素出现的次数
    const nameList = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']; 
    const num = nameList.reduce((initObj, item) => {
        if (item in initObj) {
            initObj[item]++
        } else {
            initObj[item] = 1
        }
        return initObj
    }, {})
    console.log('reduce计算数组元素出现次数',num) // { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }

    // 将二维数组转化为一维
    const arrDouble = [[0, 1], [2, 3], [4, 5]]
    const newArr = arrDouble.reduce((initArr, item) => {
        return initArr.concat(item)
    }, [])
    console.log('二维数组转化为一维',newArr) // [ 0, 1, 2, 3, 4, 5 ]

    // 多维数组转化为一维
    let arrs = [[0, 1], [2, 3], [4,[5,6,7]]]
    const newArrs = function(arrs){
       return arrs.reduce((pre,cur)=>pre.concat(Array.isArray(cur)?newArrs(cur):cur),[])
    }
    console.log('多维数组转化为一维', newArrs(arrs));
    // [ 0, 1, 2, 3, 4, 5, 6, 7 ]
```

:::tip 案例解析
`reduce()`方法的返回值是计算后的总数，必须赋值给一个变量（这里是 sum）。如果数组元素是数字，使用很简单。如果数组元素是对象，业务场景中需要计算出某个属性之和，必须指定初始值`0`。 如果使用`reduce()`计算数组元素出现次数，可以初始化一个空对象 `{}` 存放最终结果，然后判断这个对象中是否存在遍历出来的元素，如果不存在，就把该元素加入对象，元素名为 `key`，值为 `1`，如果存在，就将值累加 `1`。二维数组转一维数组，其实就是用concat进行数组合并。需要 IE9 支持。
:::
:::warning 说明
如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始，会多执行一次循环。如果遇到一个空数组，没有提供initialValue，会报错`TypeError: Reduce of empty array with no initial value`,但提供初始值，不会报错，返回的结果值是`0`，所以，传initialValue是最佳的实践。同时，reduce还可以用来求`乘积`。这里不做赘述。
:::
