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





//  메뉴
$(function(){
  $('.menuOpen').on('click', function(){
      $('.menuWrap').addClass('on');     
  });
  $('.menuWrap .close').on('click', function(){
      $('.menuWrap').removeClass('on');     
  })
});



