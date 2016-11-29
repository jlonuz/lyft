//Aquí validaré el código LAB
$("#try").hide();

$("#validarCodigo").on('click',function(ev){
	ev.preventDefault();
	var validarLab = window.localStorage.getItem('labRandom');
	var inputUsuario = $("#lab1").val() + $("#lab2").val() + $("#lab3").val();

	if(validarLab == inputUsuario){
		location.replace("login.html");
	}else if(validarLab != inputUsuario){
		alert("Cógido inválido");
		$("#try").fadeIn(800);

		
	}

})

//aquí valido formilarios


