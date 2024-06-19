// YOUR CODE BELOW

const crazyCaps = str => {
    let str2 = `${str[0].toLowerCase()}`;

    for (let i = 1; i < str.length; i++) {
        const cur = str[i];

        if (i % 2 !== 0) {
            str2 += cur.toUpperCase();
        }
        else {
            str2 += cur.toLowerCase();
        }
    }
    return str2
}