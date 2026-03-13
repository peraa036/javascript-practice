const person = {
    fullName: "Petar Krstic",
    age: 27,
    isStudent: false,
    hobbies: ["mma", "running", "biking"],
    address: {
        street: "123 Peckie's St.",
        city: "Axenthar",
        country: "Solvanta"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0]);

for (const property in person.address) {
    console.log(person.address[property]);
}

// -----------------------------------------------

class Person {
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Peckie", 27, "123 Peckie's St.", "Axenthar", "Solvanta");
const person2 = new Person("Tammy", 22, "123 Peckie's St.", "Axenthar", "Solvanta");

console.log(person1.address.country);