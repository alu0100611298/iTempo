$(document).ready(function(){

	var time = new Date();
	var dia = time.getDate();
	var mes = time.getMonth() + 1;
	var año = time.getFullYear();
	var hora = time.getHours();
	for (i = hora; i < 25; i++) { 
	    $("#date").append("<li>" + dia + "/" + mes + "/" + año + "/" + i + "</li>");
	    //$("#date").append("<img src='imagenes/" + dia + "/" + mes + "/" + año + "/" + i + ".jpg' alt=''>");
	    //<img src="imagenes/13/2/2015/1.jpg" alt="">
	    $('#date').listview('refresh');
	}

});