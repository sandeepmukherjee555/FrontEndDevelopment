/*
In arrow function this does not refer to the calling context
*/
const iphone = {
    name: "Iphone",
    price: 100000,
    description: "The new Apple I Phone 14",
    rating: 4.8,
    display: () => { console.log(this) }
}

const macbook = {
    name: "Macbook M2",
    price: 123000,
    description: "The new Apple Macbook Pro",
    rating: 5,
    display: function () {
        console.log(this);
    }
}

iphone.display();
macbook.display();