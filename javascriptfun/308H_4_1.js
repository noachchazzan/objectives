/*const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  const objToArray = [];
  for (let i in checkObj) { // for i in obj, remember that i is the KEY(aka "index")
    if (checkObj[i] >= 2) {
        
      objToArray.push(checkObj[i]);
    } 
  }
  
  console.log(objToArray);
  /*Challenge: Objects - Iterating with a for loop
*/

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  const objToArray = Object.values(checkObj);
  console.log(objToArray)
  let divBy6 = false;
  for (let i in objToArray) {
    if (i % 6 == 0) {
      console.log(i);
      divBy6 = true;
    }
  }
  console.log(objToArray);
  /* You are provided with an empty array called nestedArr. Using a for loop starting at index 0, 
  add 5 subarrays to nestedArr, with each nested array containing the string 'loop' concatenated with the 
  corresponding index in nestedArr as its first element, and the index as its second element.*/
  let nestedArr = []; 
  for (let i = 0; i < 5;i++) {
    let l = "loop" + i;
    let narr = [l, i]
    console.log(l)
    nestedArr.push(narr)
  }
  console.log(nestedArr)

  /*--Challenge: Objects - Adding Properties
You are provided with an array, possibleIterable. Using a for loop, build out the object divByThree so that each key is an element 
of possibleIterable 
that is divisible by three. The value of each key should be the array index at which that key can be found in possibleIterable.--*/
const possibleIterable = [4, 3, 9, 6, 23];
const divByThree = {};

for (let i = 0; i < possibleIterable.length;i++)
{   console.log(possibleIterable[i])
    if (possibleIterable[i] % 3 == 0) {

        divByThree[possibleIterable[i]] = i;         // Key is the number itself, and value is its index.

    }
}
console.log(divByThree)

const sumMe = {
    hello: 'there',
    you: 8,
    are: 7,
    almost: '10',
    done: '!'
  };
  let total = 0;
  for (let i in sumMe) {
    console.log(typeof(sumMe[i]))
    if(typeof(sumMe[i])==="number") {
        console.log(sumMe[i])
      total += sumMe[i]
    }
  }
  console.log(total)
  