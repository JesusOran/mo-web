var mainContent = $("#main");
var ImgGallery;

function clear() {
  mainContent.empty();
}

var count = 1;
function transition() {
  if (count == 1) {
    $(".item3").css({
      transition: "2s ease-in-out",
      "background-image": `url("../img/gallery/ceramica/1.jpg")`,
    });
    count = 2;
  } else if (count == 2) {
    $(".item3").css({
      transition: "2s ease-in-out",
      "background-image": `url("../img/gallery/ceramica/2.jpg")`,
    });
    count = 3;
  } else if (count == 3) {
    $(".item3").css({
      transition: "2s ease-in-out",
      "background-image": `url("../img/gallery/ceramica/3.jpg")`,
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

function loadImages(max, galleryType) {
  for (var i = 0; i <= max; i++) {
    var image = $(
      `<img class="galleryImage" src="../img/gallery/${galleryType}/${i}.jpg" alt="${galleryType}${i}" loading="lazy" width="100px" height="100px" data-toggle="modal" data-target="#modal${galleryType}${i}">`
    );
    var modal = $(
      `<div class="modal fade" id="modal${galleryType}${i}" tabindex="-1" role="dialog" aria-labelledby="modal${galleryType}${i}Label" aria-hidden="true">`
    );
    var modalDialog = $(`<div class="modal-dialog">`);
    var modalContent = $(`<div class="modal-content">`);
    var modalHeader = $(`<div class="modal-header">`);
    var modalClose = $(`<button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>`);
    var modalBody = $(`<div class="modal-body">`);

    modal.append(
      modalDialog.append(
        modalContent
          .append(modalHeader.append(modalClose))
          .append(modalBody.append(image.clone()))
      )
    );
    mainContent.append(image);
    mainContent.next().append(modal);
  }
}
