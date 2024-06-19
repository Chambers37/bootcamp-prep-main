// YOUR CODE BELOW

const myIndexOf = (source, search, start) => {
    if (start === undefined) {
        
        for (let i = 0; i < source.length; i++) {
            const cur = source[i];

            if (cur === search) {
                return i;
            }
        }
    }
}