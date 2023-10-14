//let product = 1;
 
let arr1 = [1,2,3,4,5,6];
function arrMultiply(arr){
let product = 1;
console.log(product);	
	for(let i = 0; i <= arr.length-1; i++) {
		console.log(i + ": " + product);
		product *= arr[i];
	}
return product;
}
console.log(arrMultiply(arr1));
