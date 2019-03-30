{
    const obj = {
        a: '1',
        b: '2',
        b: '3'
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