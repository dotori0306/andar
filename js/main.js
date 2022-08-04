$(function(){


var swiper = new Swiper(".visual-slide.swiper", {
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    effect: "fade",
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });




  var swiper = new Swiper(".item-swiper", {
    slidesPerView: "2.3",
    spaceBetween: 10,
  });

  
  
  

  
    
    


    $('.category-wrap .cate').click(function(e){
      e.preventDefault();
        $('.side-menu').addClass('on')
    })

    $('.btn-close').click(function(e){
      e.preventDefault();
        $('.side-menu').removeClass('on')
    })









  //지우지말것  
  })