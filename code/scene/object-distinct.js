{
    const obj = {
        a: '1',
        b: '2',
        b: '3'
    }
    for (key in obj) {
        newObj[key] = obj[key]
    }
    console.log('for...in...', newObj, obj) // { a: '1', b: '3' } { a: '1', b: '3' }
}

{
    const obj = {
        a: '1',
        b: '2',
        b: '3'
    }
    const newObj = {}
    const keys = Object.keys(obj)
    keys.forEach(key => {
        newObj[key] = obj[key]
    })
    console.log('Object.keys', newObj, obj) // { a: '1', b: '3' } { a: '1', b: '3' }
}

{
    const obj = {
        a: '1',
        b: '2',
        b: '3'
    }
    const newObj = {}
    const keys = Object.getOwnPropertyNames(obj)
    keys.forEach(key => {
        newObj[key] = obj[key]
    })
    console.log('getOwnPropertyName', newObj, obj) // { a: '1', b: '3' } { a: '1', b: '3' }
}

{
    const obj = {
        a: '1',
        b: '2',
        b: '3'
    }
    const newObj = {}
    const keys = Reflect.ownKeys(obj)
    keys.forEach(key => {
        newObj[key] = obj[key]
    })
    console.log('Reflect.ownKeys', newObj, obj) // { a: '1', b: '3' } { a: '1', b: '3' }
}