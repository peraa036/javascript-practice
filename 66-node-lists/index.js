let buttons = document.querySelectorAll(".myButtons");

// ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
    button.style.backgroundColor = "hsl(180, 100%, 30%)";
    button.textContent += "<3";
});

// CLICK event listener

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "green";
    });
});

// MOUSEOVER + MOUSEOUT event listener

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(180, 100%, 20%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(180, 100%, 30%)";
    });
});

// ADD AN ELEMENT

const newButton = document.createElement("button"); //STEP 1
newButton.textContent = "Button 5"//STEP 2
newButton.classList = "myButtons";
document.body.appendChild(newButton);//STEP 3

buttons = document.querySelectorAll("myButtons");

// REMUVE AN ELEMENT

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.remove();
//         buttons = document.querySelectorAll(".myButtons");
//         console.log(buttons);
//     });
// });