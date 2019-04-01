# 数组去重

数组去重是非常常见的一种需求，根据数组元素为基本数据类型还是引用数据类型，实现方法有一定差异。本文对大量的方法进行了反复的测试改进，为大家提供了数组去重的最佳实践。

## 数组 indexOf 或 includes 方法去重

```js
// 使用数组的 indexOf 方法去重
const arrUnique = function(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    //   if (result.indexOf(arr[i]) == -1) {
    //     result.push(arr[i])
    //   }
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

// 测试
const arr = [1, 2, 3, 4, 3, 5, 6, 2, 6];
console.log("indexOf", arrUnique(arr)); // [ 1, 2, 3, 4, 5, 6 ]
const arr1 = [
  {
    name: "jack",
    age: 16
  },
  {
    name: "jack",
    age: 16
  }
];
console.log("indexOf", arrUnique(arr1));
// [ { name: 'jack', age: 16 }, { name: 'jack', age: 16 } ]
```

:::tip 案例解析
`indexOf` 和 `includes` 方法去重的优点就是代码足够简单清晰。通过 判断循环出来的数组每一项 `arr[i]` 是否在新数组 `result` 中存在，不存在就 push 到 `result` 中。这样，可以保证 `result` 中都是不重复的数组元素。但是通过测试代码发现，只能对数组元素为基本数据类型的数组进行去重，如果数组元素为对象这种引用来兴，即使对象的属性都相同,也是无法去重的。文章最后，会提供解决方案。
:::
:::warning 说明
既然 `indexOf` 和 `includes` 方法需要配合循环来实现去重，那么任何形式的循环都是可以的，可以用 forEach，for...of...等循环来代替 for 循环。
:::

## 使用 set 数据结构去重

```js
const arr = [1, 2, 3, 4, 3, 5, 6, 2, 6];
console.log("set", Array.from(new Set(arr))); // [ 1, 2, 3, 4, 5, 6 ]
const arr1 = [
  {
    name: "jack",
    age: 16
  },
  {
    name: "jack",
    age: 16
  }
];
console.log("set", Array.from(new Set(arr1)));
// [ { name: 'jack', age: 16 }, { name: 'jack', age: 16 } ]
```

:::tip 案例解析
`new Set()` 创建一个 set 数据类型，利用 ES6 中的 Set 集合里元素唯一的特性，先将数组转换为集合，会自动去重。然后再见 set 数据类型通过 `Array.from()` 方法转化为普通数组。可以发现，对于数组元素是对象这类应用类型的数据，依然无法去重。
:::

## 使用 reduce 去重

```js
const arr = [1, 2, 3, 4, 3, 5, 6, 2, 6];
const newArr = arr.reduce((initArr, item) => {
  if (initArr.indexOf(item) === -1) {
    initArr.push(item);
  }
  return initArr;
}, []);
console.log("reduce去重", newArr); // [ 1, 2, 3, 4, 5, 6 ]
```

:::tip 案例解析
可以发现，使用 `reduce()` 只是代替了一个循环和初始化数组的任务。通过 `reduce()` 初始化一个空数组 `[]` 存放不重复的元素。对于数组元素是对象这类应用类型的数据，依然无法去重，这里不再演示。
:::

## filter()实现去重

```js
const arr = [1, 2, 3, 4, 3, 5, 6, 2, 6];
const newArr = arr.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
});
console.log("filter", newArr); // [ 1, 2, 3, 4, 5, 6 ]
```

