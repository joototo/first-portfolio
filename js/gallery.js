//0. 스크립트 위로 튕기는것

$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});





// motion
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 





// 1. 메뉴
$(function(){
  $('.menuOpen').on('click', function(){
      $('.menuWrap').addClass('on');     
  });
  $('.menuWrap .close').on('click', function(){
      $('.menuWrap').removeClass('on');     
  })
});





// 2. gsap -> My Work 모션
//start/ end 타임에 맞춘 기준 : clone cording 글씨가 화면에 보이자마자 글씨가 모이면서 글씨가 중앙으로 왔을 때 종료
$(function(){
    gsap.timeline({
      scrollTrigger: {
          trigger:'.clone',
          start:'0% 100%',
          end:'0% 20%',
          scrub:1,
          // markers:true
      }
    })

// 2-1. clone .title a와 b가 서로 반대에서 제자리로 돌아오도록!
.fromTo('.clone .title .a' , {x:  '-100%'}, { x: '0%', ease:'none' , duration: 5 },0)
.fromTo('.clone .title .b' , {x:  '100%'}, { x: '0%', ease:'none' , duration: 5 },0)

//3. workList가 시작될 때
//start/end 타이밍 맞춘 기준 : clone cording 글씨가 화면 중앙에 오고 workList가 올라오는 시작과 동시에 애니 끝나는 시간도 맞춤
gsap.timeline({
  scrollTrigger: {
      trigger:'.workList',
      start:'0% 100%',
      end:'0% 100%',
      scrub:1,
      // markers:true
  }
})

//3-1. 화면이 다시 검정색으로 바뀌고 글씨 흰색으로 변경
.to('.wrap', {backgroundColor:'#212121', color:'#fff7eb', ease:'none', duration:5 },0)

// 3-2. title을 포지션 픽스해서 workList가 진행되는 동안 스크롤 할 때 고정되도록 해준다.
.to ('.clone .title', {position: 'fixed', ease:'none', left:'0', top:'0', width:'100%',duration:5 },0)

//3-3. title 포지션 픽스 때문에 갑자기 title의 높이값이 상실되어 애니가 부자연스럽다. 그래서 workList에 margin-top과 위에 둥둥 떠있는 느낌을 주기위해 z-index를 준다.
.fromTo ('.workList', {margin:'0 auto'}, {margin: '100vh auto 0', zindex:'10', duration:1},0)

//4. workList가 거의 끝나는 부분에서 clone cording 글자가 화면밖으로 사라지게 
//   start / end 타이밍 맞춘 지점 -> workList가 거의 끝나는 부분에 clone cording 글씨가 밖으로 사라지도록 
gsap.timeline ({
  scrollTrigger: {
      trigger:'.workList',
      start:'100% 50%',
      end:'100% 20%',
      scrub:1,
      // markers: true
  }
})

//4-1. clone .title a와 b가 원래대로 서로 반대 방향으로 화면 밖으로 사라지게 해준다. 
.to('.clone .title .a' , {x:  '-100%'}, { x: '0%', ease:'none' , duration: 5 },0)
.to('.clone .title .b' , {x:  '100%'}, { x: '0%', ease:'none' , duration: 5 },0)

});




