// YOUR CODE BELOW

const bacteriaTime = (cur, tar) => {
    let time = 0;

    if (tar < cur) return 'targetNum must be larger than currentNum';
    
    while (cur < tar) {
        cur *= 2;
        time++;

    }
    return time * 20;
}