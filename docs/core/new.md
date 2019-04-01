# new 运算符

`new` 运算符创建一个对象实例，可用于用户定义的对象类型，也可以用于具有构造函数的内置对象。

## 构造函数无返回值

```js
function TestNew(name) {
  this.name = name;
  console.log(this); // TestNew { name: 'jack' }
}
TestNew.prototype.getName = function() {
  console.log(this.name);
};

const t = new TestNew("jack");
console.log(t); // TestNew { name: 'jack' }
console.log(t.name); // jack
t.getName(); // jack
```

::: tip
`new` 运算符会返回一个对象。观察 `console.log(this)` 和 `console.log(t)`，会发现，这个对象就是构造函数的 `this`。这个 `this` 包含构造函数的属性，所以，可以访问到构造函数的属性和构造函数原型上的属性。
:::

## 构造函数返回原始值

```js
function TestNew(name) {
        this.name = name
        return 'rose' // 返回原始数据类型
    }
    TestNew.prototype.getName = function () {
        console.log(this.name)
    }

    const t = new TestNew('jack')
    console.log(t.name) // jack
    t.getName() // jack
}
```

::: tip
如果构造函数返回的是原始值，new 运算符会创建实例，依然可以访问到构造函数以及构造函数原型链上的属性。也就是说，返回原始值没有任何意义，不会影响创建实例以及访问构造函数。
:::

## 构造函数返回对象

```js
function TestNew(name) {
        this.name = name
        console.log(this) // TestNew { name: 'jack' }
        return {
            age: 21
        }
    }
    TestNew.prototype.getName = function () {
        console.log(this.name)
    }

    const t = new TestNew('jack')
    console.log(t) // { age: 21 }
    console.log(t.age) // 21
    console.log(t.name) // undefined
    t.getName() // TypeError: t.getName is not a function
}
```

::: tip
`new` 运算符依然会返回一个对象。观察 `console.log(this)`和 `console.log(t)`，会发现，这个对象已经不是构造函数的 `this`，而是构造函数返回的对象。所以，通过`t`访问`name`当然是 undefined，访问原型上的属性，更会报错。构造函数的返回对象会和普通函数返回值一样，可以被正常访问并且读取返回对象的属性。
:::

::: danger 警告
构造函数尽量不要有返回值，会导致 new 创建实例后，无法访问构造函数内部属性。在需要使用返回值的场景，请使用普通函数。
:::

## 代码模拟实现 new 运算符

```js
// 模拟new运算符的实现
function newInstance(cons, ...args) {
  const instance = {}; // 01
  Object.setPrototypeOf(instance, cons.prototype); // 02
  const ret = cons.apply(instance, args); // 03
  return ret instanceof Object ? ret : instance; // 04
}

// 测试
function TestNew(name, args) {
  this.name = name;
  console.log(this); // TestNew { name: 'jack' }
}
TestNew.prototype.getName = function() {
  console.log(this.name);
};

const t = newInstance(TestNew, "jack");
console.log(t); // TestNew { name: 'jack' }
console.log(t.name); // jack
t.getName(); // jack
```

:::tip
分析：
注释 01：初始化一个空实例对象 作为 new 的返回值；注释 02，将 instance 的原型设置为 cons 的原型 cons.prototype，实现 instance 可以访问构造函数的属性； 注释 03，args 是传递给构造函数 cons 的参数，instance 将代替 cons 里 this，注释 04，判断构造函数返回值是否是对象。
:::

### 我愿与你共享知识 可否陪我共饮香茗 :tea:

<img :src="$withBase('/assets/wxpay.png')" style="height:200px;margin-top:30px;margin-right:80px">
<img :src="$withBase('/assets/alipay.jpg')" style="height:200px;margin-top:30px;">
