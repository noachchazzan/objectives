let num = -333;
let num2 = 333;
let age = 16;
// if and else statement
if (age >= 16) {
    console.log("You are old enough!");
} else {
    console.log("You are not old enough!");
}


if (num > 0 && num > 100) {
    console.log("+ and greater than 100");
} else if (num > 0 && num < 100) {
    console.log("- and less than 100");
}
else {
    console.log("other");
}
// else-if statement
let grade = 79;
if (grade >= 90) {
    console.log("A");
} else if (grade >= 80 && grade < 90) {
        console.log("B");
} else if (grade >= 70 && grade < 80) {
    console.log("C");
} else if (grade >= 55 && grade < 70) {
    console.log("D");
} else (grade < 55) 
{
    console.log("F");
}

// switch statement 
/*
 in JavaScript's switch statement, the value for each case is not always a string. While you can use strings, you can also use numbers, booleans, 
 or any other data type. The switch statement evaluates the expression inside its parentheses and matches it against the values of the case clauses.
*/
 switch(num) {
    case 333:
        console.log("333");
        break;
    case '2':
        console.log("-333");
        break;
    case '-333':
        console.log("-333 with case string of -333");
        break;
    case -333:
        console.log("-333 in numeral format within case");
        break;
    
    case NaN:
        console.log("NaN");
        break;
    default:
        console.log("default");
}

// Ternary operator: (conditional) ? (value_if_true) : (value_if_false)

let grade2 = 69;

(grade2 == 69 || grade >=69 && grade  <= 72) ? console.log("YOU BARELY PASSED") : console.log("okay");

let y = 10; 
let isTen = y == 10 ? true : false;

console.log(isTen);

// Errors
let x = -11;

try {
	if (x > 0) {
		let isEven = (x % 2 == 0) ? true : false; console.log(isEven);
	} else if (x <= 0) {
		throw "Error - Value of 0 or below.";
	}

	
} catch (err) {
	console.log(err);
} finally {
	console.log(x);
}

let numbers = [1, 2, 3, 4, 5];

function double(n) {

  return n * 2;
}
function processArray(x,y){
  for (let i = 0; i < x.length; i++) {
    x[i]=y(x[i]);
    console.log(x[i]);
  }
  return x;
}
let doubledNumbers = processArray(numbers, double);
console.log(doubledNumbers); // Expected Output: [2, 4, 6, 8, 10]
