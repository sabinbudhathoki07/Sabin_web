
    
    /*Sticky Navigation*/
    
    $('.js--section_about_me').waypoint(function(direction) {
       if (direction == "down") {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
    }, {
      offset: '60px'
    });
    
    /*Scroll on button*/
    
    $('.js--scroll_to_form').click(function () {
        $('html, body').animate({scrollTop: $('.js--section_form').offset().top}, 1000);
    });
    
    $('.js--scroll_to_production').click(function () {
        $('html, body').animate({scrollTop: $('.js--section_production').offset().top}, 1000);
    });
   
    /*Scroll on navigation */
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    /* Animations on Scroll */
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    }); 
    
    
    /*Mobil nav*/
    
    $('.js--nav--icon').click(function() {
        var nav = $('.js--main_nav');
        var icon = $('.js--nav--icon i')
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        } 
    });
$(document).ready(function(){
    $(".input-box input").on("focus",function(){
        $(this).addClass("focus");
    });

    $(".input-box input").on("blur",function(){
        if($(this).val() == "")
        $(this).removeClass("focus");
    });
});


function toggleSidebar(){
   document.getElementById("sidebar").classList.toggle('active');
  }

function messageform() {
  document.getElementById("myMessageForm").style.display = "block";
}




