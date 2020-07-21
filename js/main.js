var mainContent = $("#main");
var ImgGallery;
$("img").hide().fadeIn(3000);

function clear() {
  mainContent.empty();
}

$("a").click(function (event) {
  $("a").css("color", "#ff3399");
  $("a").css("font-family", "Montserrat");
  $(event.target).css("color", "#990070");
});

var count = 1;
function transition() {
  if (count == 1) {
    $(".item3").css({
      transition: "2s ease-in-out",
      "background-image": `url("img/gallery/ceramica/1.jpg")`,
    });
    count = 2;
  } else if (count == 2) {
    $(".item3").css({
      transition: "2s ease-in-out",
      "background-image": `url("img/gallery/ceramica/2.jpg")`,
    });
    count = 3;
  } else if (count == 3) {
    $(".item3").css({
      transition: "2s ease-in-out",
      "background-image": `url("img/gallery/ceramica/3.jpg")`,
    });
    count = 1;
  }
}
setInterval(transition, 6000);

function hideMobileNav() {
  var x = document.getElementById("navbar");
  if (x.className === "mainNav") {
    x.className += " responsive";
  } else {
    x.className = "mainNav";
  }
}

function removeVideoGrid() {
  if (mainContent.hasClass("inclusiveGrid")) {
    mainContent.removeClass("inclusiveGrid");
  }
}

