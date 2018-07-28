$(document).ready(function () {
    "use strict";
    var menuBotton = document.querySelector(".botton");
    menuBotton.addEventListener("click", function(e) {
      $(".menu_block, .botton").toggleClass("active");
    });

    //desktop nav
    $('.like').on("click", function () {

        $(this).addClass('liked');
        var child = $(this).parent().find(".counterNum");
        // var text = child.text();
        var num = parseInt(child.text());
        child.text(num+1);

    });

    // scroll to section
    $('a[href^="#"]').bind('click', function(e) {
            e.preventDefault(); 
    
            var target = $(this).attr("href");
    
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 600, function() {
                    location.hash = target; 
            });
    
            return false;
    });

});


// scroll to active state
$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('.menu_block a.active, nav a.active').removeClass('active');
                $('.menu_block a, nav a').eq(i).addClass('active');
                $(".menu_block, .botton").removeClass('active');
            }
    });
}).scroll();


// flexslider2
$(window).load(function() {
    $('#main-slider').flexslider({
        animation: "slide",
        animationLoop: false,
        useCSS : "false"
    });

    $('#secondary-slider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 175,
        itemMargin: 5,
        minItems: 1,
        maxItems: 4,
        slideshow: false

    });

    // lightbox 2
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })

  });

  (function () {
      // modal
      var modal = document.getElementById('myModal');
      var btn = document.getElementById("more_items");
      var span = document.getElementsByClassName("close")[0];
      
      btn.onclick = function() {
          modal.style.display = "block";
      }
      
      span.onclick = function() {
          modal.style.display = "none";
      }
      
      window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      }
  }());


