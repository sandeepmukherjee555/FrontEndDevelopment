function doTask(fun, x) {
    fun(x * x);//there might be chance that this function is not called
}

//due to callback, I am passing control of how exec should be called to doTask
doTask(function exec(num) {
    console.log("Num value is", num)
}, 9);

/* 
Inversion of control is giving the control of our exec function 
how this exec function should be called to someone else or some 
other function 
*/