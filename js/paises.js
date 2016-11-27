// Creo mi arreglo de objetos para luego iterar sobre el y determinar 
// el país seleccionado
$('.pais-item a').on('click',function(ev){

	var nombre = $(this).find('span').html();

	window.localStorage.setItem('nombre-pais',nombre);

});

