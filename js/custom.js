var enlace = document.getElementById("wsp");
var enlace3 = document.getElementById("wsp_3");
var imagen3 = document.querySelector(".img_wsp_3");
var imagen = document.querySelector(".img_wsp");
var enlace4 = document.getElementById("wsp_4");
var imagen4 = document.querySelector(".img_wsp_4");

var nuevaImagenSrc = "images/wsp_orange.svg"; // Reemplaza con la URL de tu nueva imagen.

// Maneja el evento hover.
enlace.addEventListener("mouseover", function () {
  // Cambia la imagen cuando el mouse está sobre el enlace.
  imagen.src = nuevaImagenSrc;
});
enlace.addEventListener("mouseout", function () {
  // Restablece la imagen cuando el mouse sale del enlace.
  imagen.src = "images/wsp.svg";
});

enlace3.addEventListener("mouseover", function () {
  // Cambia la imagen cuando el mouse está sobre el enlace.
  imagen3.src = nuevaImagenSrc;
});

enlace3.addEventListener("mouseout", function () {
  // Restablece la imagen cuando el mouse sale del enlace.
  imagen3.src = "images/wsp.svg";
});

var enlace2 = document.getElementById("wsp_2");
var imagen2 = document.querySelector(".img_wsp_2");

var nuevaImagenSrc2 = "images/wsp_blue.svg"; // Reemplaza con la URL de tu nueva imagen.

// Maneja el evento hover.
enlace2.addEventListener("mouseover", function () {
  // Cambia la imagen cuando el mouse está sobre el enlace.
  imagen2.src = nuevaImagenSrc2;
});

enlace2.addEventListener("mouseout", function () {
  // Restablece la imagen cuando el mouse sale del enlace.
  imagen2.src = "images/wsp.svg";
});

enlace4.addEventListener("mouseover", function () {
  // Cambia la imagen cuando el mouse está sobre el enlace.
  imagen4.src = nuevaImagenSrc2;
});

enlace4.addEventListener("mouseout", function () {
  // Restablece la imagen cuando el mouse sale del enlace.
  imagen4.src = "images/wsp.svg";
});
// Get Current Year
function getCurrentYear() {
  var d = new Date();
  var year = d.getFullYear();
  document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear();

//client section owl carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
    '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>',
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

/** google_map js **/

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
