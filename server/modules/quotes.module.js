let quotes = [
    'work is the curse of the drinking class',
    'the only thing to fear is fear itself',
    'fool me once shame on me, but teach a man to fool me and...'
];

let index = 0;

// return on quote
// not the same every time
function getQuote() {
    let quoteToReturn = quotes[index];
    index++;
    if (index >= quotes.length) {
        index = 0;
    }
    return quoteToReturn;
}

function addQuote( newQuote ){
    quotes.push( newQuote );
}

module.exports = { 
    getQuoteNow: getQuote,
    addQuoteNow: addQuote
    };