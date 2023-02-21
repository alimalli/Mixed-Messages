// Message Generator Program
// Goal: Output a different randomized message each time the program is run
// Theme: Inspirational Messages

const action = ["Focus", "Determination", "Hustling", "Patience", "Hard work", "Bravery", "Passion"];
const body = [" on ", " holds ", " will lead to ", " manifests ", " creates ", " results in "];
const goal = ["triumph.", "reality. ", "greatness.", "the impossible.", "the extraordinary."];

// array to hold parts of the quote
const quotes = [action, body, goal];

// Generate random index
const randomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length);
}

// Create random motivational quotes
const motivational = (arr) => {
    motivationalQuote = "";
    for (let i = 0; i < arr.length; i++) {
        motivationalQuote += arr[i][randomIndex(arr[i])];
    }
    return motivationalQuote;
}

console.log(motivational(quotes));






