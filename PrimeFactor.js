const prompt = require("prompt-sync")();
let num = prompt("Enter a positive number: ");

while(num % 2 == 0){
    console.log(2);
    num = Math.floor(num/2);
}

for (let i = 3; i<= Math.sqrt(num); i=i+2){
    while (num % i == 0){
        console.log(i);
        num = Math.floor(num/i);
    }
}

if (num > 2)
    console.log(num);
