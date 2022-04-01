// 1 Функции

// //Function Declaration - может вызываться до объявления
// function greet(name){
//     console.log('Привет,', name)
// }
// // Function Expression - не может вызываться до объявления
// const greet2 = function greet(name){
//     console.log('Привет2,', name)
// }
// greet('Люба')
// greet2('Люба')
// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции

// let counter = 0
// const interval = setInterval(function() { // setTimeout
//     if (counter === 10){
//         clearInterval(interval) // clearTimeout
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// 3 Стрелочные функции

// function greet(name){
//     console.log('Привет,', name)
// }
// const arrow = (name) => {
//     console.log('Привет,', name)
// }
// const arrow2 = name => console.log('Привет,', name)
// const pow2 = num => num ** 2
// arrow2('Любовь')
// console.log(pow2(12))

// 4 Параметры по умолчанию

// const sum = (a = 40, b =  a * 2) => a + b
// console.log(sum(41, 4))
// console.log(sum())
// function sumAll(...all){
//     let result = 0
//     for(let num of all){
//         result += num
//     }
//     return result
// }
// const res1 = sumAll(1, 2, 3, 4, 5)
// const res2 = sumAll(1, 2, 3, 4, 5, 6, 7)
// console.log(res1, res2)

// 5 Замыкания

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Liubov')
console.log(logWithLastName)
logWithLastName('Sovina')