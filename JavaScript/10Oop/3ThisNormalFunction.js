const iphone = {
    name: "iphone",
    price: 10000,
    rating: 4.8,
    display: function () {
        let iphonered = {
            name: "Iphone red",
            price: 120000,
            print: () => {
                console.log(this);
            }
        }
        iphonered.print();
    }
}
iphone.display();

/*
Here this will first check the context in iphonered it will not be available 
then it will check in the iphone context in iphone context display is an normal function
*/