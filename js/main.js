//클릭시 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
  e.preventDefault();
});



//scrolla motion
$(function(){
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 




//메뉴
$(function(){
  $('.menuOpen').on('click', function(){
      $('.menuWrap').addClass('on');     
  });
  $('.menuWrap .close').on('click', function(){
      $('.menuWrap').removeClass('on');     
  })
});





// 1. gsap -> con01 비디오모션
$(function(){
  gsap.timeline ({             //시간 순서에 따라 이벤트가 진행될 수 있도록 만들어 줌
      scrollTrigger: {
          trigger: '.videoWrap', //트리거 대상
          start: '0% 50%',     //트리거 대상의 시작 지점, 브라우저 화면의 시작 지점
          end: '0% 50%',    //트리거 대상의 끝나는 지점, 브라우저 화면의 끝나는 지점
          scrub: 1,            //되감기
         // markers: true        //시작위치 끝위치 확인 가능한 마커
      }
  })

//1-1. con01이 보이면 video가 clip-path속성으로 둥글게 영역이 삭제된 것처럼 보였다가 원래 상태로 전체 꽉차게 보여준다.
//gsap.fromTo()메서드는 시작점과 끝나는 점을 지정하는 애니메이션 ->
//gsap.fromTo("타겟", {시작속성: 시작 속성값...}, {끝나는 속성: 끝나는 속성값...})
.fromTo('.video video', {'clip-path': 'inset(20% 20% 20% 20% round 40%)'},{'clip-path': 'inset(0% 0% 0% 0% round 0%)', ease:'none', duration:10} ,0)


});






// 2. gsap -> My Work 모션
//start/ end 타임에 맞춘 기준 : clone cording 글씨가 화면에 보이자마자 글씨가 모이면서 글씨가 중앙으로 왔을 때 종료
$(function(){
  gsap.timeline({
    scrollTrigger: {
        trigger:'.ready',
        start:'0% 100%',
        end:'0% 20%',
        scrub:1,
        // markers:true
    }
  })

// 2-1. ready .title a와 b가 서로 반대에서 제자리로 돌아오도록!
.fromTo('.ready .title .a' , {x:  '-100%'}, { x: '0%', ease:'none' , duration: 5 },0)
.fromTo('.ready .title .b' , {x:  '100%'}, { x: '0%', ease:'none' , duration: 5 },0)

//2. videoWrap 시작될 때
//start/end 타이밍 맞춘 기준 : ready 글씨가 화면 중앙에 오고 videoWrap 올라오는 시작과 동시에 애니 끝나는 시간도 맞춤
gsap.timeline({
  scrollTrigger: {
      trigger:'.videoWrap',
      start:'0% 100%',
      end:'0% 100%',
      scrub:1,
      // markers:true
  }
})
});





// 썸네일 슬라이더
var sliderThumbnail = new Swiper(".slider-thumbnail", {
  slidesPerView: 1,
  spaceBetween: 4,
  watchSlidesProgress: true,
  loop: true,
  direction: "vertical"

});

//메인 슬라이더
var slider = new Swiper(".slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: sliderThumbnail
  },
  effect: "fade"
});





//maqee태그 적용
$(function(){
  const pTag1 = document.querySelector('.first-parallel')
  const pTag2 = document.querySelector('.second-parallel')
  
  let count1 = 0
  let count2 = 0 
  
  function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 4) {
      element.style.transform = `translate3d(0, 0, 0)`
      count = 0
  }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`
  
  return count
  }
  
  function animate() {
  count1++
  count2++
  
  count1 = marqueeText(count1, pTag1, -1)
  count2 = marqueeText(count2, pTag2, -1)
  
  window.requestAnimationFrame(animate)
  }
  
  function scrollHandler() {
  count1 += 10
  count2 += 10
  }
  
  window.addEventListener('', scrollHandler)
  animate()
  });
