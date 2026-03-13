//favs *

// -------------- getElementById()* --------------------

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

//--------------- getElementsClassName() --------------

const fruits = document.getElementsByClassName("fruits");

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});

console.log(fruits);

//--------------- getElementsByTagName() --------------

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }
// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "yellow";
});
console.log(h4Elements);

//--------------- querySelector() -------------------

const element = document.querySelector(".class");

console.log(element);

//--------------- querySelectorAll()* ----------------
const foods = document.querySelectorAll("li");
foods[5].style.backgroundColor = "red";
foods[0].style.backgroundColor = "red";

foods.forEach(food => {
    food.style.backgroundColor = "red";
})

console.log(foods);
