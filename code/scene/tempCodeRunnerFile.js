const obj = {
        name: 'jack',
        age: {
            a: 18
        }
    }
    const newObj = Object.create(obj)
    console.log('Object.create', newObj, obj)
    console.log('Object.create', newObj.name, obj.name)
    newObj.name = 'mike'
    newObj.age.a = 30
    console.log('Object.create', newObj, obj)