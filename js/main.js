$(document).ready(function () {
    "use strict";
    var menuBotton = document.querySelector(".botton");
    menuBotton.addEventListener("click", function(e) {
      $(".menu_block, .botton").toggleClass("active");
    });


	//desktop nav
	$('.like').on("click", function () {

        $(this).addClass('liked');
        var child = $(this).parent().find(".figure");
        // var text = child.text();
        var num = parseInt(child.text());
        child.text(num+1);

	});

    // scroll to section
    $("a[href*='#']").bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior
    
            var target = $(this).attr("href"); // Set the target as variable
    
            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 600, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });
    
            return false;
    });




});



$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('.menu_block a.active, nav a.active').removeClass('active');
                $('.menu_block a, nav a').eq(i).addClass('active');
                $(".menu_block, .botton").removeClass('active');
            }
    });
}).scroll();


// Can also be used with $(document).ready()
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


    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("more_items");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

