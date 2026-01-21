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
// Make sure 'id' matches exactly what is in your HTML <button id="id">
let qEL = document.getElementById('quote');
let btn = document.getElementById('id'); 

// 2. THE EVENT LISTENER
btn.addEventListener('click', () => {

    // Pick a random quote
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let r = quotes[randomIndex];

    // 3. UPDATE THE HTML CONTENT
    // This puts the text into your blockquote!
    qEL.innerText = r; 

    // Optional: Log it to check
    console.log("New Quote:", r); 
});