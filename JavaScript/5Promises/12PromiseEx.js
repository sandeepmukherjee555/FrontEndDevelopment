function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started Downloading from url ", url);
        setTimeout(function processDownloading() {
            let data = "Dummy Data";
            console.log("Download Complete");
            resolve(data);
        }, 5000);
    })
}
console.log("Start");
let promiseObj = fetchData("abcdef");
promiseObj.then(function A(value) {
    console.log("Value is ", value);
})

console.log("End");

/*
Here After Printing Start 
fetchData will be called and Started Downloading from url will be printed
setTimeout will register a timer for 5 sec 
After that End will be printed
When Timer ends
processDownloading will be available in callbackqueue
Then Runtime will check is there anything available in callaback queue ,
so procesDownloading will be called to the call stack to execute 
So when processDownloading executes we call resolve(data); and promise will be resolved
The moment the promise state becomes fulfilled function A will be registered in the microtask queue
Then the Runtime will check is there anything in microtask queue 
So runtime will bring A from microtask queue to Call Stack and execute it
Then Value is Dummy Data will be printed
*/