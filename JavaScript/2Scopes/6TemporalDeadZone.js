console.log(teacher);
let teacher = "Sandeep"; // global
function fun() { //global
    console.log(teacher);//no error will be given
    //console.log(content); // throws an error
    var teacher = "Sushil"; //scope of fun
    let content = "JS";// content will be accessed post declaration
    if (content === "JS") {
        let hours = "120+";
        console.log(content, hours);
    }
    console.log(teacher, content);
}
fun();
console.log(teacher);
//console.log(content);
/*

Block Declaration
{
}
block scope variables like let(has block scope) declaration, so in the block only it is accessible and it is accessible post declaration only
it can we if ,while ,for or inside function block


Function scope

var gives function scope so it is avaliable anywhere inside the function before declaration also it can be accessed


We cannot access the let declared variable before declaration is called as temporal dead zone

Ex Line no 1 will become temporal Dead Zone,its a region before the declaration of the blcok scoping
*/


