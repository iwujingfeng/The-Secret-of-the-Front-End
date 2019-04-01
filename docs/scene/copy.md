# 数据拷贝

项目中数组和对象的拷贝操作极为常见,譬如，需要编辑一个表格（数据格式为数组，单元格为对象格式），需要把原始数据拷贝到编辑页，然后编辑内容后，点击保存来更新表格。如果使用了浅拷贝，会导致编辑内容时，还未执行保存，原始内容就已经被修改。如果对浅拷贝和深拷贝没有深入理解，这类不可预估的问题就会出现。深拷贝和浅拷贝只针对 `Object` 和 `Array` 这样的引用数据类型。

## 一、从赋值操作说起

```js
// 基本数据类型赋值
let str = "jack";
let newStr = str;
console.log("基本数据类型赋值", str, newStr, str === newStr); // jack jack true
newStr = "mike";
console.log("基本数据类型赋值", str, newStr, str === newStr); // jack mike false

// 引用数据类型赋值
const arr = [1, 3, 5];
const obj = {
  a: 1,
  b: 2,
  d: {
    e: "jack"
  }
};
const newArr = arr; // 进行赋值
const newObj = obj;

// 更改数据
newArr[3] = 7;
newObj.c = 3;
newObj.d.e = "mike";

console.log("引用数据类型赋值", newArr, arr); // [ 1, 3, 5, 7 ] [ 1, 3, 5, 7 ] true
console.log("引用数据类型赋值", newObj, obj);
// { a: 1, b: 2, d: { e: 'mike' }, c: 3 } { a: 1, b: 2, d: { e: 'mike' }, c: 3 }
```

:::tip 案例解析
首先，对于基本数据类型，赋值操作就是把 `值` 复制给了新的变量，两个变量的 `值` 是独立的，改变其中一个，另一个不会改变，因为复制的是 `值`。其次，对于引用数据类型，赋值操作，只是把原始数据的 的`内存地址` （栈内存中）传递给了新数据，并没有对堆中的 `值` 进行的拷贝，改变其中一个数据，另一个也会改变，通过 `===` 判断，数据是相同的，因为相同的 `内存地址` 指向的是同一份数据，可以说，无论改变原始数据还是新数据，改变的都是同一份数据。
:::
:::warning 说明
`===` 是对同类型数据的 `值` 的比较。引用类型赋值后，用 `===` 比较，因为是同一份数据，所以无论改变原始数据还是新数据，`值` 是相等的。其次，如果要深入理解赋值操作为何会导致这样的结果，需要深入理解 `=` 运算符背后的执行机制。这个问题(底层原理)，会在成书出版时添加。在此说明。
:::

## 二、浅拷贝

以对象的拷贝为例，浅拷贝只会将对象的第一层键值对进行`值`的拷贝，如果对象中的属性是引用类型数据的话，只会复制`内存地址`。对于对象的第一层键值对是 `基本数据类型`，浅拷贝不会有任何问题。

### 循环实现浅拷贝

```js
// 第一层数据为基本数据类型 数组为例
const arr = [1, 3, 5];
const newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i]);
}
console.log(
  "浅拷贝-基本数据",
  newArr,
  arr,
  newArr === arr,
  newArr[1] === arr[1]
);
// [ 1, 3, 5 ] [ 1, 3, 5 ] false true

// 第一层数据为基本数据类型 对象为例
const obj = {
  a: 1,
  b: 2
};
const newObj = {};
for (let key in obj) {
  newObj[key] = obj[key];
}
console.log("浅拷贝-基本数据", newObj, obj, newObj === obj, newObj.a === obj.a);
// { a: 1, b: 2 } { a: 1, b: 2 } false true
newObj.c = 3;
console.log("浅拷贝-基本数据", newObj, obj);
// { a: 1, b: 2, c: 3 } { a: 1, b: 2 }

// 第一层数据为引用类型数据 数组为例
const arr1 = [
  1,
  {
    a: 6
  },
  {
    b: 7
  }
];
const newArr1 = [];
for (let i = 0; i < arr1.length; i++) {
  newArr1.push(arr1[i]);
}
console.log("浅拷贝-数组", newArr1, arr1, newArr1 === arr1);
// [ 1, { a: 6 }, { b: 7 } ] [ 1, { a: 6 }, { b: 7 } ] false
newArr1[0] = 5;
newArr1[1] = 7;
newArr1[2].b = 9;
console.log("浅拷贝-数组", newArr1, arr1, newArr1 === arr1);
// [ 5, 7, { b: 9 } ] [ 1, { a: 6 }, { b: 9 } ] false
console.log("浅拷贝-数组", newArr1[2].b === arr1[2].b); // true

// 第一层数据为引用类型数据 对象为例

const obj1 = {
  a: 1,
  c: {
    d: 4
  },
  d: {
    e: 6
  }
};

const newObj1 = {};
for (let key in obj1) {
  newObj1[key] = obj1[key];
}
console.log("浅拷贝-对象", newObj1, obj1, newObj1.c === obj1.c);
// { a: 1, c: { d: 4 }, d: { e: 6 } } { a: 1, c: { d: 4 }, d: { e: 6 } } true
newObj1.a = 2;
newObj1.c = 3;
newObj1.d.e = 8;

console.log("浅拷贝-对象", newObj1, obj1);
// { a: 2, c: 3, d: { e: 8 } } { a: 1, c: { d: 4 }, d: { e: 8 } }
```

