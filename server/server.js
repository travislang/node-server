// bring express package in from node_modules
const express = require( 'express' );

// create an instance of express 
const app = express( );
// set port
const PORT = 5000;



// start up server on port
app.listen( PORT, function( ){
    console.log( `server is listening on PORT ${PORT}` );
    
})