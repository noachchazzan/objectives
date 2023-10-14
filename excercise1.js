/* 
Exercise
Write while loops to accomplish the following tasks:

Count down to 0 from a given number.
Log integers in multiples of 3 as long as they are less than 35.
Print integers in multiples of 5 as long as they are less than 100.
Print integers between 0 and 20 with the following conditions:

All numbers divisible by 2 should be multiplied by 3 before they are output.
All other integers should not be output.
Print all prime numbers between 0 and 20.
Bonus Logical Question
Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

Write a loop that outputs how many quarters Romeo received.
*/
let num = 101; 
let i = num;
let j = 0;
while ( 0 < i) {
    console.log(i);
    i--;
}

while (j <= num) {
    if (j < 35) {
        console.log(j*3);
    }
    j++;
}

console.log('--------')
let qq = 20;
while (qq >= 0) {
    if (qq % 2 == 0) {
        
        console.log(qq*3)
        
    } else if (isPrime(qq)) {
    console.log(qq);
    }   else {console.log(" ")}
    qq--;
}
console.log('----------')

while (0 <= num) {
    if (num < 35) {
        console.log(num*3);
        
    } else if (num < 100) {
        console.log(num*5);
       
    }
    else if (num <= 20 && num >= 0) {
        if (num % 2 == 0) {
            let x = num * 3;
            console.log(x)
            
        } else if (isPrime(num)) {
        console.log(num);
        }   else {continue;}
    }
    num--;
}
function isPrime(num1){
    if (num1 < 2) return false; // 0 and 1 are not prime numbers
    for (let j = 2; j <= Math.sqrt(num1); j++) {
        if (num1 % j == 0) {
             return false;
        }
    }
    return true;
}
