// Message Generator Program
// Goal: Output a different randomized message each time the program is run
// Theme: Inspirational Messages

const action = ["Focus", "Determination", "Hustling", "Patience", "Hard work", "Bravery", "Passion"];
const body = [" on ", " holds ", " will lead to ", " manifests ", " creates ", " results in "];
const goal = ["triumph.", "reality. ", "greatness.", "the impossible.", "the extraordinary."];

const quotes = [action, body, goal];

// Create random motivational messages
const motivational = (quotes) => {
    motivationalQuote = "";
    for (let i = 0; i < quotes.length; i++) {
        motivationalQuote = quotes[0][(Math.floor(Math.random() * quotes[0].length))] + quotes[1][(Math.floor(Math.random() * quotes[1].length))] + quotes[2][(Math.floor(Math.random() * quotes[2].length))];
    }
    return motivationalQuote;
}

console.log(motivational(quotes));






