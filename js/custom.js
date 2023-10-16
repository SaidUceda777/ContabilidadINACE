const linkElement = document.getElementById("wsp_3");
const svgElement = linkElement.querySelector("svg");

const svg1 = document.querySelector("#wsp_1");
const svg1_link = document.querySelector(".wspsvg_1");

// Agrega un controlador de eventos al elemento <a> para el mouseover
linkElement.addEventListener("mouseover", () => {
  // Cambia el relleno del <svg> a "orange" cuando el cursor se encuentra sobre el elemento <a>
  svgElement.style.fill = "#FF8A1D";
});

linkElement.addEventListener("click", () => {
  svgElement.style.fill = "#FF8A1D";
});
// Agrega un controlador de eventos al elemento <a> para el mouseout
linkElement.addEventListener("mouseout", () => {
  // Restaura el relleno original del <svg> cuando el cursor se sale del elemento <a>
  svgElement.style.fill = "white"; // O el color original
});

svg1.addEventListener("mouseover", () => {
  // Cambia el relleno del <svg> a "orange" cuando el cursor se encuentra sobre el elemento <a>
  svg1_link.style.fill = "#FF8A1D";
});

// Agrega un controlador de eventos al elemento <a> para el mouseout
svg1.addEventListener("mouseout", () => {
  // Restaura el relleno original del <svg> cuando el cursor se sale del elemento <a>
  svg1_link.style.fill = "white"; // O el color original
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
