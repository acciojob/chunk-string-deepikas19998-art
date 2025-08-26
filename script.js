function stringChop(str, size) {
  // If str is null or size is not positive, return empty array
  if (str === null || size <= 0) return [];

  const result = [];

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."));
alert(JSON.stringify(stringChop(str, size)));
