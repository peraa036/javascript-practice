const names = `["Peckie", "Tammy", "Mickie", "Nickie"]`;
const person = `{ "name": "Peckie", "age": 27, "isStudent": false, "hobbies": ["mma", "cooking", "coding"] }`
const people = `[{ "name": "Peckie", "age": 27, "isStudent": false },
                { "name": "Tammy", "age": 22, "isStudent": true },
                { "name": "Mickie", "age": 25, "isStudent": false },
                { "name": "Nickie", "age": 30, "isStudent": true }]`;
//stringify()
const jsonString1 = JSON.stringify(names);
const jsonString2 = JSON.stringify(person);
const jsonString3 = JSON.stringify(people);

//parse()
const parsedData = JSON.parse(names);
console.log(parsedData);

//fetch()
fetch("person.json").then(response => response.json())
                    .then(value => console.log(value));

fetch("people.json").then(response => response.json())
                    .then(values => values.forEach(value => console.log(value.name)))
                    .catch(error => console.error());