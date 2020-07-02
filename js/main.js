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
  var container = $('<div class="container">');
  var portrait = $('<img id="portrait" src="img/1.jpg">');
  var text = $(
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>"
  );
  mainContent.append(container.append(portrait).append(text));
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
  var galleryTitle = $(
    '<div class="galleryTitle"><h1 class="mainTitle">Cerámica</h1><p class="galleryInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>'
  );
  mainContent.append(galleryTitle);
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
    $(`.${galleryCheck}Gallery`).colorbox({
      rel: `${galleryCheck}Gallery`,
      maxWidth: "80%",
      maxHeight: "80%",
      current: false,
      scrolling: false,
      scalePhotos: true,
      reposition: true,
    });
    mainContent.append(colorBox.hide().fadeIn(500));
  }
  mainContent.children().last().remove();
}

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
      jQuery.colorbox.resize();
    }
  }, 300);
    // Resize Colorbox when resizing window or changing mobile device orientation
  jQuery(window).resize(resizeColorBox);
  window.addEventListener("orientationchange", resizeColorBox, false);
}

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
