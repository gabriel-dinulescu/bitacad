
  function calculeaza() {
    var x_val = document.getElementById('x').value;
    var y_val = document.getElementById('y').value;
    var operatie_val = document.getElementById('operatie').value;


if (isNaN(x_val) || isNaN(y_val)){
    alert('Valorile introduse trebuie sa fie de tip numeric!');

    return false;
}

    if(operatie_val === 'adunare'){
      var rezultat = Number(x_val) + Number(y_val);
      var operator = ' + ';
    }
    else if (operatie_val === 'scadere') {
      var rezultat = Number(x_val) - Number(y_val);
      var operator = ' - ';
    }
	else if (operatie_val === 'inmultire') {
	  var rezultat = Number(x_val) * Number(y_val);
	  var operator = ' * ';
	}
	else if (operatie_val === 'impartire') {
	  if(Number(y_val) === 0){
		  var rezultat = '&infin;';
	  }
	  else{
		  var rezultat = Number(x_val) / Number(y_val) +' Rest:'+ Number(x_val) % Number(y_val);
	  }
	  var operator = ' / ';
	}

    var output = '<p>' + x_val + operator + y_val +' = '+ rezultat +'</p>';

    console.log(output);
    document.getElementById('rezultate').innerHTML += output;

    document.getElementById('x').value = '';
    document.getElementById('y').value = '';


  }
