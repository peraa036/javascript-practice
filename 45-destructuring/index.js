let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

//----------------------------------------

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//----------------------------------------

const colors1 = ["red", "green", "blue", "black", "white"];

const[firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//----------------------------------------

const person1 = {
    firstName: "Peckie",
    lastName: "Pecks",
    age: 27,
    job: "Java Developer",
}

const {firstName, lastName, age, job} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//----------------------------------------

function displayPerson({firstName, lastName, age, job}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);