:::tip 案例解析
使用 `filter()` 去重的思路是这样的，判断遍历数组元素的索引 `index` 是否和原始数组中该原始 `首次出现的索引` 相同。如果后面有重复元素，例如 `3`，遍历的索引是 `4`，但这个元素首次出现的索引是 `2`，两个索引不相同，所以重复的 `3 就被过滤掉了,只返回索引相同的元素。对于数组元素是对象这类应用类型的数据，依然无法去重，这里不再演示。
:::

## sort()排序与相邻元素比较去重

```js
const arr = [5, 1, 2, 3, 4, 3, 5, 6, 2, 6];
arr.sort();
const newArr = [arr[0]];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] !== arr[i - 1]) {
    newArr.push(arr[i]);
  }
}
console.log("相邻元素比较去重", arr, newArr); // [ 1, 2, 3, 4, 5, 6 ]
```

:::tip 案例解析
先把原始数组进行排序，这样相同的元素就会位于`相邻位置`。然后把原始数组 `第一个元素` 先添加到新数组中。从索引 `1` 的位置循环原始数组，因为原始数组的第一个元素和新数组与第一个元素是相同的，所以循环到索引为 `1` 的第二个元素时，对比第一个元素，如果不相同，就添加到新数组，以此类推，完成去重。对于数组元素是对象这类应用类型的数据，依然无法去重，这里不再演示。
:::

## 临时对象存储不重复元素进行判断

```js
const arr = [5, 1, 2, 3, 4, 3, 5, 6, 2, 6];
const temp = {}; // 临时对象
const newArr = [];
arr.forEach(item => {
  if (!temp[item]) {
    // 判断元素在对象中是否有值
    newArr.push(item);
    temp[item] = true; // 设为true 下次遇到重复元素 不再push
  }
});
console.log("临时对象存储不重复元素", newArr); // [ 5, 1, 2, 3, 4, 6 ]
```

:::tip 案例解析
实现思路是这样的，用一个临时对象存放数组元素作为 `key`，如果不存在元素，`temp[item]`时`undefined`，就把元素`push`到新数组，然后把临时对象中该元素作为`key`的值设置为`true`，这样，下次循环到重复元素，`temp[item]`为 true，会跳出 if 判断，不会添加重复的元素。对于数组元素是对象这类应用类型的数据，依然无法去重，这里不再演示。
:::

## 数组下标指针遍历

```js
const arr = [5, 1, 2, 3, 4, 3, 5, 6, 2, 6];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    console.log(i, j);
    if (arr[i] === arr[j]) {
      j = ++i;
    }
  }
  newArr.push(arr[i]);
}
console.log("数组下标指针遍历", newArr); // [ 1, 4, 3, 5, 2, 6 ]
```

:::tip 案例解析
利用数组的下标指针，来确定是否是相同的元素，如果是的话，就让其指针递增跳过，然后不断把不重复的数组保存至新数组中。嵌套了两层循环，分别有 i 和 j 两指针，其中 j 总是比 i 大 1，通过判断数组中这个数与它后面的数是否相等，如果相等，则说明这个数重复了，我们便将指针 i 和 j 继续往后运行，然后用 j = ++i 保持 j 比 i 大 1。最后一直把不重复的指针 i 对应的元素添加进数组。对于数组元素是对象这类应用类型的数据，依然无法去重，这里不再演示。
:::

## filter()方法结合 Map 对象去重

```js
const arr = [5, 1, 2, 3, 4, 3, 5, 6, 2, 6];
const map = new Map();
const newArr = arr.filter(item => {
  return !map.has(item) && map.set(item, 1);
});
console.log("filter()与Map去重", newArr); // [ 5, 1, 2, 3, 4, 6 ]
```

:::tip 案例解析
通过 Map 对象是否存在遍历的元素并且把元素添加到 Map 中，作为 filter 过滤的条件。这样，如果重复元素出现，会不符合过滤条件。对于数组元素是对象这类应用类型的数据，依然无法去重，这里不再演示。
:::

## 新旧数组双重循环去重

```js
const arr = [1, 1, 2, 3, 5, 3, 1, 5, 6, 5, 4];
const newArr = [arr[0]];
for (let i = 1; i < arr.length; i++) {
  const repeat = false;
  for (let j = 0; j < newArr.length; j++) {
    if (arr[i] === newArr[j]) {
      repeat = true;
      break;
    }
  }
  if (!repeat) {
    newArr.push(arr[i]);
  }
}
console.log("双重循环", newArr); // [ 1, 2, 3, 5, 6, 4 ]
```

:::tip 案例解析
先将原始数组第一个元素添加到新数组，然后从所以 `1` 开始循环原始数组，继而循环新数组。如果原始数组循环出来的元素和新数组相同，设置 `repeat` 为 `true`，跳出循环，这样，`push` 操作不会执行。如果不相同，继续向下执行，因为元素不同，`if` 语句不执行，`repeat` 还是 `false`，所以 `push` 操作会执行，将不相同的元素添加到新数组。
:::

## 数组元素为引用类型时去重

### set 数据结构与 JSON 解析配合

```js
const oldArr = [
  {
    name: "jack",
    age: 16
  },
  {
    name: "jack",
    age: 16
  },
  {
    name: "mike",
    age: 30
  }
];
const stringList = []; // 数组中元素JSON字符串化后的数组
const resultArr = []; // 最终去重后的数组
oldArr.forEach(item => {
  stringList.push(JSON.stringify(item));
});
Array.from(new Set(stringList)).forEach(item => {
  resultArr.push(JSON.parse(item));
});
console.log("对象", resultArr); // [ { name: 'jack', age: 16 }, { name: 'mike', age: 30 } ]
```

:::tip 案例解析
因为数组中存在引用类型数据，并不相等，所以 `set` 数据结构也无法直接去重。利用 `JSON.stringify()`将遍历后的引用类型数据解析成 `JSON 字符串`，`push` 到新的数组，用 `new Set()`去重，然后用 `Array.from()`转化成普通数组。这时候的数组元素还是 `JSON 字符串`，所以继续遍历，将数组元素转化成引用类型数据。
:::

### 利用对象属性的唯一性去重

```js
// 数组元素为引用类型时 set去重
const oldArr = [
  {
    name: "jack",
    age: 16
  },
  {
    name: "jack",
    age: 16
  },
  {
    name: "mike",
    age: 30
  }
];

let tempObj = {};
let resultArr = [];
oldArr.forEach(item => {
  tempObj[JSON.stringify(item)] = true;
});
const keys = Object.keys(tempObj);
keys.forEach(item => {
  resultArr.push(JSON.parse(item));
});
console.log("对象", resultArr); // [ { name: 'jack', age: 16 }, { name: 'mike', age: 30 } ]
```

:::tip 案例解析
可以发现，该方法定义了一个临时对象`tempObj`，存放 JSON 字符串化后的数组元素，利用对象属性的唯一性，实现了去重，和 set 数据结构去重有异曲同工之妙。本质上，还是利用了将引用类型进行 JSON 字符串解析这一方法。该方法也适合对数组元素为基本数据类型时去重，不再赘述。
:::

### 我愿与你共享知识 可否陪我共饮香茗 :tea:

<img :src="$withBase('/assets/wxpay.png')" style="height:200px;margin-top:30px;margin-right:80px">
<img :src="$withBase('/assets/alipay.jpg')" style="height:200px;margin-top:30px;">
