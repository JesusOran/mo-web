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

function loadImages(max, galleryType) {
  for (var i = 0; i <= max; i++) {
    var colorBox = $(
      `<a class="${galleryType}Gallery" href="img/gallery/${galleryType}/${i}.jpg">`
    );
    var image = $(
      `<img class="galleryImage" src="img/gallery/${galleryType}/${i}.jpg" alt="${galleryType}${i}" loading="lazy" width="100px" height="100px">`
    );
    colorBox.append(image);
    $(`.${galleryType}Gallery`).colorbox({
      rel: `${galleryType}Gallery`,
      maxWidth: "95%",
      maxHeight: "95%",
    });
    mainContent.append(colorBox.hide().fadeIn(500));
  }

  //prevent scrolling
  {
    $(document).bind('cbox_open', function(){
        $('body').css({overflow:'hidden'});
    }).bind('cbox_closed', function(){
        $('body').css({overflow:'auto'});
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
}
