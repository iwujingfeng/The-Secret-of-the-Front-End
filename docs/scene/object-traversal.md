# 遍历对象

有的时候，重新封装一个对象形式的数据，会出现重复的属性。但我们需要保留一个同名的属性，我们可以采用一些方法去除重复的属性。

## for...in...

```js
const obj = {
  a: "1",
  b: "2",
  b: "3"
};
for (key in obj) {
  console.log("for...in...", key, obj[key]); // a 1 b 3
}
```

:::tip 案例解析
首先，通过 `for...in...` 遍历出有所有不重复属性；通过 obj[key]获取属性对象的值。for...in...会遍历出对象自身的属性、原型继承的属性。需要注意的是，遍历的必须是可枚举的属性（不含 Symbol 属性）。
:::

## Object.keys()

```js
const obj = {
  a: "1",
  b: "2",
  b: "3"
};
const keys = Object.keys(obj);
console.log("Object.keys", keys); // [ 'a', 'b' ]
```

:::tip 案例解析
首先，通过 `Object.keys()` 遍历出有所有不重复属性构成的数组。`Object.keys()`只可以遍历对象自身的属性，无法遍历原型继承的属性。需要注意的是，遍历的必须是可枚举的属性（不含 Symbol 属性）。
:::

## Object.values()

```js
const obj = {
  a: "1",
  b: "2",
  b: "3"
};
const values = Object.values(obj);
console.log("Object.values", values); // [ '1', '3' ]
```

:::tip 案例解析
首先，通过 `Object.values()` 遍历出有所有不重复属性对应的值所构成的数组。
:::

## Object.entries()

```js
const obj = {
  a: "1",
  b: "2",
  b: "3"
};
const entries = Object.entries(obj);
console.log("Object.entries", entries); // [ [ 'a', '1' ], [ 'b', '3' ] ]
```

:::tip 案例解析
首先，通过 `Object.entries()` 遍历出有所有键值对构成的数组。通过结构分析发现，返回的数组中，又包含有键值对组成的子数组。
:::

## Object.getOwnPropertyNames()

```js
const obj = {
  a: "1",
  b: "2",
  b: "3"
};
const keys = Object.getOwnPropertyNames(obj);
console.log("getOwnPropertyName", keys); // [ 'a', 'b' ]
```

:::tip 案例解析
首先，通过 `Object.getOwnPropertyNames()` 遍历出有所有不重复属性构成的数组。`Object.getOwnPropertyNames()`只可以遍历对象自身的属性，无法遍历原型继承的属性。需要注意的是，既可以遍历可枚举的属性（不含 Symbol 属性），也可以遍历不可枚举属性。
:::

## Reflect.ownKeys()

```js
const obj = {
  a: "1",
  b: "2",
  b: "3"
};
const keys = Reflect.ownKeys(obj);
console.log("Reflect.ownKeys", keys); // [ 'a', 'b' ]
```

:::tip 案例解析
首先，通过 `Reflect.ownKeys()` 遍历出有所有不重复属性构成的数组。`Reflect.ownKeys()`只可以遍历对象自身的属性，无法遍历原型继承的属性。需要注意的是，既可以遍历可枚举的属性，也可以遍历不可枚举属性，同时，Symbol 或字符串类型的属性均可遍历。
:::

## Object.getOwnPropertySymbols()

```js
const obj = {
  a: "1",
  [Symbol()]: 0,
  [Symbol(1)]: 1
};
const keys = Object.getOwnPropertySymbols(obj);
console.log("getOwnPropertySymbols", keys); // [ Symbol(), Symbol(1) ]
```

:::tip 案例解析
首先，通过 `Object.getOwnPropertySymbols()` 可以遍历对象自身的 Symbol 属性，其他属性无法遍历。需要注意的是，不可遍历原型继承的 Symbol 属性。
:::

:::warning 说明
需要特别强调的是：一、本文涉及的所有遍历方法，遍历出的属性，都会自动去除重复的属性，只保留最后遍历出的同名属性，譬如，值为 '3' 的属性 b；二、关于可枚举属性和不可枚举属性以及 Symbol 属性请参看原型一章。
:::

## 对象属性遍历顺序

对象的遍历与数组的遍历不同，上述方法实现的遍历不是按照顺序遍历的，是按照如下规则进行的：

1. 首先遍历所有数值键，按照数值升序排列。
2. 其次遍历所有字符串键，按照加入时间升序排列。
3. 最后遍历所有 Symbol 键，按照加入时间升序排列

```js
const obj = {
  [Symbol()]: 0,
  b: 0,
  10: 0,
  [Symbol(1)]: 1,
  2: 0,
  a: 0
};
const keys = Reflect.ownKeys(obj);
console.log("遍历顺序", keys); // [ '2', '10', 'b', 'a', Symbol(), Symbol(1) ]
```

:::tip 案例解析
通过打印结果发现，先按照数值属性按照升序遍历属性，然后安装字符串属性的添加顺序遍历属性，最后按照 Symbol 属性的添加顺序遍历属性。
:::

### 我愿与你共享知识 可否陪我共饮香茗 :tea:

<img :src="$withBase('/assets/wxpay.png')" style="height:200px;margin-top:30px;margin-right:80px">
<img :src="$withBase('/assets/alipay.jpg')" style="height:200px;margin-top:30px;">
