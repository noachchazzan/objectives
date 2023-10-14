// Using a Class/Constructor Function (less common syntax)
let nums1 = new Array(2, 4, 18);
let nums2 = Array(2, 4, 18);

// Using Array Literal syntax (recommended best practice)
let nums3 = [2, 4, 18];

let movies = ["Die Hard", "Die Hard 2", "Halloween", "Chucky", "SAW"];
console.log("first element in the array is " + movies[0] + " and the arrya is " + movies.length + " long.");

let lastMovie = movies.pop(); // removes last element then returns it 
let frontMovie = movies.shift() // removes from the front of the array. 
/* pop and shift only remove one element at a time and don't take any arguments. They return the removed element so that you can store it in a variable, as shown above, and they modify the array in place, which means the original array - movies in this case - has changed.*/

// below unshift adds to the array 
movies.unshift("Jaws", "Rocky V", "Spider Man", "Super Man", "Bat Man","Prince of Eygpt");
movies.splice(2, 2, "Rocky I", "Rocky II"); // delete original item in array at index 2, but only 2 deletions, then adds at start index of 2 
// the movies rocky i and rocky ii; it mutates the original array
console.log(movies)

console.log(movies.slice(0,2)); // puts out sliced section of array from 0 up to n - 1 

console.log(movies.at(2)) // gives item at index n 
movies.reverse();

// flat flattens multidimensional arrays. 
