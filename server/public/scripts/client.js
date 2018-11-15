$( document ).ready( readyNow );

function readyNow( ){
    console.log( 'jquery is ready' );
    
    // click listeners
    $( '#getQuote' ).on( 'click', handleClick );
    $( '#addQuote' ).on( 'click', addQuote );

    // call our server
    // get a quote
    getQuote( );
}

function handleClick( ){
    getQuote( );
}

function getQuote( ){
    $.ajax({
        method: 'GET',
        url: '/quote',
    }).then(function (res) {
        // append to DOM
        $('#target').empty( );
        $('#target').append(`<p>${res}</p>`)
    })
}

function addQuote( ){
    let objectToSend = {
        quote: $( '#quoteIn' ).val( )
    };
    $.ajax({
        method: 'POST',
        url: '/quote',
        data: objectToSend
    }).then( function( res ) {
        $('#quoteIn').val('');
    })
}