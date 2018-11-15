const express = require('express');
const router = express.Router();


// ROUTES ESTABLISHED
router.get( '/', function( req, res ){
    res.send(`The wren
    Earns his living
    Noiselessly.` );
} )



// EXPORT
module.exports = router;