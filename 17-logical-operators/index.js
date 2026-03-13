const temp = 20;

if(temp > 0 && temp <= 30){            // && - AND
    console.log("The weather is good!");
}
else{
    console.log("The weather is bad!");
}


if(temp <= 0 || temp > 30){           // || - OR
    console.log("The weather is bad!");
}
else{
    console.log("The weather is good!");
}

const isSunny = true;

if(!isSunny){                       // ! - NOT
    console.log("It is sunny!");
}
else{
    console.log("It is NOT sunny");
}