$(".mainNav > ul")
  .children()
  .click(function (event) {
    var category = event.target.id;
    var galleryLenght;
    var row;
    var col;
    var title = "";
    var text = "";
    if (category != "") {
      $(document).ready(function () {
        $("body,html").animate(
          {
            scrollTop: mainContent.offset().top - 50,
          },
          1500 //speed
        );
      });
    }
    switch (category) {
      case "ceramic":
        category = "ceramica";
        galleryLenght = 34;
        row = 7;
        col = 5;
        break;
      case "water":
        category = "suminagashiebru";
        galleryLenght = 24;
        row = 5;
        col = 5;
        title = "Suminagashi y Ebru";
        text =
          "<p>Pintar sobre el agua es una técnica muy antigua que se remonta a japón en el siglo XII, ellos la denominan Suminagashi “tinta que flota sobre el agua”, depositaban mediante un pincel la tinta sumi-e sobre la superficie quieta del agua, creándose sugerentes formas que se recogían posando sobre ella un papel. Más tarde en Turquía llamaron Ebru “nube” al mismo procedimiento pero sobre agua más densa y en lugar de tinta, usaron pintura de colores.</p>" +
          "<p>Durante la ejecución se aumenta el nivel de concentración, a permanecer en el aquí y ahora, por tanto el alma se calma y entra en estado de flow, las imágenes resultantes hacen despertar la imaginación.</p>" +
          "<p>En algunos de estos trabajos se ha experimentado con intervención digital, partiendo de las imágenes recogidas del agua.</p>";
        break;
      case "paper":
        category = "papelycarton";
        galleryLenght = 32;
        row = 7;
        col = 5;
        break;
      case "flowdraws":
        category = "otros\\flowdraws";
        galleryLenght = 14;
        row = 5;
        col = 5;
        break;
      case "ilustraciones":
        category = "otros\\ilustraciones";
        galleryLenght = 9;
        row = 5;
        col = 5;
        break;
      case "logos":
        category = "otros\\logotipos";
        galleryLenght = 6;
        row = 2;
        col = 5;
        break;
      case "relieve":
        category = "otros\\relieves";
        galleryLenght = 4;
        row = 2;
        col = 5;
        break;
      case "about":
        removeVideoGrid();
        hideMobileNav();
        clear();
        if (mainContent.hasClass("inclusiveGrid")) {
          mainContent.removeClass("inclusiveGrid");
        }
        var text = $(
          "<div class='aboutText'><p>Acerca de mí podría decir que exploro caminos para volver a casa, y que he decidido con esta web reunir en un mismo espacio, algunas de mis experiencias, ellas mismas se han ido transformando, incluso lo harán ante tu propia mirada, por tanto la casa que busco también se transforma a cada paso que doy, la casa soy yo.</p>" +
            "<p>Me he formado como Diseñadora Industrial y Técnico Superior en Artes Plásticas y Diseño en la especialidad de Cerámica Artística. Durante muchos años trabajé fundamentalmente en el ámbito del Diseño Interior, esto me permitió desarrollar habilidades para proyectar y ofrecer soluciones creativas, ademas  de otras comunicativas, organizativas y de gestión.</p>" +
            "<p>A partir de 2009, comencé a explorar mi parte más artística, indagando en el campo de las artes gráficas. Durante 4 años tuve la oportunidad de trabajar  el Centro municipal de Arte gráfico de Santa Cruz de Tenerife, allí adquirí conocimientos acerca del grabado tradicional y  pude contribuir a fomentar el aprendizaje de este oficio en la comunidad, mediante la coordinación de diferentes actividades con distintos colectivos y profesionales de las artes gráficas.</p>" +
            "<p>Gracias a estas acciones entré en contacto con el colectivo de personas con diversidad funcional, para los que diseñe talleres adaptados de grabado, entonces me di cuenta de lo mucho que me gustaba explorar sobre cómo adaptar diferentes técnicas artísticas a sus capacidades, de esta manera podía enfocar mi creatividad de una forma diferente y aportar sentido a mis valores personales.</p>" +
            "<p>A partir de entonces  me he dedicado a realizar y ejecutar proyectos de arte inclusivo donde he interactuado con colectivos diversos, usando técnicas artísticas accesibles para todos y la expresión artística como agente de conexión y transformación.</p>" +
            "<p>Actualmente sigo explorando caminos, el más reciente es el de la cerámica artística, a través de ella pretendo contribuir a la divulgación y desarrollo de procesos creativos más acordes con los principios de sostenibilidad, y por supuesto seguir aportando mi granito de arena por la inclusión y respeto a la diversidad.</p>"
        );
        mainContent.append(text);
        break;
      case "inclusive":
        hideMobileNav();
        clear();
        mainContent.addClass("inclusiveGrid");
        clear();
        var video1 = $(
          "<video id='video1' controls='true' src='img/gallery/arteinclusivo/PROYECTOPINTANDOSOBREELAGUA/PINTANDOSOBRE.mp4'>"
        );
        var video2 = $(
          "<video id='video2' controls='true' src='img/gallery/arteinclusivo/PROYECTOPINTANDOSOBREELAGUA/exposicionpintando.mp4'>"
        );
        var video3 = $(
          "<video id='video3' controls='true' src='img/gallery/arteinclusivo/AULASENCLAVE/AULASENCLAVE.mp4'>"
        );
        var video4 = $(
          "<video id='video4' controls='true' src='img/gallery/arteinclusivo/PROYECTOGIROARTEITINERANTE/giroarteitinerant.mp4'>"
        );
        var text1 = $(
          "<div id='textVideo1'><h1>Pintando Sobre el Agua</h1><p>Proyecto realizado para los alumnos del Taller de Artes Plásticas Giro-Arte, el taller está dirigido al colectivo de personas con discapacidad intelectual y tiene el objetivo de promover el desarrollo integral del alumnado, impulsando sus capacidades creativas y facilitando el acceso a la cultura y el arte como medio de expresión e inclusión social, poniendo en valor sus capacidades y promoviendo su rol activo en la sociedad</p>" +
            "<p>Con este proyecto experimentamos las posibilidades expresivas que tienen las técnicas del Suminagashi y el Ebru, además de aportar a los participantes beneficios personales tales como</p>" +
            "<ul style='margin-left: 5%;'><li>Aprendizaje por la relación causa y efecto.</li><li>Implicación positiva de la persona aun cuando comience con un estado de apatía</li><li>Aumento de la concentración y la relajación.</li><li>Desarrollo de la paciencia.</li><li>Mejora de la coordinación óculo-manual.</li><li>Control de los movimientos del cuerpo y la movilidad.</li><li>Estimulación de asociaciones libres simbólicas que promueven a la reflexión.</li></ul>"
        );
        var text2 = $(
          "<div id='textVideo2'><p><b>“Pintando sobre el agua”</b> contó con la participación de 24 personas, consiguiendo excelentes resultados tanto a nivel expresivo como en su desarrollo personal, las obras ejecutadas durante el proyecto se expusieron en el museo de historia y antropología de Tenerife</p>"
        );
        var text3 = $(
          "<div id='textVideo3'><h1>Aulas Enclave</h1><p>Talleres de grabado y estampación, adaptados para alumnos con diversidad funcional provenientes de aulas enclave de diferentes institutos de Tenerife. Estos talleres fueron desarrollados en las instalaciones del  Centro municipal de Arte Gráfico de Santa Cruz de Tenerife. En la sala de exposiciones de este centro se realizó una exposición titulada “Sin Etiqueta”, que contó con una selección de trabajos ejecutados en estos talleres.</p>"
        );
        var text4 = $(
          "<div id='textVideo4'><h1>Giro Arte Itinerante</h1><p>En 2018, con motivo de su 25 aniversario, la empresa Sinpromi diseñó un programa de actividades desde todas su áreas, y en el ámbito cultural llevaron a cabo el proyecto Giro-Arte itinerante “Arte Inclusivo”, cuyo objetivo principal era promover la normalización e inclusión social del colectivo de personas con discapacidad intelectual, dándoles visibilidad y voz, impartiendo talleres artísticos itinerantes, donde los alumnos del Taller Giro-Arte ejercieron de monitores bajo la dirección de un formador.</p>" +
            "<p>Estos talleres se dirigieron a personas de diversos colectivos, sexo, edad y condición social. Las técnicas escogidas fueron el Suminagashi y Ebru, en las que los alumnos tenían experiencia por el proyecto “Pintando sobre el agua”, y la empresa contó conmigo para realizar con ellos estos talleres itinerantes.</p>" +
            "<p>Esta interacción inclusiva tuvo una repercusión muy positiva tanto para quienes la recibieron, como para los que impartimos, se compartieron conocimientos, experiencias y realidades de cada colectivo, facilitandose el acercamiento, empatía y comunicación entre todos. Los Alumnos mejoraron su autoconcepto y motivación, y han adquirido conciencia de que las personas con diversidad funcional pueden asumir el compromiso de ayudar y aportar valores a la sociedad. El leit motiv que nos acompañó fue “Sumamos Capacidades”, todos las tenemos y debemos hacerlas visibles, así como también saber reconocer nuestros límites y siempre respetar los de los demás.</p>" +
            "<p>En 2018 se realizaron 48 talleres, que alcanzaron a 858 personas en diferentes zonas de la isla de Tenerife. Debido a la buena acogida  se realizó una nueva edición en 2019, esta vez con un alcance de 906 personas en 50 talleres.</p>"
        );
        mainContent
          .append(video1)
          .append(text1)
          .append(video2)
          .append(text2)
          .append(video3)
          .append(text3)
          .append(video4)
          .append(text4);
        break;
      case "contact":
        removeVideoGrid();
        hideMobileNav();
        clear();
        var info = $("<div id='info'></div>");
        var fullName = $("<p id='fullName'>Marlene Orán Pérez</p>");
        var email = $("<p id='email'>marlene.oran@gmail.com</p>");
        var phone = $("<p id='phone'>+34 660045303</p>");
        var based = $("<p id='based'>Tenerife / Islas Canarias (Spain)</p>");

        mainContent.append(
          info.append(fullName).append(email).append(phone).append(based)
        );
    }
    if (
      category != "about" &&
      category != "inclusive" &&
      category != "contact" &&
      category != ""
    ) {
      hideMobileNav();
      removeVideoGrid();
      clear();
      loadImages(galleryLenght, category, title, text);
      document.documentElement.style.setProperty("--rowNum", row);
      document.documentElement.style.setProperty("--colNum", col);
    }
  });

