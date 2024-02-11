$('nav').mouseover(function(){
  $('nav .nav_inner .gnb .lnb').stop().slideDown(450);
}).mouseout(function(){
  $('nav .nav_inner .gnb .lnb').stop().slideUp(450);
})

$(window).scroll(function(){
  let scr = $(window).scrollTop();
  let sc1Off = $('.section1').offset().top;
  let sc2Off = $('.section2').offset().top;
  let sc3Off = $('.section3').offset().top;
  if(scr >= sc1Off){
      $('.section1 .title .up .line1').addClass('active');
      $('.section1 .title .up .next').addClass('active');
  }else{
    $('.section1 .title .up .line1, .section1 .title .up .next').removeClass('active');
  }
  if(scr >= sc2Off){
    $('.section2 .title .up .line4').addClass('active');
    $('.section2 .title .up .next').addClass('active');
  }else{
    $('.section2 .title .up .line4, .section2 .title .up .next').removeClass('active');
  }
  if(scr >= sc3Off){
    $('.section3 .title .up .line5').addClass('active');
    $('.section3 .title .up .next').addClass('active');
  }else{
    $('.section3 .title .up .line5, .section3 .title .up .next').removeClass('active');
  }
});





// $(window).scroll(function(){
  // let infi = $('.infi');
  // let sec1 = $('.section1');
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     scrub: 1,
  //     pin: true,
  //     trigger: infi,
  //     markers:true,
  //     start: "top 50%",
  //     endTrigger: ".sec",
  //     end: "bottom 20%",
  //   },
  // });
  
  // tl.to(infi);
// })

gsap.registerPlugin(ScrollTrigger);

gsap.to(".infi",{
  scrollTrigger:{
    trigger:".infi",
    start:"top 10%",
    endTrigger:".section1",
    end:"bottom 50%",
    pin: true,
    // markers:fasle,
    scrub:1
  },
});
gsap.to(".cus",{
  scrollTrigger:{
    trigger:".cus",
    start:"top 10%",
    endTrigger:".section2",
    end:"bottom 40%",
    pin: true,
    // markers:fasle,
    scrub:1
  },
});
gsap.to(".style",{
  scrollTrigger:{
    trigger:".style",
    start:"top 10%",
    endTrigger:".section3",
    end:"bottom 40%",
    pin: true,
    // markers:fasle,
    scrub:1
  },
});

let swiper = new Swiper('.conLun', {
  // Optional parameters,
  slidesPerView: 2.5,
  // direction: 'vertical',
  // loop: true,
  spaceBetween:60,
  // centeredSlides: true,
  freeMode: true,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    // hide:false,
  },
});

// $('.section4 .box').mouseenter(function(){
//   if(!$(this).find(".color").is(":animated")){
//     $(this).find('.color').stop().fadeIn(500);
//   }
// }).mouseout(function(){
//   $(this).find('.color').stop().hide();
// })
$(document).on('aos:in', function (event) {
  // aos:in 이벤트가 발생했을 때 실행되는 코드
  console.log('AOS 애니메이션 시작:', event.detail);
});

$(document).on('aos:out', function (event) {
  // aos:out 이벤트가 발생했을 때 실행되는 코드
  console.log('AOS 애니메이션 완료:', event.detail);
});

// $('.para').on('animationstart', function () {
//   $('.txt_box').addClass('in-view');
// });
$(window).scroll(function(){
  let txt = $('.section3 .sub_tit')
  let scr = $(window).scrollTop();
  let txt1Off = $('.section3 .title .arrow5').offset().top;
  if(scr >= txt1Off){
    $('.section3 .sub_tit').addClass('anim-typewriter')
  }else{
    $('.section3 .sub_tit').removeClass('anim-typewriter')
  }
});
$(window).scroll(function(){
  let txt2= $('.section5 .title h3')
  let scr = $(window).scrollTop();
  let txt2Off = $('.section5').offset().top;
  if(scr >= txt2Off ){
    txt2.addClass('anim-typewriter')
  }else{
    txt2.removeClass('anim-typewriter')
  }
});