function formatearFecha(fecha){
    var fecha = new Date(fecha);
    var dia = fecha.getDate();
    var mes = fecha.getMonth()+1;
    var anio = fecha.getFullYear();
    var fechaFormateada = anio + "-" + mes + "-" + dia;
    return fechaFormateada;
}

