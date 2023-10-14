console.log("count down from 10 to 1.");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Output odd numbers from 1 to 10.")
for (let i = 1; i <= 10;i++){
    if (i % 2 != 0){
    console.log(i);
    }
}
console.log("Output even numbers from 1 to 10.")
for (let i = 1; i <= 10;i++){
    if (i % 2 == 0) {
        console.log(i)
    }
}
console.log("Output multiples of 3, starting at 6 and ending at 60:")
for (let i = 0; i <= 60; i+=3) {
    console.log(i);
}
let x = "";
for (let i = 0; i <= 7; i++){
    x += "#";
    console.log(x);
}
function isPrime(num){
    if (num < 2) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
             return false;
        }
    }
    
    return true;
}

for (let i = 1; i <= 20; i++){
    
    if (i == 1) {console.log(i+ ": odd"); continue;} // 1 is treated as creepy.
    if(i == 3) {console.log(i + ": odd"); continue;} // 3 is weird.
    if (i == 2) {console.log(i + ": even"); continue;} // 2 is just even not prime.
    if (isPrime(i)) {
        console.log(i+": prime");
    } else if (i % 2 == 0) {
        console.log(i+": even");
    } else if (i % 2 != 0) {
        console.log(i+": odd");
    }
}
//console.log(isPrime(7));

