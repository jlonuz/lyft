var paises = [
	
	{nombre: "Chile",
	max_dig: 8,
	codigo_area: "+56 9",
	bandera:'img/paises/CL.png'
	},

	{nombre:"Estados Unidos",
	max_dig:8,
	codigo_area: "+1",
	bandera:'img/paises/US.png'
	},

	{nombre:"México",
	max_dig:8,
	codigo_area: "+76 5",
	bandera:'img/paises/MX.png'
	},

	{nombre:"Perú",
	max_dig:8,
	codigo_area: "+51 9",
	bandera:'img/paises/PE.png'
	},

	{nombre:"Argentina",
	max_dig:8,
	codigo_area: "+54 9",
	bandera:'img/paises/AR.png'
	},

	{nombre:"Canadá",
	max_dig:8,
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


$("#codigo_area").val(pais_obj.codigo_area);	







