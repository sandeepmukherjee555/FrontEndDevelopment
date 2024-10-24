/*
Docs : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

Ex
"use strict"
var teacher = "Sandeep";
function fun() {
    var teacher = "Sushil";
    content = "JS";
    console.log(teacher);
}
function gun() {
    var student = "Mukherjee";
    console.log(student);
}

fun();
gun();
consoel.log(content);
console.log(teacher);

Output: Error
Explanation : Here content will not become global variable using "use strict" it dissables AUTOGLOBALS

*/