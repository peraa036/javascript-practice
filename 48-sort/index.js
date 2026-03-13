const people = [{ name: "Peckie", age: 27, gpa: 3.0 }, 
                { name: "Tammy", age: 22, gpa: 3.1 }, 
                { name: "Pat", age: 30, gpa: 1.5 }, 
                { name: "Nick", age: 27, gpa: 2.5 }];

people.sort((a, b) => a.name.localeCompare(b.name)); // lexicographic

console.log(people);