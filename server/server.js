// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const getQuote = require( './modules/quotes.module.js' );

// globals
const app = express( );
const PORT = 5000;

// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) ); // neccessary for post data

// routes
app.get( '/quote', function( req, res ){
    res.send( getQuote( ) )
})

app.post( '/quote', function( req, res ){
    console.log( 'POST hit:', req.body );
    res.send( 'meow' );
})

// start up server on port
app.listen( PORT, function( ){
    console.log( `server is listening on PORT ${PORT}` );
})