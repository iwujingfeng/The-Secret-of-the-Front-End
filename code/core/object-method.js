{
    // Object.create
    const obj = {
        name: 'jack',
        age: {
            a: 18
        }
    }
    const newObj = Object.create(obj)
    console.log('Object.create', newObj, obj)
    // {} { name: 'jack', age: { a: 18 } }
    console.log('Object.create', newObj.name, obj.name) // jack jack
    newObj.name = 'mike'
    newObj.age.a = 30
    console.log('Object.create', newObj, obj)
    // { name: 'mike' } { name: 'jack', age: { a: 30 } }
}