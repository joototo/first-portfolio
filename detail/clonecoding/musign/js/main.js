// 1. gnb 마우스 오버, 포커스 시 밑줄

$(function(){
    $('.gnb li a').on('mouseenter focus', function(){
        var bar = $(this).position().left; //각각 gnb li a의 position left값을 bar에 저장
        var width = $(this).width(); //각각 gnb li a의 width 값을 width에 저장

        $('span.bar').css({'left': bar + 'px', 'width': width + 'px', 'opacity':1});
        // span.bar의 css를 각각의 변수값으로 변경하고 opacity변경
    });
    $('.gnb li a').on('mouseleave', function(){
        $('span.bar').css({'left':'0', 'width':0, 'opacity':0});
    })
});

// 2. 스크롤애니메이션
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: true
    });
});

// 3. 배경색 변경
$(window).on('scroll resize', function(){
    var scrollTop = 0;
    scrollTop = $(document).scrollTop();
    bgColor();

    function bgColor() {
        if (scrollTop > 1400) {
            $('body').addClass('on');
        } else{
            $('body').removeClass('on');
        }
        if(scrollTop > 2700) {
            $('body').removeClass('on');
        }
    }
});


// 5. 햄버거메뉴

$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');     
    });
    $('.menuOpen .menuWrap .close').on('click', function(){
        $('.menuOpen .menuWrap').removeClass('on');     
    })
});


//svg 길이 구하기
// $(funtion(){
//     $('.svgAni').find('path').each(funtion(1,path){
//         var length = path.getTotalLength();
//         alert(length);
//     })
// });



















