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
  $(event.target).css("font-family", "MontserratMedium");
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
$("#about").click(function () {
  clear();
});

$("#ceramic").click(function () {
  clear();
  loadImages(33, "ceramica");
  document.documentElement.style.setProperty("--rowNum", 7);
  document.documentElement.style.setProperty("--colNum", 5);
});

$("#water").click(function () {
  clear();
  loadImages(24, "suminagashiebru");
  document.documentElement.style.setProperty("--rowNum", 5);
  document.documentElement.style.setProperty("--colNum", 5);
});

$("#paper").click(function () {
  clear();
  loadImages(33, "papelycarton");
  document.documentElement.style.setProperty("--rowNum", 7);
  document.documentElement.style.setProperty("--colNum", 5);
});

$("#flowdraws").click(function () {
  clear();
  loadImages(24, "otros\\flowdraws");
  document.documentElement.style.setProperty("--rowNum", 5);
  document.documentElement.style.setProperty("--colNum", 5);
});

$("#logos").click(function () {
  clear();
  loadImages(6, "otros\\logotipos");
  document.documentElement.style.setProperty("--rowNum", 2);
  document.documentElement.style.setProperty("--colNum", 5);
});

$("#relieve").click(function () {
  clear();
  loadImages(4, "otros\\relieves");
  document.documentElement.style.setProperty("--rowNum", 2);
  document.documentElement.style.setProperty("--colNum", 5);
});

function loadImages(max, galleryType) {
  var galleryCheck = galleryType;
  if (galleryType.includes("otros\\")){
    galleryCheck = "otros"
  }
  for (var i = 0; i <= max; i++) {
    var colorBox = $(
      `<a class="${galleryCheck}Gallery" href="img/gallery/${galleryType}/${i}.jpg">`
    );
    var image = $(
      `<img class="galleryImage" src="img/gallery/${galleryType}/${i}.jpg" alt="${galleryType}${i}" loading="lazy" width="100px" height="100px">`
    );
    colorBox.append(image);
    $(`.${galleryCheck}Gallery`).colorbox({
      rel: `${galleryCheck}Gallery`,
      maxWidth: "80%",
      maxHeight: "80%",
      current: false,
    });
    mainContent.append(colorBox.hide().fadeIn(500));
  }

  //prevent scrolling
  {
    $(document)
      .bind("cbox_open", function () {
        $("body").css({ overflow: "hidden" });
      })
      .bind("cbox_closed", function () {
        $("body").css({ overflow: "auto" });
      });
  }
  var resizeTimer;
  function resizeColorBox() {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (jQuery("#cboxOverlay").is(":visible")) {
        jQuery.colorbox.load(true);
      }
    }, 300);
  }

  // Resize Colorbox when resizing window or changing mobile device orientation
  jQuery(window).resize(resizeColorBox);
  window.addEventListener("orientationchange", resizeColorBox, false);

  jQuery("#colorbox").swipe({
    //Generic swipe handler for all directions
    swipeLeft: function (event, direction, distance, duration, fingerCount) {
      jQuery.colorbox.next();
    },
    swipeRight: function (event, direction, distance, duration, fingerCount) {
      jQuery.colorbox.prev();
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    //threshold:0
  });
}
