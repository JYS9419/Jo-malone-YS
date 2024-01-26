// header
$(document).ready(function() {
  // 헤더 메뉴 아이콘 1 클릭 이벤트
  $(".headermenuicon1 a").on("click", function(e) {
    e.preventDefault(); // 기본 이벤트 방지 (링크 이동 방지)

    // headermenuicon2의 표시 여부를 토글
    $(".headermenuicon2").fadeIn(600).toggleClass("show");
  });

  // 헤더 메뉴 아이콘 2 이미지 클릭 이벤트
$(".headermenuicon2 img").on("click", function(e) {
  e.preventDefault(); // 기본 이벤트 방지 (링크 이동 방지)

  // headermenuicon2 초기화 (숨김)
  $(".headermenuicon2").fadeOut(600).removeClass("show");
});
});


// 1p - 아코디언
function toggleAnimation(element) {
    element.classList.toggle('is-animated');
  
    // 클릭한 박스에 클래스를 추가
    element.classList.add('clicked');
  }

// 아코디언 >> 2p, 3p, 4p, 5p 이동
// 아코디언-1 >> 2p 이동
$(document).ready(function() {
  // 아코디언 클릭 이벤트
  $(".accordion_01").on("click", function (e) {
    e.preventDefault(); // 기본 이벤트 방지 (링크 이동 방지)

    // How_to_use_Corong으로 스크롤 애니메이션
    $("html, body").animate({
      scrollTop: $(".Today").offset().top
    }, 700);
  });
});

// 아코디언-2 >> 3p 이동
$(document).ready(function() {
  // 아코디언 클릭 이벤트
  $(".accordion_02").on("click", function (e) {
    e.preventDefault(); // 기본 이벤트 방지 (링크 이동 방지)

    // How_to_use_Corong으로 스크롤 애니메이션
    $("html, body").animate({
      scrollTop: $(".main_3p").offset().top
    }, 900);
  });
});

// 아코디언-3 >> 4p 이동
$(document).ready(function() {
  // 아코디언 클릭 이벤트
  $(".accordion_03").on("click", function (e) {
    e.preventDefault(); // 기본 이벤트 방지 (링크 이동 방지)

    // How_to_use_Corong으로 스크롤 애니메이션
    $("html, body").animate({
      scrollTop: $(".bg1").offset().top
    }, 1100);
  });
});

// 아코디언-4 >> 5p 이동
$(document).ready(function() {
  // 아코디언 클릭 이벤트
  $(".accordion_04").on("click", function (e) {
    e.preventDefault(); // 기본 이벤트 방지 (링크 이동 방지)

    // How_to_use_Corong으로 스크롤 애니메이션
    $("html, body").animate({
      scrollTop: $(".main_5p").offset().top
    }, 1100);
  });
});

  
// 6p - 상단 이동 화살표
$(function(){

  // 하단화살표 클릭시 최상단으로 이동
  $(".jomalone-logo, .btnTop").on("click", function () {
      $("html, body").animate({
          scrollTop: 0
      }, 700);
  });
  // 하단 버튼이 스크롤 500픽셀 도달시 나타남
  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
          $(".btnTop").fadeIn();
      } else {
          $(".btnTop").fadeOut();
      }
  });

});