// 1 Про переменные (camelCase)

// var name = 'Lubov' // устарело
// const firstName = 'Lubov'
// const lastName = 'Sovina'
// let age = 21
// const isProger = true
// console.log(age)
// age = 'some string'
// console.log(age)

// const _ = 'private'
// const $ = 100

// 2 Мутирование

// console.log('Имя человека: ' + firstName + ', возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', возраст человека: ' + age)


// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы

// let currentYear = 2022
// const birthYear = 2001

// const age = currentYear - birthYear
// // console.log(age)

// const a = 10
// const b = 5

// let c = 32

// // += -= *= /=
// c += a

// console.log(a - b)
// console.log(a + b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++)
// console.log(++currentYear)
// console.log(c)

// 4 Типы данных примитивы

// const name = 'Lubov'
// let age = 21
// const isProger = true
// let x
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof isProger)
// console.log(typeof x)
// console.log(typeof null, null)

// 5 Приоритет операторов

// const fullAge = 21
// const birthYear = 2001
// const currentYear = 2022

// // > < >= <= == != 
// const isFullAge = currentYear - birthYear >= fullAge 
// console.log(isFullAge)


// 6 Условные операторы

// const courseStatus = 'pending' // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Курс готов, его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }

// const isReady = false
// if (isReady) {
//     console.log('Всё готово')
// } else {
//     console.log('Всё не готово')
// }

// // Тернарное выражение
// isReady ? console.log('Всё готово') : console.log('Всё не готово')

// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1 == num2)
// console.log(num1 === num2)

// 7 Булевая логика

// // and === &&
// // or === ||
// // not === !

// 8 Функции

// function calculateAge(year){
//     return 2022 - year
// }

// console.log(calculateAge(2001))
// console.log(calculateAge(2004))
// console.log(calculateAge(1940))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//     console.log('Вообще-то это уже будущее')
        
//     }
// }

// logInfoAbout('Lubov', 2001)
// logInfoAbout('Victoria', 2026)

// 9 Массивы

// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')

// console.log(cars)
// console.log(cars[1])
// console.log(cars[3])
// console.log(cars.length)

// cars[0] = 'Porsche'
// console.log(cars)
// cars[cars.length] = 'Мазда'
// console.log(cars)

// 10 Циклы

// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']
// for (let i = 0; i < cars.length; i++){
//     car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты

const person = {
    firstName: 'Lubov',
    lastName: 'Sovina',
    year: 2001,
    languages: ['Ru', 'En'],
    isProger: true,
    greet: function() {
        console.log('greet')
    }
}

console.log(person.firstName)
console.log(person['firstName'])
const key = 'year'
console.log(person[key])
person.firstName = 'Luba'
person.birthday = '17 января'
console.log(person)

person.greet()