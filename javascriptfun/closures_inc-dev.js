const makeCounter = function () {
	let privateCounter = 0;
	function changeBy(val) {
		privateCounter += val;
	}
	return {
		increment() {
			changeBy(1);
		},
		
		decrement() {
			changeBy(-1);
		},
		
		value() {
			return privateCounter;
		},
	};
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.

/* the above provides benefits common to OOP and data hiding/encapsulation.
*/
// There is 3 scopes in every closure:
// 1. is local(own) scope, 2. enclosing scope(can be block, function, or module scope. 
// 3.  global scope. 

// global scope 
const e = 10; 
function sum(a) {
	return function (b) {
		return function (c) {
			// outer function scope 
			return function (d) {
				// local scope 
				return a+b+c+d+e;
			};
		};
	};
}

console.log(sum(1)(2)(3)(4)); // 20 

/* SO closures can get access to block scope functions. So we can make a Closure w/ Block Scope as following:*/
function outer() {
	let getY;
	{
		const y = 6; 
		getY = () => y; // This function has closed over the variable y
	}
	console.log(typeof y); // undefined: y in the block above can't be access outside of the scope.
	console.log(getY()); // 6: the function that closed over y can still get access though. 
}
outer(); // So this means even after the block scope has ended, invoking 'getY' function can still access the value of 'y'

/* So, under stand that block scopes in JS are created using '{}' 
note that 'let' and 'const' are ALWAYS BLOCK-SCOPED and know how 
closures can CAPTURE BLOCK-SCOPED VARIABLES, ALLOWING ACCESS EVEN AFTER THE BLOCK HAD ENDED*/

/* So lets create a myModule.js with variable x which is module-scoped (not accessibel from other modules).
Then we can export these two functions 'getX' and 'setX' that get and set the value of 'x'; These two 
exported functions "close over" 'x' allowing external modules to interact with it with out directly accessing it.
SO NOTE: Closures can be used in conjunction with modules to controll access to module-scoped variables, PROVIDING ENCAPULATION */
/* let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
};
*/ //---->
/* import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
*/