:::tip 案例解析：第一层数据为基本数据类型
对于第一层数据为基本数据类型的情况，对象为例，浅拷贝会将原始对象的数据拷贝到新的对象。可以发现，`newObj === obj` 返回`false`，两个对象不相等，那是因为指向的是不同的内存地址，但 `newObj.a === obj.a` 返回`true`，两个对象中拷贝的同名属性是相等的，因为，浅拷贝进行了`值`的拷贝，所以是相等的。如果其中一个对象改变了属性，另一个不会改变，因为两个对象中的属性是独立的，存在于不同的内存空间。
:::
:::tip 案例解析：第一层数据为引用数据类型
对于第一层数据为引用数据类型的情况，对象为例，浅拷贝会将原始对象的数据拷贝到新的对象。可以发现，`newObj1.c === obj1.c` 返回`true`，两个对象中拷贝的第一层同名属性是相等的。如果其中一个对象改变了第一层属性，另一个不会改变，但执行 `newObj1.d.e = 8`，改变了第一层属性嵌套的属性时，另一个对象的同名属性也会被改变，这是因为浅拷贝只会拷贝第一层属性，嵌套的属性拷贝的是内存地址，指向的还是同一份数据。
:::
:::warning 说明
基本数据类型直接将数据存储在栈(stack)中。引用数据类型是在栈内存中存储该对象的引用，真实的数据存放在堆内存里。引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。
:::

### Object.assign()实现浅拷贝

```js
// Object.assign 浅拷贝
const obj = {
  a: {
    b: 4
  }
};
const newObj = Object.assign({}, obj);
newObj.a.b = 6;
newObj.c = 3;
console.log("Object.assign", newObj, obj); // { a: { b: 6 }, c: 3 } { a: { b: 6 } }
```

:::tip 案例解析
`Object.assign` 进行对象浅拷贝后，会对第一层属性进行拷贝，所以修改其中一个对象，另一个对象不会被改变。嵌套的属性指向的还是同一个内存地址，指向同一份数据，其中一个对象修改嵌套的属性，另一个对象也会被改变。`Object.assign`和循环进行浅拷贝的实现是相似的，不做赘述。
:::
:::warning 说明
浅拷贝适合用来拷贝只有一层属性的对象和只有一层元素的数组。处理嵌套数据结构，需要使用深拷贝。
:::

### slice()实现浅拷贝

```js
const arr = [
  1,
  {
    name: "jack"
  }
];
const newArr = arr.slice();
newArr[0] = 6;
newArr[1].name = "mike";
console.log("slice", newArr, arr); //[ 6, { name: 'mike' } ] [ 1, { name: 'mike' } ]
```

:::tip 案例解析
通过 `slice()` 拷贝数组，如果修改 `newArr` 第一层数据，`arr` 不会被改变，实现的是深拷贝,同理，修改 `arr` ,`newArr` 也不会被改变。如果修改嵌套的对象中的数据，实现的确实浅拷贝。这种情况和 `for循环` 拷贝数据的方法非常相似。
:::

### concat()实现浅拷贝

```js
const arr = [
  1,
  {
    name: "jack"
  }
];
const newArr = arr.concat();
newArr[0] = 6;
newArr[1].name = "mike";
console.log("concat", newArr, arr); // [ 6, { name: 'mike' } ] [ 1, { name: 'mike' } ]
```

:::tip 案例解析
通过 `concat()` 拷贝数组，情况和 `slice()` 一模一样，不再赘述。
:::

:::warning 说明
`slice()`和 `concat()`方法不会修改原数组，会返回一个新的数组。
:::

### 扩展运算符实现浅拷贝

```js
// 扩展运算符深拷贝
const arr = [
  1,
  {
    name: "jack"
  }
];
const newArr = [...arr];
newArr[0] = 6;
newArr[1].name = "mike";
console.log("扩展运算符", newArr, arr); // [ 6, { name: 'mike' } ] [ 1, { name: 'mike' } ]

const obj = {
  name: "jack",
  age: {
    a: 18
  },
  sex: [1]
};
const newObj = {
  ...obj
};
newObj.name = "mike";
newObj.age.a = 20;
newObj.sex.push(2);
console.log("扩展运算符", newObj, obj);
// { name: 'mike', age: { a: 20 }, sex: [ 1, 2 ] } { name: 'jack', age: { a: 20 }, sex: [ 1, 2 ] }
```

:::tip 案例解析
通过 `扩展运算符` 拷贝数组或者对象，情况和 `slice()` 一模一样，不再赘述。
:::

## 三、深拷贝

