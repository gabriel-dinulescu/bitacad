jQuery(document).ready( function(){

    setevents();

});

function setevents() {

    jQuery('#test').click( function(e){
        e.preventDefault();
        console.log('test');
    });
}