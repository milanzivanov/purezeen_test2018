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
        var text = child.text();
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
        useCSS : "false",
        slideshow: true
    });

    $('#secondary-slider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 175,
        itemMargin: 5,
        minItems: 1,
        maxItems: 4,
        slideshow: true

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


// Asunc / Await / Fetch example 2
async function fetchUsers() {
    // lokal
    // const res = await fetch('../db/info_recipes.json');
    // online
    const res = await fetch('https://next.json-generator.com/api/json/get/EkaIUtIVS');
    const data = await res.json();
    console.log(data);

    let output = '';
    let output2 = '';
    let box_recipes = document.querySelector(".menu-container__box");
    let modal_rec = document.querySelector(".table");

    for (let info_recipe of data) {

        output += `
        <div class="box--item">
            <div class="recipe_item">
                <h3 class="recipe_name">
                    ${info_recipe.name}.
                </h3>
                <span class="recipe_separator"></span>
                <h4 class="recipe_price">&#36;${info_recipe.price}</h4>
            </div>
            <p class="recipe_desc">
                ${info_recipe.info}
            </p>
        </div>`;

            output2 += `
            <tr>
                <th>Recipe name</th>
                <th>Info</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>${info_recipe.name}.</td>
                <td>${info_recipe.info}</td>
                <td>&#36;${info_recipe.price}</td>
            </tr>
        `;

    }

    box_recipes.innerHTML = output;
    modal_rec.innerHTML = output2;

}

fetchUsers();
