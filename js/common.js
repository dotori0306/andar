$(function(){


var swiper = new Swiper(".banner-area", {
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    
    autoplay: {        
      delay: 3000,
      disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".visual swiper-pagination",
    //     clickable: true,
    //   },
 
  });




  // 스크롤 헤더 이벤트
  $(window).scroll(function(){
    current = $(this).scrollTop();

    if(current > 0){
        $('.header-area').addClass('fixed');
    }else{
        $('.header-area').removeClass('fixed');
    }
})



$('.btn-all').click(function(e){
  e.preventDefault();
  $('.sub-nav-area').stop().slideToggle();

})


// 사이드 메뉴
$('#menuBtn').click(function(e){
  e.preventDefault();
  $('.dimmed').addClass('on')
  $('.side-menu').addClass('on')
  $('body').addClass('hidden')
})

$('.btn-close,.dimmed').click(function(e){
  e.preventDefault();
  $('.side-menu').removeClass('on')
  $('body').removeClass('hidden')
  $('.dimmed').removeClass('on')
})




//서브메뉴
$('.menu-item > a').click(function(e){
  e.preventDefault();
  subWrap = $(this).siblings('.sub-wrap');
  subUl = $(this).siblings('.sub-wrap').find('.sub-list');

  
  if(subWrap.css('display') == 'block'){
    subWrap.stop().fadeOut(500)
    subUl.stop().slideUp()
    $(this).stop().removeClass('on')
    //페이드, 슬라이드 쓰려면 display: none이어야 가능
    
  }else{
    subWrap.stop().fadeIn(500)
    subUl.stop().slideDown()
    $(this).stop().addClass('on')

  }

})







  // $('.all-btn').click(function(e){
  //   e.preventDefault();
  //   $('.menu-wrap-all').stop().slideToggle();

  //   if ($('.menu-wrap-all').css('display') == 'block') {

  //     $('.menu-wrap').hide();
  //       $('.all').show();

    
  // } else {
  //     $('.menu-wrap').show();
  //     $('.all').hide();
    
  // }







  // $('.all-btn').click(function(e){
  //   e.preventDefault();

  //   $('.all-btn').addClass('active');
  //   $('.menu-wrap-all').stop().slideToggle();



  // $(function(){
  //   $('.all-btn').on('click',function(){
  //       if(!$(this).hasClass('.active')) {
	// 		$(this).addClass('active');
  //           $('.menu-wrap-all').stop(true,true).slideDown();
  //       } else {
  //           $(this).removeClass('.active');
	// 		$('.menu-wrap-all').stop(true,true).slideUp();     
  //       }
  //   });
  //   $('.btn_all_menu_close').on('click',function(){
	// 	$('.all-category').removeClass('on');
	// 	$('.gnb_allmenu_wrap').stop(true,true).slideUp();     
  //   });

  

  //지우지말것  
})
