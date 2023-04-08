// 검색창요소.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
//검색창 요소클릭시 실행
searchEl.addEventListener('click', function () {
    searchInputEl.focus();
  });
//검색창 요소 내부 실제 input요소에 포커스시 실행.
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
  });
//검색창 요소 내부 실제 input요소에서 포커스해제시 실행.
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
  });

//페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// 페이지에 스크롤 이벤트를 추가!
window.addEventListener('scroll', function(){
  console.log(this.window.scrollY);
  if(this.window.screenY>500){
    //badges 요소 숨김!
    gsap.to(badgeEl,.6,{
      opacity: 0,
      display: 'none'
    });
    //상단으로 이동
    gsap.to(toTopEl,.6,{
      opacity:1,
      x:0
    });
    
  }else{
    gsap.to(badgeEl,.6,{
      opacity:1,
      display:'block'
    });
    //상단이동
    gsap.to(toTopEl,.6,{
      opacity:0,
      x:100
    });
  }
});
toTopEl.addEventListener('click',function(){
  gsap.to(window,.6,{
    scrollTo: 0
  });
})

//나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
//요소를 하나씩 반복처리
fadeEls.forEach(function(fadeEls,index){
  gsap.to(fadeEls,1,{
    delay: (index + 1) * .7,
    opacity : 1
  });
});

/*swiper api*/
new Swiper('.notice .swiper',{
  direction: 'vertical',//수직 슬라이드
  autoplay: true, //자동재생
  loop : true //반복 재생
});
new Swiper('.promotion .swiper',{
  autoplay:true,
  loop:true,
  slidesPerView:3,
  spaceBetween:10,
  centeredSlides: true,
  pagination: { // 페이지 번호 사용
    el: '.promotion .swiper-pagination', // 페이지 번호 요소
    clickable: true // 사용자의 페이지 번호 제어 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    prevEl: '.promotion .swiper-button-prev', // 이전 버튼 요소
    nextEl: '.promotion .swiper-button-next' // 다음 버튼 요소
  }
});
new Swiper('.awards .swiper', {
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  navigation: { // 슬라이드 이전/다음 버튼 사용
    prevEl: '.awards .swiper-button-prev', // 이전 버튼 요소
    nextEl: '.awards .swiper-button-next' // 다음 버튼 요소
  }
});

// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('section.promotion');
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion');

// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
  if (promotionEl.classList.contains('hide')) {
    promotionEl.classList.remove('hide');
  } else {
    promotionEl.classList.add('hide');
  }
});

/* 부유요소  class에 show가 아떴던이유 이부분이 문제였음 */
/*gsap가아니고 gsap였다...*/
gsap.to('.floating1',1.5,{/*,랑 . 주의*/ 
  delay:1,
  y:15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});
gsap.to('.floating2', 2, {
  delay: .5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});
gsap.to('.floating3', 2.5, {
  delay: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
});

/*요소가 화면에 보여짐 여부에 따른 요소 관리 */
/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy');
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});

/**
 * 올해가 몇 년도인지 계산
 */
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();