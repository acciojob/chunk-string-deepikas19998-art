const size = parseInt(prompt("Enter Chunk Size."), 10);
if (isNaN(size) || size <= 0) {
    alert("Please enter a valid positive integer for chunk size.");
} else {
    alert(JSON.stringify(stringChop(str, size)));
}




// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);

// Use JSON.stringify to show the array properly in alert
alert(JSON.stringify(stringChop(str, size)));
