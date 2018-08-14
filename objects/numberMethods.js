let num = 103.941;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.random());
console.log(Math.floor(Math.random() * (100-50 + 1) + 50));

//CA

function guessRange(guess, min, max) {
    console.log(guess);
    let gen = Math.floor(Math.random() * (max-min + 1) + min);
    console.log(gen);
    return gen === guess;
}

console.log(guessRange(3, 1, 10));