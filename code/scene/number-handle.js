{
    // 浮点数字保留小数点后指定位数
    // 方法一
    const num = 5.5678
    const newNum = num.toFixed(2)
    console.log(newNum, typeof newNum) // 5.57 string
    console.log(parseFloat(newNum), typeof parseFloat(newNum)) // 5.57 'number'
    // 方法二
    const num1 = 5.5678
    const newNum1 = Math.round(num1 * 100) / 100
    console.log(newNum1, typeof newNum1) // 5.57 'number'
    // 方法三
    const num2 = 5.5678
    const str = num2.toString()
    const newNum2 = str.substring(0, str.indexOf('.') + 3)
    console.log(newNum2, typeof newNum2) // 5.56 string
    // 方法四
    var num3 = 5.5678
    var re = /([0-9]+\.[0-9]{2})[0-9]*/;
    const newNum3 = num3.toString().replace(re, "$1");
    console.log(newNum3, typeof newNum3) // 5.56 string
}

{
    // 非数值类型转化成数值类型
    console.log(Number(true), Number(new Boolean(true))) // 1 1
    console.log(Number(false), Number(new Boolean(false))) // 0 0
    console.log(Number('123'), Number(new String('123'))) // 123 123
    console.log(Number('0.11')) // 0.11
    console.log(Number('')) // 0
    console.log(Number(new Date())) // 1554467983692
    console.log(Number(null), Number(undefined)) // 0 NaN

    console.log(parseInt('')) // NaN
    console.log(parseInt('.')) // NaN
    console.log(parseInt('123')) // 123
    console.log(parseInt('123.5')) // 123
    console.log(parseFloat('123')) // 123
    console.log(parseFloat('123.5')) // 123.5
}

{
    // 将浮点数字转化成整数
    console.log(parseInt(5.05), typeof parseInt(5.05)) // 5 'number'
    console.log(parseInt(0.00000060)) // 6
    console.log(0.00000060) // 6e-7
    console.log(parseInt('0.00000060')) // 0

    console.log(Math.ceil(5.05)) // 6
    console.log(Math.ceil(5.55)) // 6
    console.log(Math.ceil('5.55')) // 6
    console.log(Math.floor(5.05)) // 5
    console.log(Math.floor(5.55)) // 5
    console.log(Math.trunc(5.05)) // 5
    console.log(Math.trunc(5.55)) // 5console.log('xxx', Math.trunc('5.55')) // 5
    console.log(Math.trunc(-5.55)) // -5
    console.log(Math.round(5.05)) // 5
    console.log(Math.round(5.55)) // 6
    console.log(Math.ceil(0.00000060)) // 1
    console.log(Math.floor(0.00000060)) // 0
    console.log(Math.trunc(0.00000060)) // 0
    console.log(Math.round(0.00000060)) // 0

    const num = 5.56
    const num1 = 5.05
    console.log(num.toFixed(), num1.toFixed()) // 6 5
    console.log(num.toPrecision(1), num1.toPrecision(1)) // 6 5

    console.log('位运算', num | 0) // 5
    console.log('位运算', num1 | 0) // 5
}

{
    // 判断是否为整数类型
    // 取余运算符判断
    const num = 5.56
    const num1 = 5
    console.log('取余运算符', typeof num === 'number' && num % 1 === 0) // false
    console.log('取余运算符', typeof num === 'number' && num1 % 1 === 0) // true
    console.log('取余运算符', '5.56' % 1 === 0) // false
    console.log('取余运算符', '5' % 1 === 0) // true
    console.log('取余运算符', '' % 1 === 0) // true
    console.log('取余运算符', [] % 1 === 0) // true
    console.log('取余运算符', true % 1 === 0) // true
    console.log('取余运算符', false % 1 === 0) // true

    // Math.round、Math.ceil、Math.floor和 Math.trunc 判断
    console.log(Math.ceil(num) === num) // false
    console.log(Math.ceil(num1) === num1) // true

    // 通过parseInt判断
    console.log(parseInt(num) === num) // false
    console.log(parseInt(num1) === num1) // true
    console.log(parseInt(1000000000000000000000) === 1000000000000000000000) // false
    console.log(parseInt(0.00000060) === 0.00000060) // false

    // 通过位运算判断
    console.log('位运算', (num | 0) === num) // false
    console.log('位运算', (num1 | 0) === num1) // true
    console.log((Math.pow(2, 32) | 0) === Math.pow(2, 32)) // false

    // Number.isInteger
    console.log(Number.isInteger(num)) // false
    console.log(Number.isInteger(num1)) // true
    console.log(Number.isInteger(5.0)) // true
}


{
    // 安全整数与任意精度整数
    console.log('integer', Math.pow(2, 53)) // 9007199254740992
    console.log('integer', Math.pow(-2, 53)) // -9007199254740992
    console.log('integer', Number.MAX_SAFE_INTEGER) // 9007199254740991
    console.log('integer', Number.MIN_SAFE_INTEGER) // -9007199254740991
    console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)) // true
    console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)) // false
    console.log(Number.isSafeInteger(500)) // true
    console.log(Number.MIN_SAFE_INTEGER <= 500 >= Number.MAX_SAFE_INTEGER) // false

    console.log('integer', 9007199254740992) // 16位 9007199254740992
    console.log('integer', 9007199254740993) // 16位 9007199254740992
    console.log('integer', 90071992547409921) // 17位 90071992547409920
    console.log('integer', 900719925474099212345) // 21位 900719925474099200000
    console.log('integer', 9007199254740992123456) // 22位 9.007199254740992e+21
}

{
    // 浮点数运算
    console.log('float', 0.1 + 0.2 === 0.3) // false
    console.log('float', 0.1 + 0.2) // 0.30000000000000004
    console.log('float', (0.1 * 10 + 0.2 * 10) / 10) // 0.3
    console.log('float', 5.12 + 0.34 === 5.46) // true
    console.log('float', 0.00005 + 0.002 === 0.00205) // true

    console.log('Number.EPSILON', Number.EPSILON) // 2.220446049250313e-16
    console.log('Number.EPSILON', Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON) // true
    console.log('Number.EPSILON', Math.abs(0.0001 - 0.0002) < Number.EPSILON) // false
}

{
    // 判断是正数、负数还是零
    console.log(Math.sign(5)) // 1
    console.log(Math.sign(5.1)) // 1
    console.log(Math.sign(-5)) // -1
    console.log(Math.sign(0)) // 0
    console.log(Math.sign(-0)) // -0
    console.log(Math.sign('5')) // 1
    console.log(Math.sign('-5')) // -1
}