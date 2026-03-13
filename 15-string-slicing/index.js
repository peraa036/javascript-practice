const fullName = "Petar Krstic";

// let firstName = fullName.slice(0, 5);
// console.log(firstName);

// let lastName = fullName.slice(6);
// console.log(lastName);

// let firstChar = fullName.slice(0,1);
// console.log(firstChar);

// let lastChar = fullName.slice(-1);
// console.log(lastChar);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// console.log(firstName);

// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(lastName);

const email = "peckie@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extention = email.slice(email.indexOf("@"));
console.log(username);
console.log(extention);