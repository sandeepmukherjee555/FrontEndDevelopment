function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data", url);
        setTimeout(function down() {
            console.log("Downloading Completed");
            const content = "ABCDEF";
            reject(content);
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

download("www.xyz.com")
    .then(
        function processDownload(value) {
            console.log("Downloading done with following Value", value);
            return writeFile(value);
        },
        function downloadreject(value) {
            console.log("downlaod reject", value);
            throw value;
        })
    .then(
        function processWrite(value) {
            console.log("data written in the file with name", value);
            return uploadData(value, "www.upload.com");
        },
        function writereject(value) {
            console.log("write reject", value);
            throw value;
        }
    )
    .then(
        function processUpload(value) {
            console.log("We have uploaded with", value);
        },
        function uploadreject(value) {
            console.log("upload reject", value);
        })