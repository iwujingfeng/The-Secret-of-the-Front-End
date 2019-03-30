// arr.some(v => { return v > 18 }) // return一个条件 返回值是布尔 用于条件判 检测数组中的元素是否满足指定条件,有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测 如果没有满足条件的元素，则返回false。 IE9支持
// const newArr = arr.filter(item => { return item.age > 18 }) // return一个条件 返回值是一个过滤后的新数组 用于过滤数据 IE9支持
// arr.every(v => { return v > 18 }) // return一个条件 返回值是布尔 用于条件判断 检测数组所有元素是否都符合指定条件(必须都符合条件 不然返回false) 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。如果所有元素都满足条件，则返回 true。 IE9支持
// arr.find(v => { return v > 18 }) // 返回符合条件的第一个元素 没有符合条件返回undefined IE12支持
// arr.findIndex(v => { return v > 18 }) // 返回符合条件的第一个元素的索引 没有符合条件返回-1 IE12支持 IE12支持
// arr.map(item => { return item.age * 18 }) // 对数组进行二次处理 格式化时间 重新计算等等 返回新数组 用于过滤数据 IE9支持
// // 返回数据元素的平方根 numbers.map(Math.sqrt)
// // 接口数据映射
// let r = res.map(item => {
//     return {
//         title: item.name,
//         sex: item.sex === 1? '男':item.sex === 0?'女':'保密',
//         age: item.age,
//         avatar: item.img
//     }
// })
// http://www.runoob.com/jsref/jsref-obj-array.html
// arr.sort((a,b)=>{return a-b}) // 数字升序
// arr.sort((a,b)=>{return b-a}) // 数字降序
// arr.sort(); // 字母升序
// arr.reverse(); // 字母降序
// arr.reduce((total,num)=>{return total + num;}) //total是初始化的总数累加