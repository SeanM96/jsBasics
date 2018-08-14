let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 300
}


let otherBook = {
  title: 'American Psycho',
  author: 'Bret Easton-Ellis',
  pageCount: 300
}

function getSummary(book) {
  return  {
    summary: book,
    page: `${book.pageCount}`
  }
}

console.log(getSummary(myBook))

//Challenge area

function returnThing(temp) {
return temp = {
  celcius: temp + 5,
  kelvin: temp - 5,
  f: temp
}
}

console.log(returnThing(10))
