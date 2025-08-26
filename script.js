function chunkString(str, length) {
    if (str === null) {
        return [];
    }

    let result = [];
    for (let i = 0; i < str.length; i += length) {
        result.push(str.substring(i, i + length));
    }

    return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);

// Use JSON.stringify to show the array properly in alert
alert(JSON.stringify(stringChop(str, size)));
