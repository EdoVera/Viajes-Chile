$(function () {
    // Cambiar el navbar de transparente a color 
    $(window).scroll(function () {
      if ($(this).scrollTop() > 940) {
        $('#navHome').addClass("fondo-nav");
      } else {
        $('#navHome').removeClass("fondo-nav");
      }
    });
    // Activa los tooltip en los iconos de redes sociales
    $('[data-toggle="tooltip"]').tooltip()
  });



 