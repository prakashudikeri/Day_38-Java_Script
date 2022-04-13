let n = 3;
console.log("Printing table");
let N = 1;
console.log("Value for power: 0 is = " +N);
let i = 1;

while(i<=n && N<256) {
    i++;
    N = N * 2;
    console.log("Value for Power: " +i+ " is = " +N);
}
console.log("Final Value: " +N);
