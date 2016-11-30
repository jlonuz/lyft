//Aquí validaré el código LAB
$("#try").hide();

$("#validarCodigo").on('click',function(ev){
	ev.preventDefault();
	var validarLab = window.localStorage.getItem('labRandom');
	var inputUsuario = $("#lab1").val() + $("#lab2").val() + $("#lab3").val();

	$(".lab").focus();
	

	if(validarLab == inputUsuario){
		location.replace("login.html");
	}else if(validarLab != inputUsuario){
		alert("Cógido inválido");
		$("#try").fadeIn(800);

		
	}

});

//aquí valido formulario nombre y mail

$("#btn-login").on('click', function(ev){
	ev.preventDefault();

	var nombre = $("#name").val(); 
	var apellido = $("#lastname ").val();
	var email = $("#email").val();

	//campo obligatorio
	if( nombre == "" || apellido == "" || /^\s+$/.test(nombre) || /^\s+$/.test(apellido)) {
		alert("Campo obligatorio");
		return;
	}
	//sólo letras
	if (/[0-9]/.test(nombre) || /[0-9]/.test(apellido)) {
  	 	alert("Sólo se admiten letras");
  	 	return;
	}
		//primera letra mayúscula

	if (nombre.charAt(0) != nombre.charAt(0).toUpperCase() || apellido.charAt(0) != apellido.charAt(0).toUpperCase()) {
		alert("Primera letra debe ser mayúscula");
		return;
	}
	
	if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
       		
       	alert("Por favor ingresa un Email válido");
       	return;
    }
    	

	location="maps.html";


})


