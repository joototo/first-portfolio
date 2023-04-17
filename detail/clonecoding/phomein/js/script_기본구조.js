'use strict';

//1. 풀페이지 스크롤
    $(function() {
      $('#fullpage').fullpage({
        fingersonly: true,
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
        menu: '.rightNav'
      });
   });