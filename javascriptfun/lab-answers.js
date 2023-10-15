/* Easy Going */


/* Get Even */
for (let i = 0; i <= 200; i++) {
    if(i%2==0) {
        console.log(i);
    }
}
/* Fizz Buzz 
Fizz Buzz
This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and shorter.
*/
/*
Write a Javascript Application that logs all numbers from 1 - 100.
If a number is divisible by 3, log "Fizz" instead of the number.
If a number is divisible by 5, log "Buzz" instead of the number.
If a number is divisible by 3 and 5, log "FizzBuzz" instead of the number.
The commit message should read: "Fizz Buzz answered"
*/

for (let i = 0; i <= 100; i++)
    if((i % 3 == 0) && !(i%5==0)){console.log("Fizz");}
    else if ((i % 5 == 0) && !(i%3==0)){console.log("Buzz");}
    else if ((i % 3 == 0)&&(i%5==0)){
        console.log("Fizz Buzz");
    } else {console.log(i);}
/*

Wild Wild Life
Use the following arrays to answer the questions below (name, species, age, hometown).

You should be modifying the elements by accessing them. It is up to you which methods to use.


Plantee just had her birthday; change Plantee's array to reflect her being a year older.
Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
Give D'Art a second hometown by adding "Hawkins"
Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
The commit message should read: "Wild Wild Life answered"
*/
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]+=1;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy[0]="Gameboy";
/*

Yell at the Ninja Turtles
Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo).
Use a for of loop to call toUpperCase() on each of them and print out the result.
Haven't heard of for of loops?

As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

The commit message should read: "Yell at the Ninja Turtles answered"
*/
let arr0 = ["Sanad","Osama","Momo","Nidal","Tadik","Abdel","Mousa"]
for (let i of arr0) {
    console.log(i[0].toUpperCase() + i.substring(1));
}

/*

Methods, Revisited
Here is a list of favorite movies:

Console log the index of Titanic.
Do the following and console.log the final results. (I have included some thought questions; you don't have to write out an answer for those marked as such).

Note: if you have to add to the array, feel free to add any movie you'd like.
*/
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
console.log(favMovies[8]);
/*
Use the .sort method.
*/
console.log(favMovies.sort());
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
console.log(favMovies.unshift()); 
for(let i = 0; i < favMovies.length;i++){
    if (favMovies[i]=="Django Unchained") {
        favMovies.splice(i-1,1);
        console.log("Found: " + favMovies[i] + " at " + i);
        favMovies[i-1]="Avatar";
    }
}
console.log(favMovies);
let slicedfavMovies = favMovies.slice(((favMovies.length-1)/2));
console.log(slicedfavMovies);
//favMovies.push("Fast and Furious");
console.log(favMovies.indexOf("Fast and Furious"));
/*
Thought Question: What did this do to the array? Did it permanently alter it?
Use the method pop. x
push "Guardians of the Galaxy".  x
Reverse the array. x
Use the shift method. x
unshift - what does it return? x 
splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself).
Thought Question: Did this permanently alter our array? x 
slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.) x
Thought Question: Did this permanently alter our array? no
Store the value of your slice in a variable and console.log it. x 
Thought Question: What is going on here? x it returend new sliced array 
console.log your final results. x 
After running the above tasks, console.log the index of "Fast and Furious."x - 1 
We removed it from the array. What value do we get when we look for the index of something that is not in the array?
Thought Question: We declared the variable favMovies with const, and yet we were allowed to change the array. Weird? Should we have used let?
The commit message should read: "Methods Revisited answered" x -- arrays weird 
---------------------------------------------------------------------------------------*/

console.log("Where is Waldo");
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1)
whereIsWaldo[1][2]="No one";
console.log(whereIsWaldo)
console.log(whereIsWaldo[2][1][1]);
/* With the following multi-dimensional array:
Remove Eggbert (hint look at the slice/splice methods). x
Change "Neff" to "No One". x
Access and console.log "Waldo". x
The commit message should read: "Where is Waldo answered"
*/
console.log("Excited Kitten"); 
// code here 
let resC = ["...human... why you taking pictures of me...?", "...the catnip made me do it...", "...why does the red dot always get away...?"]
for (let i = 1; i<=20;i++) {
    if (i%2==0){console.log( )} else
    console.log("Love me, pet me! HSSSSSS!");
    const randomIndex = Math.floor(Math.random() * resC.length);
    const randomElement = resC[randomIndex];
    console.log(randomElement);
}
/*write code that logs 20 times. x
For every even number in your loop, log, , or  at random. x
Need some hints? Click here! x
Image of cat with funny quote about dot
The commit message should read: "Excited Kittens answered"------------------------
*/
let median = 0;
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
console.log("Find the Median");
nums.sort((a,b)=> a - b);

  if (nums.length%2===0) {
    median = (nums[(nums.length/2)-1]+nums[(nums.length/2)]/2);
    console.log(nums.sort())
  } else {
    console.log(nums.sort())
    median = nums[Math.floor(nums.length/2)];
  }

console.log(median);

// code here 
/*Find the median number in the following nums array, then console.log that number.
Hint: If you check the length of the array divided by two, you might get not get a whole number. In which case, look into Math.floor().
// Expected output: 15 x
The commit message should read: "Find the Median answered" x


------------------------------------
Hungry for More?
The remainder of these problems are optional; however, we encourage more practice whenever you have the time for it!
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.
*/
// code here 
console.log("Hungary for More?");
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];



/*-----------------------------------
// Thom's closet is more complicated. Check out this nested data structure!!

*/
console.log("Alien Attire");
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
/*

Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer!
Remove Kristyn's shoe from the array and save it to the variable kristynsShoe.
Use that variable to add Kristyn's lost shoe to Thom's accessories array.
The commit message should read: "Kristyn's lost shoe found"

*/
// code here 
console.log("Dress Up");

/*

/*

*/
/// code here 
/*
Dress Us Up
Modify your code to put together three separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
The commit message should read: "Kristyn and Thom have their outfits ready for class - array practice"
Dirty Laundry
Time to do laundry. Loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
The commit message should read: "Washed dirty laundry"
Inventory
Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
The commit message should read: "Hungry for More: Complete"
*/