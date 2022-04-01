// 1 Массивы

const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13]
const people = [
    {name: 'Lubov', budget: 4200},
    {name: 'Viktoria', budget: 3500},
    {name: 'Diana', budget: 1700},
]

// Function
function addItemToEnd(){

}

// Method
// cars.push('Рено')
// cars.unshift('Волга')
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar, lastCar)
// console.log(cars)
// console.log(cars.reverse())
// console.log(cars)
// const index = cars.indexOf('БМВ')
// cars[index] = 'Порш'
// console.log(cars)
// let findedPerson
// for (const person of people) {
//     if(person.budget === 3500) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)
// const index = people.findIndex(function(person) {
//     return person.budget === 3500
// })
// const person = people.find(function(person) {
//     return person.budget === 3500
// })
// const person = people.find(person => person.budget === 3500)
// console.log(person)
// console.log(cars.includes('Мазда'), cars.includes('Мазда!'))
// const upperCaseCars = cars.map(car => car.toUpperCase())
// console.log(upperCaseCars, cars)
// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filtredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib, filtredNumbers)

const allBudget = people
.filter(person => person.budget > 2000)
.reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)

console.log(allBudget)

// Задача 1

// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)