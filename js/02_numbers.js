// 1 Number

// const num = 42
// const float = 42.42
// const pow = 10e3
// console.log(num, float, pow)

// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN) // Not a Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log('isNaN', Number.isNaN(weird))
// console.log('isNaN', isNaN(42))
// console.log('isFinite', Number.isFinite(Infinity))
// console.log('isFinite', isFinite(42))

// const strInt = '40'
// const strFloat = '40.42'
// console.log('parseInt', Number.parseInt(strInt) + 2)
// console.log('parseInt', parseInt(strInt) + 2)
// console.log('Number', Number(strInt) + 2)
// console.log('+', +strInt + 2)

// console.log('parseFloat', Number.parseFloat(strFloat) + 2)
// console.log('parseFloat', parseFloat(strFloat) + 2)
// console.log('Number', Number(strFloat) + 2)
// console.log('+', +strFloat + 2)

// console.log(0.4 + 0.2)
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

// 2 BigInt

// console.log(9007199254740991999999n - 900719925474099199999n)
// console.log(-9007199254740991999999n)
// console.log(9007199254740991999999.27345n) // error

// console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n)

// 3 Math

// console.log('E', Math.E)
// console.log('PI', Math.PI)

// console.log('sqrt', Math.sqrt(25))
// console.log('pow', Math.pow(5, 3))
// console.log('abs', Math.abs(5, 3))
// console.log('max', Math.max(42, 12, 23, 11, 422))
// console.log('min', Math.min(42, 12, 23, 11, 422))
// console.log('floor', Math.floor(4.9), Math.floor(4.4))
// console.log('ceil', Math.ceil(4.9), Math.ceil(4.4))
// console.log('round', Math.round(4.9), Math.round(4.4))
// console.log('trunc', Math.trunc(4.9), Math.trunc(4.4))
// console.log('random', Math.random())

// 4 Example

function getRandomBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42))
