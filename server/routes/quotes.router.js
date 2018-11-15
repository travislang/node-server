const express = require( 'express' );
const router = express.Router( ); // this makes a router only --- not a full app
const quoteHandler = require('../modules/quotes.module.js');

router.get('/', function (req, res) {
    res.send(quoteHandler.getQuoteNow());
})

router.post('/', function (req, res) {
    console.log('POST hit:', req.body);
    res.send(quoteHandler.addQuoteNow(req.body.quote));
})

module.exports = router;