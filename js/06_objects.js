// Объекты 

const person = {
    name: 'Lubov',
    age: 21,
    languages: ['Ru', 'En'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Completed Key',
    isProger: true,
    greet() {
        console.log('greet from person')
    },
    info(){
        console.info('Информация о человеке с именем', this.name)
    }
}

// person['key_4'] = undefined // так не надо
// delete person['key_4']
// console.log(person)

// Деструктуризация

// const name = person.name // так не надо
// const age = person.age // так не надо
// const languages = person.languages // так не надо
// const {name, age, languages} = person
// const {name, age: personAge, languages} = person
// console.log(name, personAge, languages)
//--------------------------------------------

// for (let key in person){ // опасен тем, что зайдёт в прототип
//     console.log(key, person[key])
// }
// for (let key in person){ // что делать
//     if (person.hasOwnProperty(key)){
//         console.log(key, person[key])
//     }
// }

// const keys = Object.keys(person)
// keys.forEach((key) => {
//     console.log(key, person[key])
// })

// Контекст

// person.info()

const logger = {
    keys(){
        console.log(Object.keys(this))
    },
    keysAndValues(){
        Object.keys(this).forEach((key) =>{
            console.log(`${key}: ${this[key]}`)
        })
        // Object.keys(this).forEach(function(key) { //создают собственный контекст (this)
        //     console.log(`${key}: ${this[key]}`)
        // })
    },
    withParams(top = false, between = false, bottom = false){
        if(top){
            console.log('---------- Start ----------')
        }
        Object.keys(this).forEach((key, index, array) =>{
            console.log(`${key}: ${this[key]}`)
            if(between && index !== array.length - 1){
                console.log('--------------------')
            }
        })
        if(bottom){
            console.log('---------- End ----------')
        }
    }
}

// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)
// logger.keysAndValues.call(person)
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])