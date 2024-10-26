/*
1) JavaScript is Synchronous in nature(It will wait for 1 task to complete and then move on to next line)
It is valid for Ecma Script code which is given by the standards

2) JavaScript is single threaded
*/

console.log("Hi we are starting");

for (let i = 0; i < 1000000000; i++) {

}
console.log("Done");

//Here Done Comes After a moment because first for loop completes execution