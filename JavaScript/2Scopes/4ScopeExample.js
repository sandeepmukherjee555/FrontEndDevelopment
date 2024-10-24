function fun() { // fun -> global scope
    var x = 10; // x -> fun scope
    function gun() { // gun -> fun scope
        var y = 20; // y -> gun scope 
        console.log(x); // 10 (first it will check in the gun scope it it will go one level outside the scope)
        console.log(y); // 20 (available in gun scope)
    }
    gun();
    console.log(x); //10 (it will check in the scope of fun and 10 will be printed)
    console.log(y); // Error
    //Explanation : it will check does scope of fun have y it dosent have then it will go one level outside
    // and check in global scope is y is present its not present so it will give an error here we are using the value
    // not creating the value so AUTOGLOBAL login will not work here 

}
fun();
//IMP
//Refer https://mazurov.github.io/eslevels-demo/ to understand scoping mechanism

//Explanation where its yellow its scope of gun where its green its scope of fun and global scope is white
// implicit is runtime which is runtime