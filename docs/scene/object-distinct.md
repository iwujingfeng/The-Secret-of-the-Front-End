# 对象去重

有的时候，重新封装一个对象形式的数据，会出现重复的属性。但我们需要保留一个同名的属性，我们可以采用一些方法去除重复的属性。

## Object.keys()

```js
const obj = {
  a: "1",
  b: "2",
  b: "3"
};
const newObj = {};
const keys = Object.keys(obj);
keys.forEach(key => {
  newObj[key] = obj[key];
});
console.log("Object.keys", newObj, obj); // { a: '1', b: '3' } { a: '1', b: '3' }
```

:::tip 案例解析
首先，通过 `Object.keys()` 遍历出有所有不重复属性构成的数组；然后，对数组进行遍历，将属性和值赋值给新的对象。
:::

## Object.getOwnPropertyNames()

```js
const obj = {
  a: "1",
  b: "2",
  b: "3"
};
const newObj = {};
const keys = Object.getOwnPropertyNames(obj);
keys.forEach(key => {
  newObj[key] = obj[key];
});
console.log("getOwnPropertyName", newObj, obj); // { a: '1', b: '3' } { a: '1', b: '3' }
```

:::tip 案例解析
首先，通过 `Object.getOwnPropertyNames()` 遍历出有所有不重复属性构成的数组；然后，对数组进行遍历，将属性和值赋值给新的对象。
:::

## Reflect.ownKeys()

```js
const obj = {
  a: "1",
  b: "2",
  b: "3"
};
const newObj = {};
const keys = Reflect.ownKeys(obj);
keys.forEach(key => {
  newObj[key] = obj[key];
});
console.log("Reflect.ownKeys", newObj, obj); // { a: '1', b: '3' } { a: '1', b: '3' }
```

:::tip 案例解析
首先，通过 `Reflect.ownKeys()` 遍历出有所有不重复属性构成的数组；然后，对数组进行遍历，将属性和值赋值给新的对象。
:::

## for...in...

```js
const obj = {
  a: "1",
  b: "2",
  b: "3"
};
const newObj = {};
for (key in obj) {
  newObj[key] = obj[key];
}
console.log("for...in...", newObj, obj); // { a: '1', b: '3' } { a: '1', b: '3' }
```

:::tip 案例解析
首先，通过 `for...in...` 遍历出有所有不重复属性；然后，将属性和值赋值给新的对象。
:::

:::warning 说明
本文涉及的所有对象的遍历方法，均有各自的特性和差异。关于这部分内容，请参看 `应用场景-对象遍历` 一章，这里不做重复说明。
需要特别强调的是：一、本文涉及的所有遍历方法，遍历出的属性，都会自动去除重复的属性，只保留最后遍历出的同名属性，譬如，值为 '3' 的属性 b；二、`newObj[key] = obj[key]` 进行赋值后，两个对象引用的同一个内存地址，是相同的对象，所以原始对象的数据也会随着新对象的数据发生变化，保持一致。
:::

### 我愿与你共享知识 可否陪我共饮香茗 :tea:

<img :src="$withBase('/assets/wxpay.png')" style="height:200px;margin-top:30px;margin-right:80px">
<img :src="$withBase('/assets/alipay.jpg')" style="height:200px;margin-top:30px;">
