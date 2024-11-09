function* fetchNextElement() {
    const x = 10;
    yield 12;
    console.log("Entering AFter yield");
    const y = x + (yield 30);
    console.log("Value of y is ", y);
}

const iter = fetchNextElement();

console.log("first ", iter.next());
console.log("Second ", iter.next());
console.log("third ", iter.next());

