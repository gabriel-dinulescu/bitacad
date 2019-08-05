//array global cu persoane de contact
var lista=[
    {
        nume:"Ion",
        prenume:"Gheorghe",
        varsta:24,
        telefon:"075000000"
    },
    {
        nume:"Trita",
        prenume:"Fanita",
        varsta:60,
        telefon:"075000001"
    },
    {
        nume:"Suie",
        prenume:"Paparude",
        varsta:7,
        telefon:"075000002"
    },
    {
        nume:"Britney",
        prenume:"Spears",
        varsta:35,
        telefon:"075000003"
    }
];

//o variabila globala in care sa tin minte pentru ce rand editez, in care contrar ia valoare -1
var idxEditare = -1;
// console.log(idxEditare);

function sorteazaPrenume(){
    //functie de sort ce primeste 2 elemente 
    lista.sort(function(a,b){
        if(a.prenume>b.prenume){
            return 1;
        } else if(a.prenume<b.prenume){
            return -1;
        } else{
            return 0;
        }
    });
    //apelez draw dupa fiecare sortare
    draw();
}
//Sorteaza Nume
function sorteazaNume(){
    lista.sort(function(a,b){
        if(a.nume>b.nume){
            return 1;
        } else if(a.nume<b.nume){
            return -1;
        } else{
            return 0;
        }
    });
    //apelez draw dupa fiecare sortare
    draw();
}
function sorteazaVarsta(){
    //pentru ca varsta este numeric, pot sa scad cele doua varste pentru a obtine sortare
    lista.sort(function(a,b){
        return a.varsta-b.varsta;
    });
    //apelez draw dupa fiecare sortare
    draw();
}

//functia care imi actualizeaza interfata(tabelul) ori de cate ori se actulizeaza sau sorteaza
function draw(){
    var str = "";
			for(var i=0;i<lista.length;i++){
					str+=`<tr>
						<td>${lista[i].nume}</td>
						<td>${lista[i].prenume}</td>
						<td>${lista[i].varsta}</td>
						<td>${lista[i].telefon}</td>
						<td>
							<input class="del" type="button" value="Del" onclick="sterge(${i});" />
							<input class="edit" type="button" value="Edit" onclick="editeaza(${i});" />
						</td>
					</tr>`;
			}
			// console.log(str);
			document.querySelector("#tabel tbody").innerHTML = str;
}

function sterge(idx){
    if(confirm(`Esti sigur ca vrei sa stergi inregistrarea ${lista[idx].nume} ?`)){
        lista.splice(idx,1);
        draw();
    }
}

function editeaza(idx){
    //salvez indexul elementului din lista in variabila globala 
    //ca sa stiu daca trebuie sa adaug la sfarsit sau sa modific
    window.idxEditare = idx;
    
    //preiau elementul din lista
    var obj = lista[idx];
    
    //preiau referinta catre formular
    var form = document.querySelector("#add-form");
    
    //populez formularul cu ce contine persoana mea
    form.querySelector("[name='nume']").value = obj.nume;
    form.querySelector("[name='prenume']").value =obj.prenume;
    form.querySelector("[name='telefon']").value = obj.telefon;
    form.querySelector("[name='varsta']").value =obj.varsta;
    console.log('id selectat este '+idxEditare);
}

function adauga(form,event){
    //prevenim reincarcarea paginii
    event.preventDefault();
    
    //preiau info din formular
    var obj = {
    };
    obj.nume = form.querySelector("[name='nume']").value;
    obj.prenume = form.querySelector("[name='prenume']").value;
    obj.telefon = form.querySelector("[name='telefon']").value;
    obj.varsta = form.querySelector("[name='varsta']").value;
    
    //daca index editare e -1 inseamna ca nu editez nimic, ci adaug ceva nou (la sfarsit)
    if(idxEditare===-1){
        //cand este idxEditare -1 atunci inseamna ca adaug
        lista.push(obj);
    }else{
        //cand este idxEditare diferit de -1 atunci inseamna ca editez pozitia idxEditare
        lista[idxEditare] = obj;
        //resetam idxEditare in -1 pentru ca am terminat cu editarea
        idxEditare = -1;
    }
    form.reset();
    draw();
}

//buton de resetare formular si atribuim -1 la idxEditare
function reset(idx){
    //resetam campurile formularului
    document.querySelector("#add-form").reset();
    //atribuim valoarea -1 la idxEditare
    window.idxEditare = idx;
    //console.log ptr a avea daca s-a resetat
    console.log('a fost resetat id la '+idxEditare);
    
}