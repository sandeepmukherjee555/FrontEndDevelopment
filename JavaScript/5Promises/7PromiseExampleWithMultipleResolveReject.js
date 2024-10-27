function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function exec() {
            let num = getRandomInt(10);
            if (num % 2 == 0) {
                console.log("Fulfilling");
                resolve(num);
                console.log("Completed Fulfilling");
                resolve(10);
                console.log("Resolving Again");
                return num;
            } else {
                console.log("Rejecting");
                reject(num);
                console.log("Completed Rejecting");
                reject(15);
                console.log("Rejecting Again");
                return num;
            }
        }, 5000);
    })
}

let y = createPromiseWithTimeout();
console.log(y);

/*
if we console y
if the promise is fulfilled with value 6
the Promise object will have vale as 6 not 10 
means once we resolve/reject a promise object it can never be updated
first resolve/reject is only going to update the value
*/