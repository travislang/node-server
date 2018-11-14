// bring express package in from node_modules
const express = require( 'express' );
//bring in quotes module
const getQuote = require( './modules/quotes.module.js' );

// create an instance of express 
const app = express( );
// set port
const PORT = 5000;

app.use( express.static( 'server/public' ) );

// setup basic route
app.get( '/quote', function( req, res ){
    res.send( getQuote( ) )
})

// start up server on port
app.listen( PORT, function( ){
    console.log( `server is listening on PORT ${PORT}` );
})