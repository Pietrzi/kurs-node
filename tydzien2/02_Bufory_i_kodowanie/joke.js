const arr = "01010111 01101000 01100001 01110100 00100000 01100100 01101111 00100000 01101101 01100001 01110100 01101000 01100101 01101101 01100001 01110100 01101001 01100011 01101001 01100001 01101110 01110011 00100000 01100100 01101111 00100000 01101001 01101110 00100000 01100001 00100000 01100110 01101111 01110010 01100101 01110011 01110100 00111111 00001010 01010100 01101000 01100101 01111001 00100000 01100011 01101111 01110101 01101110 01110100 00100000 01101100 01101111 01100111 01110011 00101110".split(" ");

console.log(arr)

const joke = arr.map(e => String.fromCharCode(parseInt(e, 2)));

console.log(joke.join(""));