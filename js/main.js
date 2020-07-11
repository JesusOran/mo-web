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

//refactorización pendiente

$(".mainNav > ul")
  .children()
  .click(function (event) {
    var category = event.target.id;
    console.log(category);
    var galleryLenght;
    var row;
    var col;
    var title = "";
    var text = "";
    if (category != ""){
      $("#main").removeClass("homePageGrid");
    }
    function hideMobileNav() {
      var x = document.getElementById("navbar");
      if (x.className === "mainNav") {
        x.className += " responsive";
      } else {
        x.className = "mainNav";
      }
      window.scrollTo(400, 150);
    }
    switch (category) {
      case "ceramic":
        hideMobileNav();
        category = "ceramica";
        galleryLenght = 33;
        row = 7;
        col = 5;
        break;
      case "water":
        hideMobileNav();
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
        hideMobileNav();
        category = "papelycarton";
        galleryLenght = 33;
        row = 7;
        col = 5;
        break;
      case "flowdraws":
        hideMobileNav();
        category = "otros\\flowdraws";
        galleryLenght = 14;
        row = 5;
        col = 5;
        title = "Flow Draws";
        text =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        break;
      case "ilustraciones":
        hideMobileNav();
        category = "otros\\ilustraciones";
        galleryLenght = 9;
        row = 5;
        col = 5;
        break;
      case "logos":
        hideMobileNav();
        category = "otros\\logotipos";
        galleryLenght = 6;
        row = 2;
        col = 5;
        break;
      case "relieve":
        hideMobileNav();
        category = "otros\\relieves";
        galleryLenght = 4;
        row = 2;
        col = 5;
        title = "Relieves";
        text =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        break;
    }
    if (category != "about" && category != "inclusive" && category != "") {
      clear();
      loadImages(galleryLenght, category, title, text);
      document.documentElement.style.setProperty("--rowNum", row);
      document.documentElement.style.setProperty("--colNum", col);
    } else if (category === "about") {
      clear();
      //var portrait = $('<img id="portrait" src="img/1.jpg">');
      var text = $(
        "<div class='aboutText'><p>Acerca de mí podría decir que exploro caminos para volver a casa, y que he decidido con esta web reunir en un mismo espacio, algunas de mis experiencias, ellas mismas se han ido transformando, incluso lo harán ante tu propia mirada, por tanto la casa que busco también se transforma a cada paso que doy, la casa soy yo.</p>" +
          "<p>Me he formado como Diseñadora Industrial y Técnico Superior en Artes Plásticas y Diseño en la especialidad de Cerámica Artística. Durante muchos años trabajé fundamentalmente en el ámbito del Diseño Interior, esto me permitió desarrollar habilidades para proyectar y ofrecer soluciones creativas, ademas  de otras comunicativas, organizativas y de gestión.</p>" +
          "<p>A partir de 2009, comencé a explorar mi parte más artística, indagando en el campo de las artes gráficas. Durante 4 años tuve la oportunidad de trabajar  el Centro municipal de Arte gráfico de Santa Cruz de Tenerife, allí adquirí conocimientos acerca del grabado tradicional y  pude contribuir a fomentar el aprendizaje de este oficio en la comunidad, mediante la coordinación de diferentes actividades con distintos colectivos y profesionales de las artes gráficas.</p>" +
          "<p>Gracias a estas acciones entré en contacto con el colectivo de personas con diversidad funcional, para los que diseñe talleres adaptados de grabado, entonces me di cuenta de lo mucho que me gustaba explorar sobre cómo adaptar diferentes técnicas artísticas a sus capacidades, de esta manera podía enfocar mi creatividad de una forma diferente y aportar sentido a mis valores personales.</p>" +
          "<p>A partir de entonces  me he dedicado a realizar y ejecutar proyectos de arte inclusivo donde he interactuado con colectivos diversos, usando técnicas artísticas accesibles para todos y la expresión artística como agente de conexión y transformación.</p>" +
          "<p>Actualmente sigo explorando caminos, el más reciente es el de la cerámica artística, a través de ella pretendo contribuir a la divulgación y desarrollo de procesos creativos más acordes con los principios de sostenibilidad, y por supuesto seguir aportando mi granito de arena por la inclusión y respeto a la diversidad.</p>"
      );
      mainContent.append(text);
    } else if (category === "inclusive") {
      mainContent.addClass("inclusiveGrid");
      clear();
      var video1 = $(
        "<video id='video1' controls='true' src='img/gallery/arteinclusivo/PROYECTOPINTANDOSOBREELAGUA/PINTANDOSOBRE.mp4'>"
      );
      var video2 = $(
        "<video id='video2' controls='true' src='img/gallery/arteinclusivo/PROYECTOPINTANDOSOBREELAGUA/pintandosobreelagua.mp4'>"
      );
      var video3 = $(
        "<video id='video3' controls='true' src='img/gallery/arteinclusivo/AULASENCLAVE/AULASENCLAVE.mp4'>"
      );
      var video4 = $(
        "<video id='video4' controls='true' src='img/gallery/arteinclusivo/PROYECTOGIROARTEITINERANTE/giroarteitinerant.mp4'>"
      );
      //var portrait = $('<img id="portrait" src="img/1.jpg">');
      var text1 = $(
        "<div id='textVideo1'><p>Acerca de mí podría decir que exploro caminos para volver a casa, y que he decidido con esta web reunir en un mismo espacio, algunas de mis experiencias, ellas mismas se han ido transformando, incluso lo harán ante tu propia mirada, por tanto la casa que busco también se transforma a cada paso que doy, la casa soy yo.</p>" +
          "<p>Me he formado como Diseñadora Industrial y Técnico Superior en Artes Plásticas y Diseño en la especialidad de Cerámica Artística. Durante muchos años trabajé fundamentalmente en el ámbito del Diseño Interior, esto me permitió desarrollar habilidades para proyectar y ofrecer soluciones creativas, ademas  de otras comunicativas, organizativas y de gestión.</p>"
      );
      var text2 = $(
        "<div id='textVideo2'><p>Acerca de mí podría decir que exploro caminos para volver a casa, y que he decidido con esta web reunir en un mismo espacio, algunas de mis experiencias, ellas mismas se han ido transformando, incluso lo harán ante tu propia mirada, por tanto la casa que busco también se transforma a cada paso que doy, la casa soy yo.</p>" +
          "<p>Me he formado como Diseñadora Industrial y Técnico Superior en Artes Plásticas y Diseño en la especialidad de Cerámica Artística. Durante muchos años trabajé fundamentalmente en el ámbito del Diseño Interior, esto me permitió desarrollar habilidades para proyectar y ofrecer soluciones creativas, ademas  de otras comunicativas, organizativas y de gestión.</p>"
      );
      var text3 = $(
        "<div id='textVideo3'><p>Acerca de mí podría decir que exploro caminos para volver a casa, y que he decidido con esta web reunir en un mismo espacio, algunas de mis experiencias, ellas mismas se han ido transformando, incluso lo harán ante tu propia mirada, por tanto la casa que busco también se transforma a cada paso que doy, la casa soy yo.</p>" +
          "<p>Me he formado como Diseñadora Industrial y Técnico Superior en Artes Plásticas y Diseño en la especialidad de Cerámica Artística. Durante muchos años trabajé fundamentalmente en el ámbito del Diseño Interior, esto me permitió desarrollar habilidades para proyectar y ofrecer soluciones creativas, ademas  de otras comunicativas, organizativas y de gestión.</p>"
      );
      var text4 = $(
        "<div id='textVideo4'><p>Acerca de mí podría decir que exploro caminos para volver a casa, y que he decidido con esta web reunir en un mismo espacio, algunas de mis experiencias, ellas mismas se han ido transformando, incluso lo harán ante tu propia mirada, por tanto la casa que busco también se transforma a cada paso que doy, la casa soy yo.</p>" +
          "<p>Me he formado como Diseñadora Industrial y Técnico Superior en Artes Plásticas y Diseño en la especialidad de Cerámica Artística. Durante muchos años trabajé fundamentalmente en el ámbito del Diseño Interior, esto me permitió desarrollar habilidades para proyectar y ofrecer soluciones creativas, ademas  de otras comunicativas, organizativas y de gestión.</p>"
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
    }
  });

function loadImages(max, galleryType, title, text) {
  if (mainContent.hasClass("inclusiveGrid")) {
    mainContent.removeClass("inclusiveGrid");
  }
  mainContent.css(
    "grid-template-columns",
    "repeat(auto-fit, minmax(10rem, 1fr))"
  );
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

/*$("#colorbox").swipe({
    //Generic swipe handler for all directions
    swipeLeft: function (event, direction, distance, duration, fingerCount) {
      jQuery.colorbox.next();
    },
    swipeRight: function (event, direction, distance, duration, fingerCount) {
      jQuery.colorbox.prev();
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold: 0,
  });*/

//prevent scrolling
$(document)
  .bind("cbox_open", function () {
    $("body").css({ overflow: "hidden" });
  })
  .bind("cbox_closed", function () {
    $("body").css({ overflow: "auto" });
  });

var mybutton = $("#myBtn");

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
