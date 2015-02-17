$(document).ready(function(){
	var time = new Date();
	var dia = addZero(time.getDate());
	var mes = addZero(time.getMonth() + 1);
	var año = time.getFullYear();
	var hora = addZero(time.getHours());
	//hora = 0;
	$("#points").attr("value", hora);
	$("#points").attr("min", hora);
	hora = addZero(hora);
	$("#hora").text("Hora: " + hora + ":00");
	$("#image").attr("src", "http://www.aemet.es/imagenes_d/eltiempo/observacion/satelite/" + año + "" + mes + "" + dia + "" + hora + "00_s93g.gif");
	$("#point").change(function(){
		var valor = $("#points").val();
		var day = dia;
		if (valor > 23) {
	        valor = valor - 24;
	        day = dia + 1;
	    }
		valor = addZero(valor);
		$("#hora").text("Hora: " + valor + ":00");
	    $("#image").attr("src", "http://www.aemet.es/imagenes_d/eltiempo/observacion/satelite/" + año + "" + mes + "" + day + "" + valor + "00_s93g.gif");
	});
});

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
