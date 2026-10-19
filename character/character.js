// Cristian Villarreal 10/15/26
"use strict";

// Write a welcome message for the visitor
alert(`Welcome to the underwater kingdom of Javalantis! I am your guide and I will help you create your hero.`);

// Create a prompt to ask the vistor for their name
let charName = prompt("Enter your character's name:" , "Wanderer");

// Ask what type of pet or companion their character has using a template literal and store the result in a const variable
const COMPANION_NAME = prompt(`What kind of pet or companion does ${charName} have? (e.g., dragon, wolf, robot, unicorn)`);

console.log(COMPANION_NAME);

// Ask the visitor what superpower their character has
const CHAR_SUPERPOWER = prompt(`What superpower does ${charName} have?`);

// Ask visitor how many years their character has been training
const TRAINING_YEARS_TEXT = prompt(`How many years has ${charName} been training? (enter a number)`);

// Convert from string to number
const TRAINING_YEARS_NUMBER = Number(TRAINING_YEARS_TEXT);

// Log both TRAINING_YEARS_X values and types to the console
console.log(TRAINING_YEARS_TEXT, typeof TRAINING_YEARS_TEXT); 
console.log(TRAINING_YEARS_NUMBER, typeof TRAINING_YEARS_NUMBER);

// Multiply training years variable by 10 
const POWER_LEVEL = TRAINING_YEARS_NUMBER * 10;
console.log(POWER_LEVEL);

// Use confirm to verify if visitor likes fighting monsters
const LIKES_FIGHTING_MONSTERS = confirm(`
    Does ${charName} like fighting monsters?
    Click OK for YES
    Click Cancel for NO`);

console.log(LIKES_FIGHTING_MONSTERS, typeof LIKES_FIGHTING_MONSTERS);

// Loading / preparing message
alert(`Gathering magic for ${charName}... almost ready!`);

// Final character story
alert(`
  
    ====================================

    Name: ${charName}
    Pet: ${COMPANION_NAME}
    Superpower: ${CHAR_SUPERPOWER}
    Power Level: ${POWER_LEVEL}
    Monster fighter?: ${LIKES_FIGHTING_MONSTERS ? "Yes" : "No"}

    
    In the underwater kingdom of Javalantis, ${charName} is equipped with 
    ${CHAR_SUPERPOWER} and travels by ${COMPANION_NAME}. After ${TRAINING_YEARS_NUMBER} years of training, 
    ${charName} has reached a power level of ${POWER_LEVEL} and is ready for any 
    adventure that awaits!

    ====================================

    `);
