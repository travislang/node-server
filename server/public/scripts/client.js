$( document ).ready( readyNow );

function readyNow( ){
    console.log( 'jquery is ready' );
    
    // click listeners

    // call our server
    // get a quote
    $.ajax( {
        method: 'GET',
        url: '/quote',
    } ).then( function( res ){
        // append to DOM
        $( '#target' ).append( `<p>${res}</p>`)

    } )
}