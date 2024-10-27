function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started Downloading from url ", url);
        setTimeout(function processDownloading() {
            let data = "Dummy Data";
            resolve(data);
            console.log("Download Complete");
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
Till the time processDownloading will be completely executed till the time 
fulfillment handler function A will be waiting in the microtask queue 
After that function A will be executed
*/