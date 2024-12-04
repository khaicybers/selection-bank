//----------------------------------------------------/
// Filter FAQ List
//----------------------------------------------------/
$(document).ready(function () {
  const input = $("#dynamic-filter-input");
  const clearButton = $("#clearButton");

  input.on("input", function () {
    if (input.val().trim() !== "") {
      clearButton.removeClass("d-none");
    } else {
      clearButton.addClass("d-none");
    }

    FilterListSection();
  });

  clearButton.on("click", function () {
    input.val("");
    clearButton.addClass("d-none");
    FilterListSection();
  });

  function FilterListSection() {
    var filter = input.val().toUpperCase();
    var ul = $("#dynamic-filter-list");
    var li = ul.find("li");

    li.each(function () {
      var p = $(this).find("p").eq(0);
      if (p.text().toUpperCase().indexOf(filter) > -1) {
        $(this).css("display", "");
      } else {
        $(this).css("display", "none");
      }
    });
  }
});
//----------------------------------------------------/
// dynamic filter system links
//----------------------------------------------------/
jQuery(document).ready(function ($) {
  $("#dynamic-filter-list li").on("click", function () {
    $(this).addClass("filter-item-open");
    $(".dynamic-filter-list-container").addClass("dynamic-filter-min-height");
    $("#" + this.id + "-content")
      .delay(0)
      .fadeIn(50);
  });
  $(".filter-content-close,.filter-content-close-mobile ").on(
    "click",
    function () {
      $(this).addClass("filter-item-open");
      $(".dynamic-filter-list-container").removeClass(
        "dynamic-filter-min-height"
      );
      $(".filter-content-box").delay(0).fadeOut(50);
    }
  );
});

//--------------------------------------------------/
// Trigger Content Box
//--------------------------------------------------/
$(document).ready(function () {
  var card = $("ul#dynamic-filter-list li");
  var cardMomo = $("ul#dynamic-filter-list li#card-01");
  var cardVCB = $("ul#dynamic-filter-list li#card-02");
  var cardACB = $("ul#dynamic-filter-list li#card-03");
  var cardMB = $("ul#dynamic-filter-list li#card-04");

  card.on("click", function () {
    $(".dynamic-filter-list-container > p, ul#dynamic-filter-list")
      .delay(0)
      .fadeOut(0);
  });
  if (window.matchMedia("(max-width: 767.9px)").matches) {
    card.on("click", function () {
      $(".filter-content-close-mobile").css("display", "inline-block");
    });
  }

  cardMomo.on("click", function () {
    $(".mainContent").addClass("apply-bg-momo");
  });
  cardVCB.on("click", function () {
    $(".mainContent").addClass("apply-bg-vcb");
  });
  cardACB.on("click", function () {
    $(".mainContent").addClass("apply-bg-acb");
  });
  cardMB.on("click", function () {
    $(".mainContent").addClass("apply-bg-mb");
  });

  $(".filter-content-close,.filter-content-close-mobile").on(
    "click",
    function () {
      $(".dynamic-filter-list-container > p, ul#dynamic-filter-list")
        .delay(0)
        .fadeIn(0);
      $(".mainContent")
        .removeClass("apply-bg-momo")
        .removeClass("apply-bg-vcb")
        .removeClass("apply-bg-acb")
        .removeClass("apply-bg-mb");
    }
  );
  if (window.matchMedia("(max-width: 767.9px)").matches) {
    $(".filter-content-close-mobile").on("click", function () {
      $(".filter-content-close-mobile").css("display", "none");
    });
  }
});

//--------------------------------------------------/
// Copy button
//--------------------------------------------------/
$(document).ready(function () {
  const buttonIds = [
    "#PhoneCopyBtn",
    "#textCopyBtn",
    "#priceCopyBtn",
    "#PhoneCopyBtn2",
    "#textCopyBtn2",
    "#priceCopyBtn2",
    "#PhoneCopyBtn3",
    "#textCopyBtn3",
    "#priceCopyBtn3",
    "#PhoneCopyBtn4",
    "#textCopyBtn4",
    "#priceCopyBtn4",
  ];

  buttonIds.forEach(function (id) {
    new ClipboardJS(id);
  });

  $(buttonIds.join(", ")).on("click", function () {
    $(this).text("Đã sao chép");
  });
});
