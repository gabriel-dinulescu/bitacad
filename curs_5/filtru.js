
document.getElementById('filtreaza').onclick = function(ev) {
	
	ev.preventDefault();
	filtrare();
	
	
};
document.getElementById('marca').onclick = function() {
	
	filtrare();
	
};
document.getElementById('culoare').onclick = function() {
	
	filtrare();
	
};
document.getElementById('an').onclick = function() {
	
	filtrare();
	
};

function filtrare() {
	
	//preluam valorile din selectoare
	
	var marca_s = document.getElementById('marca').value;
	var culoare_s = document.getElementById('culoare').value;
	var an_s = document.getElementById('an').value;
	
	console.log(marca_s, culoare_s, an_s);
	//pornim o bucla prin div-urile de continut
	var content_elements = document.getElementById('content').getElementsByTagName('div');
	nr_rezultate = 0;
	
	for (i=0; i < content_elements.length; i++) {
		
		var masina_el = content_elements[i];
		
		//filtrarea efectiva
		
		var masina_marca = masina_el.getAttribute('data-marca');
		var masina_culoare = masina_el.getAttribute('data-culoare');
		var masina_an = masina_el.getAttribute('data-an');
		 
		var marca_cond = (marca_s != 'all' && masina_marca != marca_s);
		var culoare_cond = (culoare_s != 'all' && masina_culoare != culoare_s);
		var an_cond = (an_s != 'all' && masina_an != an_s);
		
		if(marca_cond || culoare_cond || an_cond){ 

			masina_el.style.display = 'none';
	
		}
		else{
		
			masina_el.style.display = 'block';
			nr_rezultate++;
		
		}
		
	}
	
	var error_el = document.getElementById('error');
	
	if (nr_rezultate == 0)
	{
		error_el.style.display = 'block';
	}
	else {
		error_el.style.display = 'none';
	}
	
}