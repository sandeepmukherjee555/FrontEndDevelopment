function timeConsumingLoop() {
    console.log("Loop Starts");
    for (let i = 0; i < 1000000; i++) {

    }
    console.log("Loop Ends");
}

function timeConsumingByRuntimeFeature0() {
    console.log("Starting Timer0");
    setTimeout(function exec0() {
        console.log("Completed the timer0")
        for (let i = 0; i < 10000000; i++) { }
    }, 5000);
}

function timeConsumingByRuntimeFeature1() {
    console.log("Starting Timer1");
    setTimeout(function exec1() { console.log("Completed the timer1") }, 0);
}

function timeConsumingByRuntimeFeature2() {
    console.log("Starting Timer2");
    setTimeout(function exec2() { console.log("Completed the timer2") }, 300);
}

console.log("Hiiii");
timeConsumingLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingLoop();
console.log("Byee");

/*
Explanation

Runtime

timer0-> will wait for 5 sec after that it will execute -> exec0
timer1-> will wait for 0 sec after that it will execute -> exec1
timer2-> will wait for 300 mili sec after that it will execute -> exec2

In the event Queue
first exec1,exec2,exec0 will be enterted to execute after all the global piece of code is executed

Order in which functions in Event Queue will be executed

exec1 | exec2 | exec0

After all the Global piece of code is executed

exec1 will be bought to the call stack to execute 
After exec1 is executed exec2 is called to the call stack to execute
After exec2 is executed exec0 is called to the call stack to execute

*/
