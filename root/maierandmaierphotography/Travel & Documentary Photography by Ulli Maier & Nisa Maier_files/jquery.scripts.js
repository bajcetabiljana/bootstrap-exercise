(function ($) {

$(document).ready(function() {

  /*=================================
  :: LOADING ANIMATION
  ==================================*/

  var properties = {
     opacity : '0.4'
  };

  var el = $('#loading .loading');
  el.pulse(properties, { duration : 600, pulses : -1 });

});

$(window).load(function() {

 /*=================================
  :: PRELOAD IMAGES
  ==================================*/

  $('.preload img').fadeIn(1000);
  $('.preload img').load(function () {
      $(this).fadeIn(1000);
  });


  $('.loadingbar').prepend('<img id="theImg" src="http://www.maierandmaierphotography.com/wp-content/themes/maier_maier_photography/images/loaderbar.gif" />')
  $('#loading').delay(1000).fadeOut('slow', function() { $(this).remove(); })




  /*=================================
  :: CONTEXTMENU
  ==================================*/


  $(document).bind("contextmenu", function(event) { 
      event.preventDefault();
      $("<div class='custom-menu'>Please respect the copyright <br/> &amp; feel free to buy our photos.</div>")
          .appendTo("body")
          .css({top: event.pageY + "px", left: event.pageX + "px"});
  }).bind("mouseup", function(event) {
      $("div.custom-menu").hide();
  });


  /*=================================
  :: SINGLE POST SCROLLING FADE
  ==================================*/

  imagetiles = $(".entry-content figure img").fadeTo(0, 0.6);

  $(window).scroll(function(d,h) {
      imagetiles.each(function(i) {
          a = $(this).offset().top + $(this).height() - 300;
          b = $(window).scrollTop() + $(window).height();
          if (a < b) $(this).fadeTo(400,1);

      });
  });


  tiles = $("img.camera").fadeTo(0, 0.2);

  $(window).scroll(function(d,h) {
      tiles.each(function(i) {
          a = $(this).offset().top + $(this).height() - 450;
          b = $(window).scrollTop() + $(window).height();
          if (a < b) $(this).fadeTo(500,1);

      });
  });

  /*=================================
  :: PROFILE SCROLL
  ==================================*/


  $(window).scroll( function(){

    /* Check the location of each desired element */
    $('.hideme').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){

            $(this).animate({'opacity':'1'},500);

        }

    }); 

    /* Check the location of each desired element */

    
    $('.hidemetext').each( function(i){

        var bottom_of_object = $(this).position().top + 200;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if( bottom_of_window > bottom_of_object ){

            $(this).animate({'opacity':'1'},500);

        }

    }); 




});


  /*=================================
  :: ROTATE COMPASS
  ==================================*/

    var sdegree = 0;

    $(window).scroll(function() {

          if ($(window).width() > 767) {
              sdegree ++ ;
              sdegree = sdegree + 2 ;
              var srotate = "rotate(" + sdegree + "deg)";
              $("img.compass").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});

          }


    }); 


  /*=================================
  :: GRID/LIST
  ==================================*/
    $('#toggle-list').css({'color': '#333'});
    $('#toggle-grid').css({'color': '#d4d3cd'});


    $('#toggle-grid').click(function(){

            $('#toggle-list').css({'color': '#333'});
            $('#toggle-grid').css({'color': '#d4d3cd'});

            $('#list').fadeOut(300);

            $("#grid").fadeIn(800, function () {

            });
            return false;

    });

    $('#toggle-list').click(function(){

            $('#toggle-grid').css({'color': '#333'});
            $('#toggle-list').css({'color': '#d4d3cd'});

            $('#grid').fadeOut(300);
            $("#list").fadeIn(800, function () {
            });
            return false;


    });

  /*=================================
  :: SCROLLFADE PROFILE
  ==================================*/



  /*=================================
  :: DYNAMO
  ==================================*/
    $('#dynamo-real').dynamo({
      speed: 1,
      delay: 15000,
      lines: ["magical landscapes.", "amazing people.", "secret spots.", "beautiful nature.", "hidden treasures."],
      callback: function() { console.log('callback works!'); }
    });
});



/*=================================
:: SCROLLTO
==================================*/

(function($) {
    $.fn.SmoothAnchors = function() {

        function scrollBodyTo(destination, hash) {

            // Change the hash first, then do the scrolling. This retains the standard functionality of the back/forward buttons.
            var scrollmem = $(document).scrollTop();
            window.location.hash = hash;
            $(document).scrollTop(scrollmem);
            $("html,body").animate({
                scrollTop: destination
            }, 1000);

        }

        if (typeof $().on == "function") {
            $(document).on('click', 'a[href^="#top"]', function() {

                var href = $(this).attr("href");

                if ($(href).length == 0) {

                    var nameSelector = "[name=" + href.replace("#", "") + "]";

                    if (href == "#") {
                        scrollBodyTo(0, href);
                    }
                    else if ($(nameSelector).length != 0) {
                        scrollBodyTo($(nameSelector).offset().top, href);
                    }
                    else {
                        // fine, we'll just follow the original link. gosh.
                        window.location = href;
                    }
                }
                else {
                    scrollBodyTo($(href).offset().top, href);
                }
                return false;
            });
        }
        else {
            $('a[href^="#top"]').click(function() {
                var href = $(this).attr("href");

                if ($(href).length == 0) {

                    var nameSelector = "[name=" + href.replace("#", "") + "]";

                    if (href == "#") {
                        scrollBodyTo(0, href);
                    }
                    else if ($(nameSelector).length != 0) {
                        scrollBodyTo($(nameSelector).offset().top, href);
                    }
                    else {
                        // fine, we'll just follow the original link. gosh.
                        window.location = href;
                    }
                }
                else {
                    scrollBodyTo($(href).offset().top, href);
                }
                return false;
            });
        }
    };
})(jQuery);

$(document).ready(function() {
    $().SmoothAnchors();
});


} (jQuery));
