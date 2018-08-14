// Default arguments if there are no arguments given in the function

let getScoreText = function (name = 'Anonymous', score = 0) {
  return 'Name: ' + name + ' Score: ' + score
}

console.log(getScoreText(undefined,99)) //Use undefind if no first,2nd arguement ect given.

let name = 'Pearson'
console.log(`Hey, my name is ${name}!`) //Template string, can inject string directly into string using ${}, if the long string is insclasse these ``


//Useful for using in functions, no need for concatonation e.g.
function templateStrings (name, score) {
  return `Hey, my name is ${name}, and I have a score of ${score}`
  //Template strings don't need to be variables specifically, it could be var * 5 or 100 * 10
}

console.log(templateStrings('Sean', 2000))
//Challenge area
function getTip(bill, percentage = 10) {
  tip = (bill * percentage) / 100
  return `A ${percentage}% tip for a bill of £${bill} is £${tip}`
}

function getTotalBill(bill, tip) {
  return bill + getTip(bill) //Functions can be called within functions
}

console.log(getTip(50,30))
