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
$("#about").click(function () {
  clear();
  var container = $('<div class="container">');
  var portrait = $('<img id="portrait" src="img/1.jpg">');
  var text = $(
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>"
  );
  mainContent.append(container.append(portrait).append(text));
});

$(".mainNav > ul")
  .children()
  .click(function (event) {
    var category = event.target.id;
    var galleryLenght;
    var row;
    var col;
    var title;
    var text;
    $("#main").removeClass("homePageGrid");
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
        title = "Cerámica"
        text = ""
        break;
      case "water":
        hideMobileNav();
        category = "suminagashiebru";
        galleryLenght = 24;
        row = 5;
        col = 5;
        title = "Suminagashi y Ebru"
        text = ""
        break;
      case "paper":
        hideMobileNav();
        category = "papelycarton";
        galleryLenght = 33;
        row = 7;
        col = 5;
        title = "Papel y cartón"
        text = ""
        break;
      case "flowdraws":
        hideMobileNav();
        category = "otros\\flowdraws";
        galleryLenght = 14;
        row = 5;
        col = 5;
        title = "Flow Draws"
        text = ""
        break;
      case "ilustraciones":
        hideMobileNav();
        category = "otros\\ilustraciones";
        galleryLenght = 9;
        row = 5;
        col = 5;
        title = "Ilustraciones"
        text = ""
        break;
      case "logos":
        hideMobileNav();
        category = "otros\\logotipos";
        galleryLenght = 6;
        row = 2;
        col = 5;
        title = "Logotipos"
        text = ""
        break;
      case "relieve":
        hideMobileNav();
        category = "otros\\relieves";
        galleryLenght = 4;
        row = 2;
        col = 5;
        title = "Relieves"
        text = ""
        break;
    }
    if (category != "about" && category != "inclusive" && category != "") {
      clear();
      loadImages(galleryLenght, category, title, text);
      document.documentElement.style.setProperty("--rowNum", row);
      document.documentElement.style.setProperty("--colNum", col);
    }
  });

function loadImages(max, galleryType, title, text) {
  var galleryTitle = $(
    `<div class="galleryTitle"><h1 class="mainTitle">${title}</h1><p class="galleryInfo">${text}</p></div>`
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
