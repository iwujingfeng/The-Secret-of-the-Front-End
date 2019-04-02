{
  // 判断字符串中是否包含某个字符
  const str = 'hello world'
  console.log('indexOf', str.indexOf('o') !== -1) // true
  console.log('includes', str.includes('o')) // true
  console.log('search', str.search('o') !== -1) // true
  console.log('match', str.match(/o/).index !== -1) // true
  console.log('test', /o/.test(str)) // true
  console.log('exec', /o/.exec(str).index !== -1) // true
}

{
  // 判断字符串开头或结尾是否包含某个字符
  const str = 'hello world'
  console.log('索引判断', str[0] === 'h') // true
  console.log('索引判断', str.charAt(str.length - 1) === 'd') // true
  console.log('startsWith', str.startsWith('h')) // true
  console.log('endsWith', str.endsWith('d')) // true
}

{
  // 去掉字符串的后两位，只截取前面的字符
  const str = 'hello world'
  const newStr = str.substring(0, str.length - 2)
  console.log('字符截取', newStr)
}

{
  // 判断两个字符串是否严格相等
  const str = 'hello world'
  const newStr = str
  console.log('Object.is', Object.is(str, newStr)) // true
  console.log('===', str === newStr) // true
//   console.log('1', NaN === NaN) // true
//   console.log('2', Object.is(NaN, NaN)) // true
  // === 运算符（和== 运算符）将数字值 -0 和 +0 视为相等，并认为 Number.NaN 不等于 NaN。
}

{
  // 获取字符在字符串中的索引
  const str = 'hello world'
  const index = str.indexOf('w')
  console.log('索引',index) // 6
}