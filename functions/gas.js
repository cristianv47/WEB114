// Cristian Villarreal 11/12/26
"use strict";

// Get user's name
let username = prompt(`Enter your name`);

// Validate user's name prompt input
while (username !== null && username.trim() === "") {
    username = prompt("Please enter your name:")
}

if (username !== null) {
    alert(`Hello, ${username}!`);
    calcGasAvg();
}
else {
    alert(`You cancelled the name prompt.`);
}

// Gas average function
function calcGasAvg() {
    let count = 0;
    let total = 0;
    let gasEntry = 0;
    let average = 0;

    // Get user's first week's gas amount as a float
    gasEntry = parseFloat(prompt("Enter your first week's gas total. Enter -1 when you are done."));

    while (gasEntry !== -1) {
        if (Number.isNaN(gasEntry) === true) {
            alert("Please enter a number.")
            gasEntry = parseFloat(prompt("Enter your first week's gas total. Enter -1 when you are done."));
        }
        else {
            count++;
            total = total + gasEntry;
            gasEntry = parseFloat(prompt("Enter your next week's gas total. Enter -1 when you are done."));
        }
    }

    // calculate the average
    if (count > 0) {
        average = total / count;
    }
    else {
        average = 0;
    }
    
    // Output gas average and number of entries
    if (count === 0) {
        alert("No entries");
    }
    else if (count === 1) {
        alert(`${username}'s gas total is $${total}.`);
        alert(`You entered ${count} gas total.`)
    }

    else {
        alert(`${username}'s average weekly gas bill is $${average.toFixed(2)}`); // .toFixed to show decimals 
        alert(`You entered ${count} gas totals`)
    }
    
    return average;
}