$(document).ready(function() {
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 768) {
          $(".nav-logo").addClass("hide").removeClass("show");
          $(".nav-logosm").addClass("show").removeClass("hide");
        }
        else {
          $(".nav-logo").addClass("show").removeClass("hide");
          $(".nav-logosm").addClass("hide").removeClass("show");
        }
    }
    checkWidth();
    $(window).resize(checkWidth);
});
