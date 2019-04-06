{
  // 获取字符在字符串中的索引
  const str = 'hello world'
  console.log('索引', str.indexOf('o')) // 4
  console.log('索引', str.indexOf('o', 5)) // 7
}

{
  // 获取某个索引位置的字符
  const str = 'hello world'
  console.log('charAt', str.charAt(4)) // 6
}

{
  // 判断字符串中是否包含某个字符
  const str = 'hello world'
  console.log('indexOf', str.indexOf('o') !== -1) // true
  console.log('includes', str.includes('o')) // true
  console.log('search', str.search('o') !== -1) // 
  console.log('match', str.match(/o/))
  // [ 'o', index: 4, input: 'hello world', groups: undefined ]
  console.log('match', str.match(/o/)[0] === 'o') // true
  console.log('test', /o/.test(str)) // true
  console.log('exec', /o/.exec(str))
  // [ 'o', index: 4, input: 'hello world', groups: undefined ]
  console.log('exec', /o/.exec(str)[0] === 'o') // true

  // 判断字符串开头或结尾是否包含某个字符
  console.log('索引判断', str[0] === 'h') // true
  console.log('索引判断', str.charAt(str.length - 1) === 'd') // true
  console.log('startsWith', str.startsWith('h')) // true
  console.log('endsWith', str.endsWith('d')) // true
}

{
  // 判断两个字符串是否严格相等
  const str = 'hello world'
  const newStr = str
  console.log('Object.is', Object.is(str, newStr)) // true
  console.log('===', str === newStr) // true
  console.log('===', NaN === NaN) // false
  console.log('===', +0 === -0) // true
  console.log('Object.is', Object.is(NaN, NaN)) // true
  console.log('Object.is', Object.is(+0, -0)) // false
  console.log('Object.is', Object.is('5', 5)) // false
  // === 运算符（和== 运算符）将数字值 -0 和 +0 视为相等，并认为 Number.NaN 不等于 NaN。
}

{
  // 字符串截取
  const str = 'hello world'
  console.log('substring', str.substring(0, 5)) // hello
  console.log('slice', str.slice(0, 5)) // hello
  console.log('substr', str.substr(0, 5)) // hello
  const strArr = str.split(' ')
  console.log('split', strArr) // [ 'hello', 'world' ]
  console.log('split', strArr[0]) // hello

  // 去掉字符串的后两位，只截取前面的字符
  const newStr = str.substring(0, str.length - 2)
  console.log('字符截取', newStr)
}

{
  // 字符串与数组互转
  const str = 'hello world'
  const strArr = str.split(' ')
  console.log('split', strArr) // [ 'hello', 'world' ]
  const newStr = strArr.join(' ')
  console.log('join', newStr) // hello world
}

{
  // 字符串拼接
  const str1 = 'hello'
  const str2 = 'world'
  console.log('+', str1 + ' ' + str2) // hello world
  console.log('concat', str1.concat(' ', str2)) // hello world
  console.log('``', `${str1} ${str2}, hello china`) // hello world, hello china
}

{
  // 字符串遍历
  const str = 'yes'
  for (let i = 0; i < str.length; i++) {
    console.log(str[i])
    // y
    // e
    // s
  }
  for (let char of str) {
    console.log(char)
    // y
    // e
    // s
  }
}

{
  // 字符串补全
  const hours = '8'
  const minute = '9'
  console.log(`${hours.padStart(2, 0)}: ${minute.padStart(2, 0)}`) // 08: 09
  console.log(hours.padEnd(2, 8)) // 88
}

{
  // 字符串重复
  const str = 'yes'
  console.log(str.repeat(1)) // yes
  console.log(str.repeat(0)) // ''
  console.log(str.repeat(3), str) // yesyesyes yes
  console.log(str.repeat('3')) // yesyesyes
}