function loadImages(max, galleryType, title, text) {
  if (title != "" && text != "") {
    var galleryTitle = $(
      `<div class="galleryTitle"><h1 class="mainTitle">${title}</h1><p class="galleryInfo">${text}</p></div>`
    );
    mainContent.append(galleryTitle);
  }

  var galleryCheck = galleryType;
  if (galleryType.includes("otros\\")) {
    galleryCheck = "otros";
  }
  for (var i = 0; i <= max + 1; i++) {
    var colorBox = $(
      `<a class="${galleryCheck}Gallery" href="img/gallery/${galleryType}/${i}.jpg">`
    );
    var image = $(
      `<img class="galleryImage" src="img/gallery/${galleryType}/${i}.jpg" alt="${galleryCheck}${i}" loading="lazy" width="100px" height="100px">`
    );
    colorBox.append(image);
    var cboxOptions = {
      rel: `${galleryCheck}Gallery`,
      maxWidth: "80%",
      maxHeight: "80%",
      current: false,
      scrolling: false,
      scalePhotos: true,
      reposition: true,
    };
    $(`.${galleryCheck}Gallery`).colorbox(cboxOptions);
    mainContent.append(colorBox.hide().fadeIn(500));
  }
  mainContent.children().last().remove();
}

var resizeTimer;
function resizeColorBox() {
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    if (jQuery("#cboxOverlay").is(":visible")) {
      jQuery.colorbox.resize();
    }
  }, 300);
}
// Resize Colorbox when resizing window or changing mobile device orientation
jQuery(window).resize(resizeColorBox);
window.addEventListener("orientationchange", resizeColorBox, false);

//prevent scrolling
$(document)
  .bind("cbox_open", function () {
    $("body").css({ overflow: "hidden" });
  })
  .bind("cbox_closed", function () {
    $("body").css({ overflow: "auto" });
  });

var mybutton = $("#goTopButton");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.css("display", "block");
  } else {
    mybutton.css("display", "none");
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.click(function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}); // For Chrome, Firefox, IE and Opera

var mobileNav = $(".icon");
mobileNav.click(function () {
  var x = document.getElementById("navbar");
  if (x.className === "mainNav") {
    x.className += " responsive";
  } else {
    x.className = "mainNav";
  }
});
