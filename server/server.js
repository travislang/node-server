// bring express package in from node_modules
const express = require( 'express' );

// create an instance of express 
const app = express( );
// set port
const PORT = 5000;

let quotes = [
    'work is the curse of the drinking class',
    'the only thing to fear is fear itself',
    'fool me once shame on me, but teach a man to fool me and...'
    ];

// setup basic route
app.get( '/quote', function( req, res ){
    res.send( getQuote( ) )
})

let index = 0;
// return on quote
// not the same every time
function getQuote( ){
    let quoteToReturn = quotes[ index ];
    index++;
    if( index >= quotes.length ){
        index = 0;
    }
    return quoteToReturn;
}


// start up server on port
app.listen( PORT, function( ){
    console.log( `server is listening on PORT ${PORT}` );
    
})