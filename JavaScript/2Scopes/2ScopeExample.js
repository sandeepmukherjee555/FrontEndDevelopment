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

//Case 1
fun();
gun();
console.log(teacher);
console.log(content);

/*
Output :
Sushil
Mukherjee
Sandeep
JS
*/

//Case 2
console.log(content);
fun();
gun();
console.log(teacher);
/* 
Output:
reference error content is no defined
Explanation: On Line no 27 Global Scope will check it does no have the variable content
so it gives reference error

*/

/*
Explanation Js compiler goes through 2 phases Parsing Phase and Execution Phase
On Parsing Phase
teacher ,fun,gun will assigned in global scope
then it will go to Line No : 3 and the values of teacher and content will be declared on scope of fun
then it will go to Line No : 7 and the values of student will be declared on scope of fun

On Execution phase
On Line no 1: teacher will be assigned as global variable
then on function call from Line No : 11
teacher will be declared from scope of fun 
On Line no 4 there is no declaration of content so now it will go one scope out and check
in global scope does it have a variable content in the global scope
AUTOGLOBALS = if we are trying to assign a value to a variable and it is not present in any of the 
enclosing scopes it will automatically become global variable so content
during execution phase become global variable

*/
