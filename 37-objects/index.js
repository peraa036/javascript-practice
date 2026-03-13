const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi!")},
    eat: function(){console.log("I'm eating Krabby Patty!")}
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => {console.log("Hey!")},
    eat: () => {console.log("I'm eating pizza!")}
}

person1.sayHello();
person2.sayHello();

person1.eat();
person2.eat();