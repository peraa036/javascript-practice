const words = ["apple", "orange", "banana", "kiwi", "coconut"];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(longWords);

function getShortWords(element){
    return element.length <= 5;
}

function getLongWords(element){
    return element.length > 5;
}