//Challenge area

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only Vegan Menu')
}
else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Ensure some Vegan option')
}
else {
  console.log('No Vegan option required')
}
