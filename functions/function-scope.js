// Global scope(convertFarenheitToCelcius)
  // Local scope (f, result)
    //Local scope (isFreezing)

function convertFarenheitToCelcius (f) {
  let result = (f - 32) * 5/9

  if (result <= 0) {
    let isFreezing = true;
  }
  return result
}

console.log(convertFarenheitToCelcius(32))
console.log(convertFarenheitToCelcius(68))
