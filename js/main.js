$('.cuenta-regresiva').countdown('2022/02/01 00:00:00', function(event) {
    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));
});