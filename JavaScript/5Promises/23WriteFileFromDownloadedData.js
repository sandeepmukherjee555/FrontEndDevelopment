/* (dont use promises only use callbacks)
Write a function to download data from a url 
Write a function to save that downloaded data in a file and return the filename
Write a function to upload the file written in previous step to  a new url 
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

function writeFile(data, cb) {
    /*
    Writes the data into a new file
    */
    console.log("Started Writing a file with");
    setTimeout(function write() {
        console.log("Completed Writing the data in a file");
        const filename = "file.txt";
        cb(filename);
    }, 5000);
}

function upload(url, file, cb) {
    /*
    Uploads a data from a file to a given url
    */
    console.log("Started uploading ", file, " on ", url);
    setTimeout(function upload() {
        console.log("Upload complete");
        const response = "SUCCESS";
        cb(response);
    }, 2000);
}

download("www.xyz.com", function processDownload(content) {
    console.log("We are now going to process the downloaded data");
    writeFile(content, function processWrite(filename) {
        console.log("We ahve downlaoded and written the file,now will upload");
        upload("www.upload.com", filename, function processUpload(response) {
            console.log("We have uploaded with response");
        })
    })
})

