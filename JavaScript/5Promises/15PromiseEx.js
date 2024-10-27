function blocking_for_loop() {
    for (let i = 0; i < 1000000000; i++) {

    }
}

console.log("Start Of File");

setTimeout(function timer1() {
    console.log("Timer 1 done");
}, 0);

blocking_for_loop();

let x = Promise.resolve("Sandeep Promise 1");
x.then(function procesPromise(value) {
    console.log("Whose Promise --- ", value);
    blocking_for_loop();
});

let y = Promise.resolve("Sandeep Promise 2");
y.then(function procesPromise(value) {
    console.log("Whose Promise --- ", value);
    setTimeout(function () { console.log("ok done") });
    blocking_for_loop();
});

let z = Promise.resolve("Sandeep Promise 3");
z.then(function procesPromise(value) {
    console.log("Whose Promise --- ", value);
    blocking_for_loop();
})

setTimeout(function timer2() {
    console.log("Timer 2 Done");
}, 0);

console.log("End Of File");