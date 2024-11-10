//DOCS : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data", url);
        setTimeout(function down() {
            console.log("Downloading Completed");
            const content = "ABCDEF";
            resolve(content);
        }, 5000);
    })
}

function writeFile(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting writing a file with data", url);
        setTimeout(function write() {
            console.log("Completed writing data in a file");
            const filename = "file.txt";
            resolve(filename);
        }, 5000);
    })
}

function uploadData(file, url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting Uploading", file, " on ", url);
        setTimeout(function up() {
            console.log("Upload Content");
            const response = "SUCCESS";
            resolve(response);
        }, 5000);
    })
}

async function steps() {
    const downloadedData = await download("www.xyz.com");
    console.log("data downloaded is ", downloadedData);
    const fileWritten = await writeFile(downloadedData);
    console.log("file written is---", fileWritten);
    const uploadResponse = await uploadData(fileWritten, "www.google.com");
    console.log("Upload response is--- ", uploadResponse);
    return uploadResponse;
}

steps();