$(function() {

    //crea la funcion que obtenga la fecha y la despliegue en el parrafo
    function mostrarFechaActualizableJquery() {
        let fecha = new Date();
        $('#fecha').text('Hola hoy es ' + fecha);
    }

    //invocamos a la función...
    mostrarFechaActualizableJquery();

    //Para que la fecha se actualice
    setInterval(mostrarFechaActualizableJquery,1000);

});

$(function() {



    $('#button01').on('click',function() {
        $('#ampolleta').prop('src','assets/img/pic_bulbon.gif').prop('alt','Luz encendida');
    });

    $('#button02').on('click',function() {
        $('#ampolleta').prop('src','assets/img/pic_bulboff.gif').prop('alt','Luz apagada');
    });

    $('#parrafo01').on({
        'mouseover':function(){
            $(this).removeClass('text-dark').addClass('text-danger');
        },
        'mouseout':function(){
            $(this).addClass('text-dark').removeClass('text-danger');
        }
    });

    $('#parrafo02').on('click',function(){
        $(this).toggleClass('bg-dark text-white');
    });

    $('#button03').on('click', function() {
        $('#listado-frameworks').toggle(2000);
    });
    $('#button04').on('click', function() {
        $('#listado-frameworks').show(2000);
    });
    $('#button05').on('click', function(){
        $('#Li-dinamico').toggle(2000);
    })
  
$("#button03").click(function(){
            $(this).text($(this).text() == 'Cerrar Lista' ? 'Abrir Lista' : 'Cerrar Lista');
})
        });