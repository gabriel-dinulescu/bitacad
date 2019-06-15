jQuery('#trimitere').click(function(e){

    e.preventDefault();
    validare();

});

function validare() {

    var formular = jQuery('#test');
    var input_fields = jQuery('#test input');
    var select_fields = jQuery('#test select');

    var error_msg = '';

    input_fields.each( function(index, el){

        var el_value = jQuery(el).val();
        var el_name = jQuery(el).attr('name');

        if (el_value.length < 5) {

            error_msg += 'Campul ' + el_name + ' trebuie sa aiba minim 5 caractere <br />';

        }

    });

    select_fields.each( function(index, el){

        var el_value = jQuery(el).val();
        var el_name = jQuery(el).attr('name');
        if (el_value != 'da') {
            error_msg  += 'Campul ' + el_name + ' trebuie sa contina valoarea "da"<br />'; 
        }
    })

    if (error_msg.length == 0) {
       
        jQuery('#error').empty();
        formular.submit();

    } else {

        jQuery('#error').html(error_msg); 

    }

}