console.log("Hello World");
for (let i = 0; i < 3; i++) {
    setTimeout(function exec() {
        console.log("Timer Done");
    }, 10);
}

for (let i = 0; i < 100000000; i++) {

}
console.log("End");

/*
Here inside for loop
3 timers will be created in event Queue so when
Call Stack will become empty
Event Queue -> exec | exec | exec
When call stack becomes empty exec will be bought to call Stack and executed one by one
 */

//Moral:  Any Async code cannot hamper our sync flow 