/* (dont use promises only use callbacks)
Write a function to download data from a url 
*/

function download(url, cb) {
    /*
    Downloads content from the given url and passes the
    downloaded content to the given callback
    */
    console.log("Starting to download data from given url", url);
    setTimeout(function down() {
        console.log("Downloading Completed")
        const content = "ABCDEF";//assume dummy download content
        cb(content);
    }, 5000);
}

download("www.xyz.com", function process(content) {
    console.log("Downloaded Data is ", content);
})