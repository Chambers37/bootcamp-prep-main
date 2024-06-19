// YOUR CODE BELOW

const myMnemonic = (...args) => {
    let str = '';

    for (let i = 0; i < args.length; i++) {
        const cur = args[i];
        const char = cur[0];

        str += char;
    }
    return str;
}