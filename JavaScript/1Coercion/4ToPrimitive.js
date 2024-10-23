/*
Docs - https://262.ecma-international.org/10.0/#sec-toprimitive
Syntax - ToPrimitive(input,preferredType),preferredType is optional
Definition - Converts the input to Non Object Type

All Non Object Types like Number,String,boolean all of these are Primitives
Objects in Javascript are Non Primitives because they are not atomic in Nature,
Objects are a composition of multiple Primitive Types

So what ever input we give it will convert it into non Object Type
If input is capable of converting to multiple types then what type to choose,
will be decided by preferred type

According to Docs
1.input should be valid Js value(Number,String,boolean,Undefined etc)
2.If typeof input is Object

Case1: PreferredType is not present 
create a varaiable hint and assign a value "default",
if hint is default set it to number as Case3

Case2: PreferredType is String 
create a variable hint and assign a value "String"

Case3: PreferredType is number
create a variable hint to be a number

3.If the input is not a Object it will directly the input 

Docs - https://262.ecma-international.org/10.0/#sec-tonumber
When ToNumber(Object) it calls ToPrimitive

Ex
let obj = {};
console.log(10 - obj);
obj internally converts obj.valueOf -> object,toString->[Object Object]

Output => NaN

*/