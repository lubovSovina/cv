// const name = 'Любовь'
// const age = 21

// function getAge() {
//     return age
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age} лет.`
// const output = `
//     <div>This is div</div>
//     <p>this is p</p>
// `
// console.log(output)

// const firstName = 'Любовь'
// console.log(firstName.length)
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())
// console.log(firstName.charAt(2))
// console.log(firstName.indexOf('бов'), firstName.indexOf('!'))
// console.log(firstName.startsWith('Люб'), firstName.startsWith('люб'))
// console.log(firstName.toLowerCase().startsWith('люб'))
// console.log(firstName.endsWith('вь'), firstName.endsWith('вь!'))
// console.log(firstName.repeat(3))
// const string = '    password    '
// console.log(string.trim())
// console.log(string.trimStart())
// console.log(string.trimEnd())

function logPerson(s, name, age){
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Любовь'
const personAge = 21

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`

console.log(output)