// YOUR CODE BELOW

const mySlice = (str, start, end) => {
    if (start === undefined) {
        return str;
    }

    if (end === undefined) {
        let str2 = '';

        for (let i = start; i <str.length; i++) {
            const cur = str[i];

            str2 += cur;
        }
        return str2
    }

    if (start && end) {
        let str3 = '';

        for (let i = start; i < end; i++) {
            const cur = str[i];

            str3 += cur;
        }
        return str3
    }
}