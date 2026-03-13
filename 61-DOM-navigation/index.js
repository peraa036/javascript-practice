
//------------------.firstElementChild-------------------

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});

//------------------.lastElementChild---------------------

const element1 = document.getElementById("fruits");
const lastChild = element1.lastElementChild;
lastChild.style.backgroundColor = "green";

const ulElements1 = document.querySelectorAll("ul");
ulElements1.forEach(ulElement1 => {
    const lastChild = ulElement1.lastElementChild;
    lastChild.style.backgroundColor = "green";
});

//------------------.nextElementSibling--------------------

const element2 = document.getElementById("vegetables");
const nextSibling = element2.nextElementSibling;
nextSibling.style.backgroundColor = "red";

//------------------.previousElementSibling---------------

const element3 = document.getElementById("orange");
const prevSibling = element3.previousElementSibling;
prevSibling.style.backgroundColor = "red";

//------------------.parentElement------------------------

const element4 = document.getElementById("cake");
const parent = element4.parentElement;
parent.style.backgroundColor = "yellow";

//------------------.children-----------------------------

const element5 = document.getElementById("fruits");
const children = element5.children;

children[1].style.backgrounndColor = "orange";

