// CRUD

// мутабельный (изменяются исходные данные)
// иммутабельный (не изменяются исходные данные)

// TODO делаем копию исходника => вносим изменения в копию => используем копию с изменениями
// TODO поступление копии => критерий наличия изменений

// типы данных
// примитивы
// объекты

// мутабельный
const data = [1, 2, 3, 4, 5];
data.push(6)
const newData = data

console.log(newData === data) // true

// иммутабельный
const newData2 = []
for (let i = 0; i < data.length; i++) {
    newData2[i] = data[i]
}
newData2.push(7)

const newData3 = newData2.concat(8) // OLD SCHOOL


// TODO CREATE
const newData4 = [...newData3, 9]

console.log(newData4) // false


// TODO methods from arrays

// TODO sort() - меняет исходный массив (mutable)
// TODO toSorted() - создает копию массива (immutable)
// TODO reverse() - меняет исходный массив (mutable)
// TODO toReversed() - создает копию массива (immutable)


// TODO DELETE
const newDataF = newData4.filter(el => el != 3)

console.log(newDataF) // [1, 2, 4, 5, 6, 7, 8, 9]
console.log(newDataF === newData4) // false

// TODO delete user with id=2
const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    },
]

const usersF = users.filter(u => u.id !== 2)

console.log(usersF)
console.log(usersF === users) // false


// TODO UPDATE

// TODO for user with id=4 change isStudent: false

const copyUsers = {...users, isStudent: false} // TODO NO!!!

console.log(copyUsers)

console.log([1, 2, 3,4,5,6,].map(n => n ** 2))

const usersU = users.map(u => u.id === 4 ? {...u, isStudent: false} : u)
console.log(usersU)

// TODO поверхностное копирование

const copyUsers2 = [...users]

// TODO полное, глубокое копирование

const deepCopyUsers = users.map(u => ({...u}))

const superUser = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            lat: '-38.2386',
            lng: '57.2232',
        },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
    },
}
// TODO !!! полное, глубокое копирование
const deepCopyClementina = structuredClone(superUser)

console.log(deepCopyClementina)
console.log(deepCopyClementina === superUser) // false
console.log(deepCopyClementina.address.geo === superUser.address.geo) // false



