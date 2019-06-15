//aceleasi reguli de selectie utilizate in CSS, selectii din DOM
//input[type='test']{}
var a = document.getElementById('lista');

var b = jQuery('#lista'); 

console.log(a);

console.log(b); 

var c = jQuery('a');

jQuery('a').click(function(e){

    e.preventDefault ();

    // jQuery('#lista li:nth-child(2) ul').slideToggle();

        // jQuery('#lista > li:first-child').text('<b>valoare noua</b>');
        // jQuery('#lista > li:first-child').

        // jQuery('a').attr('href', 'google.ro');

        jQuery('#lista > li:nth-child(2)').next().css('color', 'green');
});


// html(), text(), val(), attr()
//nth-child(2)