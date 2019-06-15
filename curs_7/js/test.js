jQuery(document).ready( function(){

    setevents();

});

function setevents() {

    jQuery('#test').click( function(e){
        e.preventDefault();
        setcontent();
    });
}

function  setcontent() {

    jQuery.ajax({

        type: 'GET',
        url: 'http://localhost/curs_javascript/curs_7/test.php',
        data: {param1: 'test1', param2: 'test2'},

        success: function(response) {

            var output = '<p>' + response + '</p>';
            
            jQuery('#content').append(output);
        }
    })

}