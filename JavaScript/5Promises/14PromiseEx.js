console.log("Start of the file");
setTimeout(function timer1() {
    console.log("Timer 1 Done");
}, 0);

for (let i = 0; i < 10000000; i++) {

}

let x = Promise.resolve("Sandeep Promise");

x.then(function procesPromise(value) {
    console.log("Whose Promise", value);
})

setTimeout(function timer2() {
    console.log("Timer 2 Done")
}, 0)

console.log("End Of File");

/*
Here is the example runtime will give first priority to global piece of code 
then functions registered in microtask queue
then functions registered in callbackqueue
*/