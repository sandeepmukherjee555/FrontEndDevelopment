Promise.resolve("foo")
    .then(function p1(string) { // this line returns another Promise
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                string += "bar"; //after 10 seconds it becomes foobar
                resolve(string);
            }, 1000);
        })
    })
    //after resolved this promise was returned for P2 
    //the moment we resolve the promise with foobar we get the value foobar in the paramenter of p2
    .then(function p2(string) {
        setTimeout(() => {
            string += "baz";
            console.log(string);
        }, 1);
        return string;//foobar
    })
    .then(function p3(string) {
        console.log(string);
    });

/*
1st Promise Object
 {
 value:"foo",
 state: fulfilled,
 onFulfillment : [p1],
 onReject : []
 }
 2nd promise object
 {
 value : undefined,
 state: pending,
 onFulfillment: [p2]
 }
 3rd promise object
 {
 value:undefined,
 state:pending,
 onFulfillment : [p3]
 }

 1st Promise is already resolved so p1 will be starting its execution
 when p1 execution starts it returns a new Promise 
 p1 returns a new Promise so it will not be considered as resolved Promise
 Inside new Promise we start a Timer 
 We return foobar from p2 so p3 also gets resolved 
*/