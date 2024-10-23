/* 
Docs - https://262.ecma-international.org/10.0/#sec-subtraction-operator-minus
After Storing the leftoperand/rightoperand value in lref/rref from step 1-4
Step 5 and 6 convert the values ToNumber() and store in lnum/rnum

Refer Docs - https://262.ecma-international.org/10.0/#sec-tonumber

Ex-1) 10 - null
10 is a Number so no conversion will be there as mentioned in the DOCS
null conversion ToNumber(null) returns +0 

Output :
10-0 = 10

Ex-2) 10 - undefined
10 is converted to Number so it remains 10
undefined conversion ToNumber(undefined) returns NaN 
Output:
10 - NaN = NaN

Ex-3) 10 - true
10 is converted to Number so conversion is 10
true conversion ToNumber(true) returns 1
Output:
10 - 1 = 9

ToNumber on Strings Docs - https://262.ecma-international.org/10.0/#sec-tonumber-applied-to-the-string-type

*/
