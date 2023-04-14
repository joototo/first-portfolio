//클릭시 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]',function(e){
  e.preventDefault();
});





// scrolla motion
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
          trigger: '.videoWrap',   //트리거 대상
          start: '0% 50%',     //트리거 대상의 시작 지점, 브라우저 화면의 시작 지점
          end: '0% 50%',    //트리거 대상의 끝나는 지점, 브라우저 화면의 끝나는 지점
          scrub: 1,            //되감기
         // markers: true        //시작위치 끝위치 확인 가능한 마커
      }
  })

//1-1. con01이 보이면 video가 clip-path속성으로 둥글게 영역이 삭제된 것처럼 보였다가 원래 상태로 전체 꽉차게 보여준다.
//gsap.fromTo()메서드는 시작점과 끝나는 점을 지정하는 애니메이션 ->
//gsap.fromTo("타겟", {시작속성: 시작 속성값...}, {끝나는 속성: 끝나는 속성값...})
.fromTo('.videoWrap video', {'clip-path': 'inset(20% 20% 20% 20% round 40%)'},{'clip-path': 'inset(0% 0% 0% 0% round 0%)', ease:'none', duration:10} ,0)

});





//resume 영역 img fix
$(window).on('scroll resize', function(){
  var scrollPos = 0;
  scrollPos = $(document).scrollTop();
  // alert( scrollPos );

  fix();

  function fix(){
    if( scrollPos > 2100){
      $('.fix .right').addClass('on');
    } else {
      $('.fix .right').removeClass('on');
    } if( scrollPos > 3200){
      $('.fix .right').removeClass('on');
    }
  }
  });



