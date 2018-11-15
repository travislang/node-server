// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const quotesRouter = require( './routes/quotes.router.js' );
const haikuRouter = require( './routes/haiku.router.js' );
// globals
const app = express( );
const PORT = 5000;

// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) ); // neccessary for post data

// routes

app.use( '/quote', quotesRouter );
app.use( '/haiku', haikuRouter );


// app.get( '/quote', function( req, res ){
//     res.send( quoteHandler.getQuoteNow( ) );
// })

// app.post( '/quote', function( req, res ){
//     console.log( 'POST hit:', req.body );
//     res.send( quoteHandler.addQuoteNow( req.body.quote ) );
// })

// start up server on port
app.listen( PORT, function( ){
    console.log( `server is listening on PORT ${PORT}` );
})