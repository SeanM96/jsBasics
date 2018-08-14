

let greetUser = function () {
  console.log('Welcome user!')
}

greetUser()

//Can put function into variable
let square = function (num) {
  let result = num*num
  return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

//challenge

function convertFarenheitToCelcius (f) {
  let result = (f - 32) * 5/9
  return result
}

console.log(convertFarenheitToCelcius(32))
console.log(convertFarenheitToCelcius(68))
