// 스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});




// slick
$(function(){
    $('.visual .slide').slick({
       arrows: false,  //화살표
       dots: true, //인디케이트 해제
       autoplay:true, //자동재생
       fade: true,//페이드인효과
       autoplaySpeed: 5000, //재생시간 5초
       pauseOnHover: false, //마우스 오버시 슬라이드 멈춤 해제
       pauseOnFocus: false  //포커스시 슬라이드 멈춤 해제
   });
});



//스크롤 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile: true, //모바일버전시활성화
        once: false //스크롤시 딱 한번만 하고싶을땐 true
    });
});

// 헤더이벤트
var scrollValue = 0;
scrollValue = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function(){
    scrollValue = $(document).scrollTop();
    fixHeader();
})

function fixHeader(){
    if(scrollValue > 200) {
        $('header').addClass('on');
    } else {$('header').removeClass('on');}
}

$(function(){
    $('header .open').on('click', function(){
        $('body').css({'overflow':'hidden'});
        $('header .bg').css({'display':'block'});
        $('header nav').addClass('on');
    });
    $('header .close, header .bg').on('click', function(){
        $('body').css({'overflow':'hidden'});
        $('header .bg').css({'display':'block'});
        $('header nav').removeClass('on');
    });
});
