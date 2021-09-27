$(document).ready(function () {
    //안내창
    let modal = $('.modal');
    let modal_box = $('.modal-box');
    let modal_close = $('.madal-close');

    modal.click(function () {
        $(this).fadeOut();
    });


  $(".about-sidiz").click(function () {
    $("#about-sidiz").toggle();
    $("#products").hide();
    $("#support").hide();
  });

  $(".products").click(function () {
    $("#about-sidiz").hide();
    $("#products").toggle();
    $("#support").hide();
  });

  $(".support").click(function () {
    $("#about-sidiz").hide();
    $("#products").hide();
    $("#support").toggle();
  });

  $(".about-sidiz").mouseenter(function () {
    $("#about-sidiz").toggle();
    $("#products").hide();
    $("#support").hide();
  });
  $(".products").mouseenter(function () {
    $("#about-sidiz").hide();
    $("#products").toggle();
    $("#support").hide();
  });
  $(".support").mouseenter(function () {
    $("#about-sidiz").hide();
    $("#products").hide();
    $("#support").toggle();
  });
});
