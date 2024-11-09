//DOCS : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators

function* fetchNextElement() {
    console.log("I am inside the generator function");
    yield 1;
    yield 2;
    console.log("Somewhere in the middle");
    yield 3;
    return 10; //if we add return then the done value will be true
    yield 4;
}

const iter = fetchNextElement();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/*
The execution of a generator function dosent start at the time of calling
When we call a generator function it dosen't start its execution
When we call generator functions it returns a iterator by concole.log(iter) we can check
If we do multiple console.log(iter.next()) it will return the object with yield value 
and done status as true or false till there is no yield left when all the yield value is printed 
the done value will be true 

yield is similar to return but not return
*/