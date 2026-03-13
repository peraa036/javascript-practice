let username = " Peckie    ";

console.log(username.charAt(0));
console.log(username.indexOf("c"));
console.log(username.lastIndexOf("k"));
console.log(username.lastIndexOf("k"));
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.toLowerCase());

let result = username.startsWith(" ");
console.log(result);



if(result){
    console.log("Your username can't begin with ' '");
} else {
    console.log(username);
}

let result2 = username.endsWith(" ");
console.log(result2);

if(result){
    console.log("Your username can't end with ' '");
} else {
    console.log(username);
}

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(15,"0");
console.log(phoneNumber);
phoneNumber = phoneNumber.padEnd(15,"0");
console.log(phoneNumber);