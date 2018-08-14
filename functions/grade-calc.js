function gradeCalc (score, totalPossible) {
  let percentage = score / totalPossible * 100
  let grade
    if (percentage < 60) { //Doing this from the top down would be more efficient, as I could use single argument if statements, due to the cascading nature and not hitting 90 if it's 80, not hitting 80 if its 70 ect
      grade = 'F'
    }
    else if (percentage >= 60 && percentage < 70) {
      grade = 'D'
    }
    else if (percentage >= 70 && percentage < 80) {
      grade = 'C'
    }
    else if (percentage >= 80 && percentage < 90) {
      grade = 'B'
    }
    else {
      grade = 'A'
    }
    return `You got a ${grade} with a score of ${percentage}`
}

console.log(gradeCalc(190,200))
