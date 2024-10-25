console.log(typeof [1, 2, 3, 4, 5]); // Object
/*
arrays are also custom objects in JS
index of the element is the key and the element is itself is the value
["abc","def","ghi"] -> {0:"abc",1:"def",2:"ghi"} 

map function
map is a higher order function available with arrays 
it takes a function as an argument -> f
it returns an array in which every value is actually populated by calling 
function f with original array element as argument 

Every element of the original array is passed one by one in the argument function f 
whatever is the output for each individual element,we populate that output in an array

map internally iterates/loops of the given original array pass that element in the argument function f 
and thenstore the returned value inside an array

When to use maps?
In any situation when we have to do an operation on every elemnt of the array and store the result of each operation
map can be a good option

*/

function square(el) {
    return el * el;
}
const arr = [1, 2, 3, 4, 5];//original array
const result = arr.map(square);//square is a function passed as an argument 
console.log(result);
