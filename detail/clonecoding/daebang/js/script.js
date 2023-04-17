//01.gnb
$(function(){
    $('.gnb > li > a').on('mouseenter focus', function(){
         var index = $('.gnb > li > a').index($(this));
         //alert(index);
       
         $('.gnb ul.inner').removeClass('on');
         $('.gnb .inner:eq('+ index +')').addClass('on');
    });
    $('header').on('mouseleave', function(){
        $('.gnb ul.inner').removeClass('on');
    })
})

//fixHeader
var scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();

//윈도우창조절시 이벤트
$(window).on('scroll resize', function(){
   scrollTop = $(document).scrollTop();
   fixHeader();
});

//고정헤더함수
function fixHeader(){
    if(scrollTop > 150) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}

//splitting
$(function(){ Splitting(); })

//slick.js
$(function(){
    $('.visual .slide').slick({
        arrows: true,
        dots: true,
        autoplay :true,
        fade: true,
        autoplaySpeed : 7000,
        pauseOnHover: false,
        pauseOnFocus :false
    });
    $('.slick-prev').text("prev");

   //두번째 슬라이드
   $('.slide2').slick({
    arrows: false, 
    dots: true, 
    autoplay: true, //자동재생   
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 6000, 
    pauseOnHover:true, //호버시 멈추도록 true로 바꿔줌
    pauseOnFocus:true //호버시 멈추도록 true로 바꿔줌
   });
   $('.slide2 #slick-slide-control10').text("서울 마곡지구 업무용지");
   $('.slide2 #slick-slide-control11').text("서울 마곡지구 대방디엠시티2차");
   $('.slide2 #slick-slide-control12').text("화성 동탄 1차 대방디엠시티 더 센텀");
   $('.slide2 #slick-slide-control13').text("광주 수완 대방노블랜드6차");

});


// 스크롤애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 
