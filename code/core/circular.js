{
    const obj = {
        name: 'jack',
        arr: [1, 2]
    }
    obj.sex = obj
    console.log('循环引用', obj, obj.sex.name)
    // { name: 'jack', arr: [ 1, 2 ], sex: [Circular] } jack
    const str = JSON.stringify(obj);
    console.log(str);
    // TypeError: Converting circular structure to JSON

    var handleCircular = function () {
        var cache = [];
        var keyCache = [];
        return function (key, value) {
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
    JSON.stringify = function (value, replacer, space) {
        replacer = replacer || handleCircular();
        return tmp(value, replacer, space);
    };
    const str1 = JSON.stringify(obj);
    console.log(str1);
    // {"name":"jack","arr":[1,2],"sex":"[Circular root]"}
}