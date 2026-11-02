// Cristian Villarreal 11/1/26
"use strict";

// Prompt user for their favorite month
let favMonth = prompt("Enter your favorite month: ").toLowerCase();

// Error checking
if (favMonth === "")
{
    alert("Please enter a month.");
    favMonth = prompt("Enter your favorite month: ").toLowerCase();
}

// Add case statements depending on the month
switch (favMonth.trim()) {
    
// Spring months
    case "march":
    case "april":
    case "may":
        alert("Spring is nice with everything blooming.");
        break;

// Summer months
    case "june":
    case "july":
    case "august":
        alert("You enjoy summer months!");
        break;

// Fall months
    case "september":
    case "october":
    case "november":
        alert("Fall is fun with all of the pretty colors.");
        break;

// Winter months 
    case "december":
    case "january":
    case "february":
        alert("You love the winter months!");
        break;

// Default
    default:
        alert("Other months are interesting too!");
        break;

}