const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a Number: "));
let i = 0;

while(i<=num){
    console.log(num+ " to the power of " +i+ " is " +Math.pow(num,i));
    i++;
}