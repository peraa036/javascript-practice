
//          ==STEP 1 CREATE ELEMENT==
const newH1 = document.createElement("h1");
const newListItem = document.createElement("li");



//          ==STEP 2 ADD ATTRIBUTES/PROPERTIES==
newH1.textContent = "Hello World";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";



//          ==STEP 3 APPEND ELEMENT DOM==

// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);

// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);
// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange)

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[1]);



//          ==REMOBE HTML ELEMENT==
// document.getElementById("box1").removeChild(newH1);
// document.getElementById("fruits").removeChild(newListItem);