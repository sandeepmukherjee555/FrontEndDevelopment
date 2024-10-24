/*

Docs - https://developer.mozilla.org/en-US/docs/Glossary/Scope

Mdn Docs Var - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var

var dosent care about block scope i.e. it dosent know weather it is inside a block or not
var only declares only function scope and global scope variables no block scoping at all
var declares function scope 
so whatever variable defined inside block it will behave as global variable only
Ex of var

Ex 1)
if(true){
var x = 10;
}
console.log(x);// Output: 10
Explanation : Here block is of no meaning to x

Ex 2)
function fun(){
console.log(y);// y is accessible here it gives function scope so it is accessible anywhere in the function
var y = 10;//not accessible outside
}
console.log(y); //Output: Error y is not defined
Explanation : Here var is enclosed inside a function ,so the scope y will get is fun 

Ex 3)
var x = 1;
if (x === 1) {
  var x = 2;
  console.log(x);// Output: 2
}
console.log(x);// Output: 2
Explanation : In the example var x = 2 behaved as global scope so output in line no 16 is 2

Mdn Docs let - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

let declares block scope 

Ex of let 
Ex 1)
function gun(){
console.log(z);//not accessible here,
because whenever we declare let it is accessible below the declaration,
so let is visible below that scope only
let z = 10;
}

Ex 2)
let x = 1;//different
if (x === 1) {
  let x = 2;//different
  console.log(x); //Output: 2
}
console.log(x); //Output: 1
Explanation : when we define let x = 2 at line no 24 its a new x that has been initialized 
In the visibility of this block which is different from which is initilized at line no 22

In parsing js reads the whole code one by one and sarts allocating the variables not the values 
their corresponding scope 
*/