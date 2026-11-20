// Cristian Villarreal 11/19/26
"use strict";

// Connect JavaScript variavles to html
const quote = document.querySelector(`#quote`);
const title = document.querySelector(`#title`);
const buttons = document.querySelector(`#buttons`);

// Store the settings for each mood in the object 'moods'
const moods = {
    happy: {
        name: `Happy`,
        bg: '#FFD700',
        text: `#bd26b0`,
        message: `Warm smiles and the sun's kisses!`
    },
    calm: {
        name: `Calm`,
        bg: `#F5D0D0`,
        text: `#4B5563`,
        message: `Relaxed and floating like a cloud.`
    },
    angry: {
        name: `Angry`,
        bg: `#FF0000`,
        text: `#FFFFFF`,
        message: `Explosive rage!!`
    },
    sleepy: {
        name: `Sleepy`,
        bg: `#131B2E`,
        text: `#E2E8F0`,
        message: `I am ready for bed.`
    }
};

// Function will change page info according to selected mood
function handleMoodButton(moodClick) {
    if (moodClick.target.classList.contains(`mood-btn`)) {

        const mood = moodClick.target.getAttribute(`data-mood`);
        const moodSettings = moods[mood];

        // Update the page
        document.body.style.backgroundColor = moodSettings.bg;
        document.body.style.color = moodSettings.text;
        quote.textContent = moodSettings.message;

        console.log(`Mood selected: ${mood}`);
        console.log(`Mood settings: ${moodSettings}`);

        title.textContent = moodSettings.name;
        
    }
}

// Connect all buttons with 1 event listener
buttons.addEventListener(`click`, handleMoodButton);