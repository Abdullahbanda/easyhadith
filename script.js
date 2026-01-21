let quotes = [
    "Actions are (judged) by intentions.",
    "Behave well towards the people.",
    "Follow up a bad deed with a good deed which will wipe it out.",
    "He who believes in Allah and the Last Day should either speak good or keep silent.",
    "It is also charity to utter a good word.",
    "Truthfulness leads to righteousness, and righteousness leads to Paradise.",
    "Removing a harmful object from the road is a charity.",
    "Do not become angry.",
    "The strong is not the one who overcomes the people by his strength, but the strong is the one who controls himself while in anger.",
    "Do not cause harm and return harm.",
    "The backbiter will not enter Paradise.",
    "Whoever helps ease one in difficulty, Allah will make it easy for him in this world and in the Hereafter.",
    "Whoever covers the faults of a Muslim, Allah will cover his faults in this world and in the Hereafter.",
    "Allah helps the servant as long as he helps his brother.",
    "He who has in his heart an ants weight of arrogance will not enter Jannah.",
    "Do not envy one another.",
    "Do not hate one another.",
    "Modesty (Shy) is a branch of faith.",
    "Righteousness is a good attitude",
    "The key to Paradise is prayer.",
    "Every act of kindness is a charity.",
    "Whoever deceives us is not one of us.",
    "Fear Allah wherever you are. ",
    "No one among you should eat with his left hand. ",
    "Verily Allah is Kind and loves kindness.",
    "Upholding ties of kinship increases ones lifespan",
    "Indeed charity extinguishes the wrath of the Lord",
    "Allah is Beautiful and loves beauty. ",
    "He does not thank Allah who does not thank the people.",
    "Allah has forbidden to you disobedience towards mothers",
    "Whoever dies not associating anything with Allah will enter Paradise."

];

// 1. SELECT THE ELEMENTS
let qEL = document.getElementById('quote');
let btn = document.getElementById('id');
let counterEL = document.getElementById('counter');
let progressBar = document.getElementById('progress-bar');

// 2. TRACK THE PROGRESS
let currentIndex = 0; 
let totalHadiths = quotes.length;

// Initial setup to show "1 of 31" and start the bar
updateUI();

// 3. THE EVENT LISTENER
btn.addEventListener('click', () => {
    // Move to the next Hadith
    currentIndex++;

    // If we reach the end, go back to the start (optional)
    if (currentIndex >= totalHadiths) {
        currentIndex = 0;
    }

    updateUI();
});

// A helper function to update the text and the bar
function updateUI() {
    // Show the current Hadith text
    qEL.innerText = quotes[currentIndex];

    // Update the counter text (we add 1 because index starts at 0)
    counterEL.innerText = `Hadith: ${currentIndex + 1} of ${totalHadiths}`;

    // Calculate progress percentage
    // Formula: (current / total) * 100
    let progressPercent = ((currentIndex + 1) / totalHadiths) * 100;
    progressBar.style.width = progressPercent + "%";
}