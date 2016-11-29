var paises = [
	
	{nombre: "Chile",
	max_dig: 8,
	codigo_area: "+56 9",
	bandera:'img/paises/CL.png'
	},

	{nombre:"Estados Unidos",
	max_dig:9,
	codigo_area: "+1",
	bandera:'img/paises/US.png'
	},

	{nombre:"México",
	max_dig:10,
	codigo_area: "+52 1",
	bandera:'img/paises/MX.png'
	},

	{nombre:"Perú",
	max_dig:8,
	codigo_area: "+51 9",
	bandera:'img/paises/PE.png'
	},

	{nombre:"Argentina",
	max_dig:10,
	codigo_area: "+54 9",
	bandera:'img/paises/AR.png'
	},

	{nombre:"Canadá",
	max_dig:10,
	codigo_area: "+1",
	bandera:'img/paises/CA.png'
	}
];

var pais_elegido = window.localStorage.getItem('nombre-pais');

// Creo mi variable que guardará el valor de la iteración de mi arreglo paises
var pais_obj = null; 

for(var i = 0; i < paises.length; i++){
	if(paises[i].nombre == pais_elegido){
		pais_obj = paises[i];
		break;
	}
}

var img = $("#bandera_pais");
img.attr("src", pais_obj.bandera);


$("#codigo_area").html(pais_obj.codigo_area);	


// validar imput
// - hacer funcional el max_dig por país
// - hacer que si aprieta get muy code sin rellenar input, devuelva 
// un alert diciendo por favor ingresa tu numero de teléfono.
// - hacer el cógido random para crear el código LAB

$(document).ready(function(){


$("#get-code").on('click',function(ev){
	ev.preventDefault();
	// recuperar el celular ingresado por el usuario
	var validar_cel = $("#phone").val();
	// verificar que tenga digitos igual al pais_obj.max_dig
	if(validar_cel.length == pais_obj.max_dig){
		window.localStorage.setItem("labRandom", Math.round(Math.random()*900)+99);
		$("#mostrarCodigo").html("LAB - " + window.localStorage.getItem("labRandom"));
	
	// caso numero de digitos diferente a max_dig, le avisamos al usuario que celular es incorrecto
	}else{
		alert("Ingresa un número de celular válido");
	}

window.localStorage.setItem('codigoCel', validar_cel);
})

//Aqui va código que hace aparecer el botón next
// para ir a verificar mi código LAB
$("#mostrarNext").hide();
$("#get-code").on('click',function(){
	var validar_cel = $("#phone").val();

	if(validar_cel.length != pais_obj.max_dig){
		return;	
	}
	$("#mostrarNext").fadeIn(800);
})

})










