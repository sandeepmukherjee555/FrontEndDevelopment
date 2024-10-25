/*
higher order functions -> there are functions which take another function as arguments
these are called higher order functions
DOCS : https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function

What are Higher Order Functions?
These are functions that depends and operate on other functions,HOF take another function as 
an argument and then execute the logic  or return a function as an argument

function gun(){
}

function fun(gun){ //function fun becomes a Higher Order Function
gun();
}
*/

function f(x, fn) {
    /*
    x -> number
    fn -> function
    */
    console.log(x);
    fn();
}

f(10, function exec() {
    console.log("I am an Expression passed to a HOF");
})