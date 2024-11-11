/*
this keyword refers to the calling context
*/

let iphone = {
    name: "I Phone 14 Pro",
    price: 100000,
    description: "New Apple I Phone 14 Pro ",
    rating: 4.8,
    display() {
        console.log("first display", this);
    }
}

let macbook = {
    name: "Macbook 14 ",
    price: 123000,
    description: "New Apple Macbook m3 pro ",
    rating: 5,
    display() {
        console.log("second display", this);
    }
}

macbook.display();

/*
console.log(this);
Here this refers to the window Object depending on the runtime 
*/