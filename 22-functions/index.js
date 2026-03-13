function happyBirthday(username, age) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old!`);
}

happyBirthday("Peckie", 27);

//-------------------------------------------

function add(x, y) {
    return x + y;
}
console.log(add(2, 4));

function subtract(x, y) {
    return x - y;
}
console.log(subtract(3, 2));

function multiply(x, y) {
    return x * y;
}
console.log(multiply(2, 4));

function divide(x, y) {
    return x / y;
}
console.log(divide(4, 2));

//-------------------------------------------

function isEven(number) {
    return number % 2 === 0 ? true : false;
}

console.log(isEven(12));

//-------------------------------------------

function isValidEmail(email) {
    if (email.includes("@")) {
        return true;
    }
    else {
        false;
    }
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("peckie@fake.com"));