以对象的拷贝为例，深拷贝不但将对象的第一层属性值进行`值`的拷贝，如果对象中的属性是引用类型数据的话，还会递归地对引用类型数据嵌套的所有属性和元素进行`值`的拷贝。

### JSON 解析

```js
const obj = {
  name: "jack",
  arr: [1, 2]
};
const newObj = JSON.parse(JSON.stringify(obj));
newObj.name = "mike";
newObj.arr[1] = 5;
console.log("JSON-obj", newObj, obj);
// { name: 'mike', arr: [ 1, 5 ] } { name: 'jack', arr: [ 1, 2 ] }

var arr = [
  {
    name: "jack"
  }
];
const newArr = JSON.parse(JSON.stringify(arr));
newArr[0].name = "mike";
console.log("JSON-arr", newArr, arr); // [ { name: 'mike' } ] [ { name: 'jack' } ]
```

:::tip 案例解析
以对象为例，通过将对象通过 `JSON.stringify()` 解析成 JSON 字符串，然后再用 `JSON.parse()` 解析成对象形式赋值给新的对象，对象会开辟新的栈，实现深拷贝。可以发现，修改第一层属性 `newObj.name`，另一个对象不会被改变，修改嵌套的数据 newObj.arr[1]，另一个对象依然不会被改变，因为深拷贝后，嵌套的数据拷贝的是 `值`，而不是内存地址。
:::
:::warning 说明
需要注意的是，通过 JSON 解析来深拷贝对象有两个缺点，如果你的对象里有函数，函数无法被拷贝下来，`JSON.stringify()` 方法是将一个 对象或者数组转换为一个 JSON 字符串，但不能属性和元素是函数。无法拷贝对象原型链上的属性和方法。这类情况的验证处在成书出版时进行添加，当前，只需要知道常规情况如何实现深拷贝即可。
:::

### 浅拷贝+递归实现深拷贝

```js
// 递归实现深拷贝
function isObject(obj) {
  return typeof obj === "object" && obj != null;
}

function cloneDeep(sourceData, hash = new WeakMap()) {
  if (!isObject(sourceData)) return sourceData; // 非对象返回自身
  if (hash.has(sourceData)) return hash.get(sourceData); // 查哈希表
  const TargetData = Array.isArray(sourceData) ? [] : {};
  hash.set(sourceData, TargetData); // 哈希表设值

  for (key in sourceData) {
    if (Object.prototype.hasOwnProperty.call(sourceData, key)) {
      // 如果属性的值是引用类型 进行递归
      if (isObject(sourceData[key])) {
        TargetData[key] = cloneDeep(sourceData[key], hash); // 传入哈希表
      } else {
        TargetData[key] = sourceData[key];
      }
    }
  }
  return TargetData;
}

// 测试对象深拷贝
const obj = {
  name: "jack",
  age: {
    a: 18
  }
};
// 设置循环引用
obj.sex = obj; // RangeError: Maximum call stack size exceeded
const newObj = cloneDeep(obj);
newObj.age.a = 30;
console.log("递归深拷贝", newObj, obj);
// { name: 'jack', age: { a: 30 }, sex: [Circular] }
// { name: 'jack', age: { a: 18 }, sex: [Circular] }
console.log("递归深拷贝", newObj.age.a === obj.age.a, newObj.name === obj.name);
// false true

// 测试数组深拷贝
const arr = [
  1,
  {
    name: "jack"
  }
];
const newArr = cloneDeep(arr);
newArr[0] = 3;
newArr[1].name = "mike";
console.log("递归深拷贝", newArr, arr);
// [ 3, { name: 'mike' } ] [ 1, { name: 'jack' } ]
```

:::tip 案例解析
首先，封装一个类型判断方法，判断是否为 `'object'` 类型，因为 `null` 也是 `'object'` 类型，所以需要排除。其次，提供一个边界判断，如果原始数据不是对象类型，不进行深拷贝，直接返回原始数据，结束函数。最后，遍历对象的属性或数组的索引，`isObject(sourceData[key])` 表明，如果属性或索引的值是一个对象类型，直接递归函数，再次遍历嵌套的属性和索引，从而实现了对所有嵌套的属性和索引的拷贝。通过测试代码可以发现，无论修改其中一个对象的哪一层属性，另外一个对象的属性都不会被改变，数组同理。
:::
:::warning 说明
对于循环引用的处理，可以使用哈希表进行`循环检测`，我们设置一个数组或者哈希表存储已拷贝过的对象，当检测到当前对象已存在于哈希表中时，取出该值并返回即可。如果没有做处理，会报错：`RangeError: Maximum call stack size exceeded`。
:::

<!-- https://mp.weixin.qq.com/s/q0_muijFLYMBpuvQfSc36A -->

### 我愿与你共享知识 可否陪我共饮香茗 :tea:

<img :src="$withBase('/assets/wxpay.png')" style="height:200px;margin-top:30px;margin-right:80px">
<img :src="$withBase('/assets/alipay.jpg')" style="height:200px;margin-top:30px;">
