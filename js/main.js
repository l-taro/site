(function( $ ){
  $.fn.animation = function(option) {
      return this.each(function(){
        var scrollA = $(window).scrollTop();
        var windowHA = $(window).height();
        var offsetA = $(this).offset();
        var animate = offsetA.top - windowHA/1.1;
        
        if (scrollA > animate) {
            $(this).addClass('animated');
        }
        if (scrollA < 10) {
            $(this).removeClass('animated');
        }
        
      });
  };
})( jQuery );

$(document).ready(function() {

	$('.main_screen').addClass('start');

  //search variants
	$(document).on('click','.show-order-form', function() {
         $(this).hide();
         $('.search-variants__form').animate({
  		    height: '100%',
  		    width: '100%',
  		    opacity: 1
  		  }, 500, function() {
  		    // Animation complete.
  		  });

         return false;
    });

	$(document).on('click','.close-order-form', function() {
    $('.show-order-form').show();
         $('.search-variants__form').animate({
		    height: '0',
		    width: '0',
		    opacity: 0
		  }, 500, function() {
		    // Animation complete.
		  });

         return false;
    });


  //mobile search
  $(document).on('click','.show-mobile-search', function() {
    $('.multiselect_form').slideDown();
    $('.header_search_form').slideDown(); 
    $('.phones').slideUp();   
         return false;
    });

  $(document).on('click','.close-multiselect', function() {
    $('.multiselect_form').slideUp();
    $('.header_search_form').slideUp();    
         return false;
    });


//mobile phone  
  $(document).on('click','.show-mobile-phone', function() {
    $('.phones').slideDown();
    $('.multiselect_form').slideUp();
    $('.header_search_form').slideUp();   
         return false;
    });

  $(document).on('click','.close-mobile-phone', function() {
    $('.phones').slideUp();   
         return false;
    });


  var windowW = $(window).width();      
    
    if (windowW < 1001){
        $(document).click(function(event) {
          if ($(event.target).closest('.show-mobile-search, .show-mobile-phone, .phones, .header_search_form, .multiselect_form').length) return;
          $('.phones').slideUp();
          $('.multiselect_form').slideUp();
          $('.header_search_form').slideUp(); 
          event.stopPropagation();
        });
    }

	$(window).scroll(function () {
        $('.profits__content').animation();
        $('.search-variants-list').animation();
    });

$(document).on('click','.body-color', function() {
    var col = $(this).attr('data-color');
    $('body').attr('class','color-'+col);
    $('.colors-switcher a').removeClass('active');
    $(this).addClass('active');
         return false;
    });

    $('#slider-main').slick({
      arrows: true,
      dots: true,
      slidesToShow: 1,
      speed: 800,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1800
    });

});