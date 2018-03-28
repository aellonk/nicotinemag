// slick slider initializer //

$(document).ready(function(){
  $('.slider').slick({
    mobileFirst: true,
	slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,    
    dots: false,
    infinite: true,
    speed: 5,
    cssEase: 'ease',
    appendArrows: $('.button')
  });
});


$(document).ready(function(){
  $('.slider-left').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,    
    dots: false,
    infinite: true,
    speed: 5,
    cssEase: 'ease',
    appendArrows: $('.button')
  });
});

$(document).ready(function(){
  $('.slider-right').slick({
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,    
    dots: false,
    infinite: true,
    speed: 5,
    cssEase: 'ease',
    appendArrows: $('.button')
  });
});


