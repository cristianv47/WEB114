// Cristian Villarreal 10/20/26
"use strict";

/* PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1: [Your question here-- see questions below}

    -Variable name personalized to question (no answer1)
   - Correct answer:
   - How I'll validate and check the answer :

3. Use that structure for all questions.

6. Math: How will I calculate the percentage?

7. Final feedback logic (if / else if / else):

// Question 1

// Question 2

// Question 3

// Question 4

// Question 5

// Calculate percentage using math

// Final feedback using if / else if / else

If statement that uses an alert statement about their score

// Final summary alert
*/

// Initialize score = 0
let score = 0;

// Question 1: [ 5 + 3 ]
// Answer: 8
const question1 = Number(prompt("5 + 3 = ? (Enter a number)"));

if (question1 === 8) {
    alert("Correct!");
    score = score + 1;
}
else {
    alert(`
        Incorrect.

        Your answer: ${question1}
        Correct answer: 8
        `);
}

// Question 2: [ 10 - 4 ]
// Answer: 6
const question2 = Number(prompt("10 - 4 = ? (Enter a number)"));

if (question2 === 6) {
    alert("Correct!");
    score = score + 1;
}
else {
    alert(`
        Incorrect.

        Your Answer: ${question2}
        Correct Answer: 6
        `);

}

// Question 3: [ 4 * 3 ]
// Answer: 12
const question3 = Number(prompt("4 * 3 = ? (Enter a number)"));

if (question3 === 12) {
    alert("Correct!");
    score = score + 1;
}
else {
    alert(`
        Incorrect.

        Your Answer: ${question3}
        Correct Answer: 12
        `);
}

// Question 4: [ 20 / 5 ]
// Answer: 4
const question4 = Number(prompt("20 / 5 = ? (Enter a number)"));

if (question4 === 4) {
    alert("Correct!");
    score = score + 1;
}
else {
    alert(`
        Incorrect.

        Your Answer: ${question4}
        Correct Answer: 4
        `);
}

// Question 5: [ What is your favorite color? ]
// Answer: red
const myFavColor = prompt("What is Cristian's favorite color?");

if (myFavColor.trim() .toLowerCase() === "red") {
    alert("Correct!");
    score = score + 1;
}
else {
    alert(`
        Incorrect.

        Your Answer: ${myFavColor}
        Correct Answer: red
        `);
}


// Final Summary

let finalScore = (score / 5 * 100);

// 5 / 5 correct
if (finalScore === 100) {
    alert(`
        Congratulations!

        You got ${finalScore}%

        ${score} out 5 correct.
        `);
}
// 4 / 5 correct
else if (finalScore === 80) {
    alert(`
        You got ${finalScore}%
        
        ${score} out of 5 correct.
        `);
}
// 3 / 5 correct
else if (finalScore === 60) {
    alert(`
        You got ${finalScore}%

        ${score} out of 5 correct.
        `);
}
// 2 / 5 correct
else if (finalScore === 40) {
    alert(`
        You got ${finalScore}%

        ${score} out of 5 correct.
        `);
}
// 1 / 5 correct
else if (finalScore === 20) {
    alert(`
        You got ${finalScore}%

        ${score} out of 5 correct.
        `);
}
// 0 / 5 correct
else {
    alert(`
        Better luck next time.

        You got ${finalScore}%

        ${score} out of 5 correct.
        `);
}

