# 类型判断

`typeof` 主要用来判断基本类型数据的类型，返回值是一个包含类型名称的字符串。`null` 属于基本类型，但判断 `null` 不会显示正确的类型。

## typeof

### 判断基本数据类型

```js
console.log(typeof 1); // 'number'
console.log(typeof "jack"); // 'string'
console.log(typeof undefined); // 'undefined'
console.log(typeof true); // 'boolean'
console.log(typeof Symbol()); // 'symbol'
console.log(typeof b); // 判断未声明的变量 'undefined'
```

::: tip
`typeof` 主要使用场景就是判断除 null 之外的基本数据类型的类型。
:::

### 判断数组、对象和函数

```js
console.log(typeof []); // 'object'
console.log(typeof {}); // 'object'
console.log(typeof console.log); // 'function'
console.log(typeof function() {}); // 'function'
```

::: tip
函数属于对象，但是 `typeof` 判断函数时，返回的类型是 `'function'`，而不是 `'object'`。
:::

### 判断 null

```js
console.log(typeof null); // 'object'
```

::: tip
`typeof` 判断 `null` 的类型是 `'object'` 是 js 语言历史遗留的 Bug。因为在 JS 的最初版本中，使用的是 32 位系统，为了性能考虑使用低位存储了变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。获得一个变量的正确类型，可以通过 `Object.prototype.toString.call()`。
:::

## instanceof

`instanceof` 主要的作用就是判断一个对象实例是否属于某种类型。语法是 `object instanceof constructor`，`object` 是要检测的对象，`constructor` 是某个构造函数。

### 构造函数与对象实例

```js
const person = function() {};
const nicole = new person();
console.log(nicole instanceof person); // 03 返回布尔值 true
console.log(Object.getPrototypeOf(nicole) === person.prototype); // 04 返回布尔值 true
console.log(nicole instanceof Object); // 05 返回布尔值 true
console.log(Object.prototype.isPrototypeOf(nicole)); // 06 返回布尔值 true
console.log(person.prototype instanceof Object); // 返回布尔值 true
```

::: tip
`nicole` 是一个实例对象，这里，`instanceof` 运算符用来检测构造函数 person.prototype 是否存在于参数 nicole 的原型链上。通过 04 行 Object.getPrototypeOf 一行可以确定，nicole 的原型就是和 person.prototype 相同。通过 06 行可以确认 05 行执行时正确的。
:::

### new String() 和 new Date() 对象

```js
const simpleStr = "This is a simple string";
const myString = new String();
const newStr = new String("String created with constructor");
console.log(simpleStr instanceof String); // 返回 false, 检查原型链会找到 undefined
console.log(myString instanceof String); // 返回 true
console.log(newStr instanceof String); // 返回 true
console.log(myString instanceof Object); // 返回 true
const myDate = new Date();
console.log(myDate instanceof Date); // 返回 true
console.log(myDate instanceof Object); // 返回 true
const myArr = [];
console.log(myArr instanceof Object); // 返回 true
const myObj = {};
console.log(myArr instanceof Object); // 返回 true
const myNonObj = Object.create(null);
console.log(myNonObj instanceof Object); // 这种方法创建的对象不是Object的一个实例
```

::: warning
使用 `instanceof` 进行判断时，必须这样使用 if (!(myCar instanceof Car)) {} ，必须是`!(myCar instanceof Car)` 而不能是 `!myCar instanceof Car`，因为!myCar 将在 instanceof 之前被处理。
:::

## constructor

## Object.prototype.toString.call

```

```
