(function() {
    setInterval(function mostrarHora(){
        var horaActual = new Date();
        hora = horaActual.getHours();
        if (hora < 10) hora = "0" + hora;
        minutos = horaActual.getMinutes();
        if (minutos < 10) minutos = "0" + minutos;
        segundos = horaActual.getSeconds();
        if (segundos < 10) segundos = "0" + segundos;
        
        $("#horaActual").text(hora + ":" + minutos + ":" + segundos);
    }, 1000);

    $(document).ready(function(){
        $("#busqueda").on("palabra", function() {
            var value = $(this).val().toLowerCase();
            $("datosTabla").filter(function(){
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            })
        });
    });
    
    //$("segmento").blur(function() {
      //  if($(this).val() == ''){
        //    $("#oculto").css("display", "none");
        //}
    //});

    function mostrarOcultos() {
        $("#enviar").click(function(){
            if($("#segmento").val().length < 1) {
                $("#oculto").show();
            }
        });
    }
    
    window.onload = function (){
        //$("#oculto").css("display", "none");
        //$("#otroOculto").css("display", "none");
        mostrarHora();
        mostrarOcultos();
    }
})();