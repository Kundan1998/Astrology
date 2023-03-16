// Header Nav Start
    $(document).ready(function(){

    // Responsive Navbar JS Start
    (function($) {
  "use strict";
  var openBtn = $("#open-button"),
    colseBtn = $("#close-button"),
    menu = $(".menu-wrap");
  // Open menu when click on menu button
  openBtn.on("click", function() {
    menu.addClass("active");
  });
  // Close menu when click on Close button
  colseBtn.on("click", function() {
    menu.removeClass("active");
  });
  // Close menu when click on anywhere on the document
      $(document).on("click", function(e) {
        var target = $(e.target);
        if (target.is(".menu-wrap, .menu, .icon-list, .icon-list a, .icon-list a span, #open-button") === false) {
          menu.removeClass("active");
          e.stopPropagation();
        }
      });
    })(jQuery);
    // Responsive Navbar JS End


});
// Header Nav End