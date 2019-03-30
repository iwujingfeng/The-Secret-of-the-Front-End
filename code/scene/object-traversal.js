{
    const obj = {
        a: '1',
        b: '2',
        b: '3',
    }
    for (key in obj) {
        console.log('for...in...', key, obj[key]) // a 1 b 3
    }
}

{
    const obj = {
        a: '1',
        b: '2',
        b: '3'
    }
    const keys = Object.keys(obj)
    console.log('Object.keys', keys) // [ 'a', 'b' ]
}

{
    const obj = {
        a: '1',
        b: '2',
        b: '3'
    }
    const values = Object.values(obj)
    console.log('Object.values', values) // [ '1', '3' ]
}

{
    const obj = {
        a: '1',
        b: '2',
        b: '3'
    }
    const entries = Object.entries(obj)
    console.log('Object.entries', entries) // [ [ 'a', '1' ], [ 'b', '3' ] ]
}

{
    const obj = {
        a: '1',
        b: '2',
        b: '3'
    }
    const keys = Object.getOwnPropertyNames(obj)
    console.log('getOwnPropertyName', keys) // [ 'a', 'b' ]
}

{
    const obj = {
        a: '1',
        b: '2',
        b: '3'
    }
    const keys = Reflect.ownKeys(obj)
    console.log('Reflect.ownKeys', keys) // [ 'a', 'b' ]
}

{
    const obj = {
        a: '1',
        [Symbol()]: 0,
        [Symbol(1)]: 1,
    }
    const keys = Object.getOwnPropertySymbols(obj)
    console.log('getOwnPropertySymbols', keys) // [ Symbol(), Symbol(1) ]
}

{
    const obj = {
        [Symbol()]: 0,
        b: 0,
        10: 0,
        [Symbol(1)]: 1,
        2: 0,
        a: 0
    }
    const keys = Reflect.ownKeys(obj)
    console.log('遍历顺序', keys) // [ '2', '10', 'b', 'a', Symbol(), Symbol(1) ]
}