# 循环引用

## 循环引用对象

```js
const obj = {
  name: "jack",
  arr: [1, 2]
};
obj.sex = obj;
console.log("循环引用", obj, obj.sex.name);
// { name: 'jack', arr: [ 1, 2 ], sex: [Circular] } jack
```

## JSON.stringify()序列化对象

通常，我们会用 JSON.stringify 把 Javascript 对象序列化成 JSON 格式，这在大多数情况下是够用的。但是，当你要转换的对象里存在循环引用时，问题就来了。

```js
const str = JSON.stringify(obj);
console.log(str);
// TypeError: Converting circular structure to JSON
```

## 解决方案

### 改进 JSON.stringify()

```js
var handleCircular = function() {
  var cache = [];
  var keyCache = [];
  return function(key, value) {
    if (typeof value === "object" && value !== null) {
      var index = cache.indexOf(value);
      if (index !== -1) {
        return "[Circular " + keyCache[index] + "]";
      }
      cache.push(value);
      keyCache.push(key || "root");
    }
    return value;
  };
};

var tmp = JSON.stringify;
JSON.stringify = function(value, replacer, space) {
  replacer = replacer || handleCircular();
  return tmp(value, replacer, space);
};
const str1 = JSON.stringify(obj);
console.log(str1);
// {"name":"jack","arr":[1,2],"sex":"[Circular root]"}
```

:::tip 案例解析
上面的代码会覆盖 JSON.stringify 函数。利用 JSON.stringify 的第二个参数来改进它，在循环引用的地方显示[Circular xxx]，xxx 为引用对象的 key，如果为顶层对象则为 root。
:::
