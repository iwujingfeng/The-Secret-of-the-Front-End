# 原型 原型链 继承

## 原型

JavaScript 是基于原型的。谈到继承时，JavaScript 只有一种结构：对象。JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

[参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

```js
const obj = {};
const newObj = Object.create(obj); // 以obj为原型创建newObj
console.log(newObj.__proto__); // {}
console.log(obj); // {}
console.log(newObj.__proto__ === obj); // true
console.log(obj.__proto__ === Object.prototype); // true
console.log(newObj.__proto__ === Object.prototype); // false
console.log(Object.prototype.__proto__); // null
```

:::tip 案例解析
每个实例对象（案例中的 `newObj` 或 `obj` ）都有一个私有属性`__proto__`指向它的原型对象（prototype），这里 `newObj.__proto__` 指向 `obj`。该原型对象`obj`也有一个自己的原型对象`obj.__proto__` ，指向 `Object.prototype`，层层向上直到一个对象`Object.prototype`的原型对象`Object.prototype.__proto__`为 null。根据定义，null 没有原型，也就是说，`Object.prototype` 没有原型了，是这个原型链中的最后一个环节。可以这样理解，`Object.prototype` 就是所有 JavaScript 中对象的原型，也可以说，几乎所有 JavaScript 中的对象都是位于原型链顶端的 `Object` 的实例。
:::

```js
const newObj = {};
console.log(newObj.__proto__ === Object.prototype); // true
```

:::tip 案例解析
对比这个案例和上个案例中倒数第二行，可以发现，当 `newObj` 没有继承任何对象时，`Object.prototype`是任何对象（这里是 `newObj`）的原型，但如果 `newObj` 继承了 `obj`，`Object.prototype` 就不是 `newObj` 的原型了，必须层层向上寻找自己的原型 `obj`，以此类推。
:::

## 原型链

## 继承与 this

## 对象的创建

## hasOwnProperty() 和 Object.keys()

```js
const obj = {
  a: "jack"
};
// 原型链是 obj ---> Object.prototype ---> null
const newObj = Object.create(obj); // newObj 是继承自 obj 的对象
// 原型链是 newObj ---> obj ---> Object.prototype ---> null
newObj.b = "rose";
console.log(newObj.hasOwnProperty("a")); // false 因为 a 在原型链上 在 newObj 的原型 obj 中
console.log(newObj.hasOwnProperty("b")); // true newObj 拥有自身属性 b
```

:::tip
在原型链上查找属性比较耗费性能，查找不存在的属性会遍历整个原型链。可以使用不会遍历原型链的方法 `hasOwnProperty()` 和 `Object.keys()`。`hasOwnProperty()`用来判断是否用于自身属性。
:::

## null

```js
const obj = Object.create(null); // obj 是 {}
console.log(Object.getPrototypeOf(obj)); // obj 的原型是 null obj 没有继承Object.prototype
console.log(obj.hasOwnProperty); // obj 没有自身属性 返回 undefined
```

### 我愿与你共享知识 可否陪我共饮香茗 :tea:

<img :src="$withBase('/assets/wxpay.png')" style="height:200px;margin-top:30px;margin-right:80px">
<img :src="$withBase('/assets/alipay.jpg')" style="height:200px;margin-top:30px;">
