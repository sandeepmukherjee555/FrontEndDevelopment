//DOCS : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator
function fetchNextElement(array) {
    let idx = 0;
    function next() {
        if (idx == array.length) {
            return undefined;
        }
        const nextElement = array[idx];
        idx++;
        return nextElement;
    }
    return { next };
}

const automaticFetcher = fetchNextElement([99, 11, 12, 13, 0, 1, 2, 3, 4]);
//inside automatic fetcher we can store next function
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());