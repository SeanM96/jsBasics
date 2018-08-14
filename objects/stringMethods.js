let name = 'Sean';

console.log(name.length);

console.log(name.toUpperCase());

let pw = 'abc123password';

console.log(pw.includes('password'));

console.log(pw.trim());

//CA

function isValidPassword (password) {
    if (password.length < 8 || password.includes('password')) {
        return 'You need a better password!'
    }
    else {
        return 'Password approved!';
    }
}

console.log(isValidPassword('password123'));
console.log(isValidPassword('pass'));
console.log(isValidPassword('thisisvalid'));
