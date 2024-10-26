function timeConsumingLoop() {
    console.log("Loop Starts");
    for (let i = 0; i < 1000000; i++) {

    }
    console.log("Loop Ends");
}

function timeConsumingByRuntimeFeature() {
    console.log("Starting Timer");
    setTimeout(function exec() { console.log("Completed the timer") }, 5000);
}

console.log("Hiiii");
timeConsumingLoop();
timeConsumingByRuntimeFeature();
timeConsumingLoop();
console.log("Byee");
