// ================================
// 메인 스크립트 (DOM 로드 이후 실행)
// ================================
document.addEventListener('DOMContentLoaded', function () {

  // ================================
  // Swiper 초기화 (홈에서만 작동)
  // ================================
  let swiper = null;
  const swiperContainer = document.querySelector('.mySwiper');

  if (swiperContainer) {
    swiper = new Swiper('.mySwiper', {
      effect: 'cards',
      grabCursor: true,
      cardsEffect: {
        perSlideOffset: 20,
        perSlideRotate: 6,
        slideShadows: false,
        rotate: true
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination-custom', // HTML에 이 클래스 가진 div 있어야 함
        clickable: true,
      },
      // 숨겼다가 다시 보일 때 레이아웃 깨지는 것 방지
      observer: true,
      observeParents: true,
    });
  }

  // ================================
  // 홈 탭 + 텍스트 + 콘텐츠 전환
  // ================================
  (function() {
    const homeTabs = document.querySelectorAll('.tab-wrapper .tab-btn');
    const slider = document.querySelector('.tab-wrapper .tab-slider');

    const heroTitle = document.querySelector('.hero-text h2');
    const heroSub   = document.querySelector('.hero-text p');

    const swiperWrap       = document.querySelector('.mySwiper');
    const swiperPagination = document.querySelector('.swiper-pagination-custom');
    const categoryWrapper  = document.querySelector('.category-grid-wrapper');

    if (!homeTabs.length || !slider || !heroTitle || !heroSub) return;

    function showRecommend() {
      // 텍스트
      heroTitle.textContent = '어떤 삶을 살고 싶으세요?';
      heroSub.textContent   = '현재 트렌드를 확인해 보세요';

      // 콘텐츠
      if (swiperWrap)       swiperWrap.style.display = 'block';
      if (swiperPagination) swiperPagination.style.display = 'flex';
      if (categoryWrapper)  categoryWrapper.style.display = 'none';

      // 숨겼다가 다시 보여줄 때 Swiper 업데이트
      if (swiper) {
        swiper.update();
      }
    }

    function showCategory() {
      // 텍스트
      heroTitle.textContent = '이런 걸 찾고 있나요?';
      heroSub.textContent   = '좋아하실 라이프 스타일 콘텐츠를 추천드려요';

      // 콘텐츠
      if (swiperWrap)       swiperWrap.style.display = 'none';
      if (swiperPagination) swiperPagination.style.display = 'none';
      if (categoryWrapper)  categoryWrapper.style.display = 'block';
    }

    // 처음 로딩 시 "추천" 상태
    showRecommend();

    homeTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        homeTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const index = Number(tab.dataset.index || 0);
        slider.style.transform = `translateX(${index * 100}%)`;

        if (index === 0) {
          showRecommend();
        } else {
          showCategory();
        }
      });
    });
  })();

  // ================================
  // 커뮤니티 탭
  // ================================
  (function() {
    const commTabs = document.querySelectorAll('.comm-tab-item');
    if (!commTabs.length) return;

    commTabs.forEach(t => {
      t.addEventListener('click', () => {
        commTabs.forEach(x => x.classList.remove('active'));
        t.classList.add('active');
      });
    });
  })();

  // ================================
  // 예약: 날짜 칩
  // ================================
  (function() {
    const chips = document.querySelectorAll('.date-chip');
    if (!chips.length) return;

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(x => x.classList.remove('active'));
        chip.classList.add('active');
      });
    });
  })();

  // ================================
  // 예약: 미션 체크박스 토글
  // ================================
  // (function() {
  //   const boxes = document.querySelectorAll('.mission-checkbox');
  //   if (!boxes.length) return;

  //   boxes.forEach(box => {
  //     box.addEventListener('click', () => {
  //       box.classList.toggle('done');
  //     });
  //   });
  // })();


  // ================================
  // 지도 검색: 하단 카드 드래그 & 스냅백
  // ================================
  (function() {
    const card = document.querySelector('.map-info-card');
    if (!card) return;

    let startY = 0;
    let isDragging = false;
    const snapThreshold = 100; // 최대 끌어올릴 수 있는 픽셀 높이

    const onTouchStart = (e) => {
      startY = e.touches ? e.touches[0].clientY : e.clientY;
      isDragging = true;
      card.style.transition = 'none';
    };

    const onTouchMove = (e) => {
      if (!isDragging) return;

      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const diffY = startY - clientY;

      if (diffY > 0) {
        const moveDistance = Math.min(diffY * 0.5, snapThreshold);
        card.style.transform = `translateY(-${moveDistance}px)`;
        e.preventDefault();
      } else {
        card.style.transform = 'translateY(0)';
      }
    };

    const onTouchEnd = () => {
      if (!isDragging) return;
      isDragging = false;

      card.style.transition = 'transform 0.3s ease-out';
      card.style.transform = 'translateY(0)';
    };

    // 터치 이벤트
    card.addEventListener('touchstart', onTouchStart, { passive: true });
    card.addEventListener('touchmove', onTouchMove, { passive: false });
    card.addEventListener('touchend', onTouchEnd);

    // 마우스 이벤트
    card.addEventListener('mousedown', onTouchStart);
    document.addEventListener('mousemove', onTouchMove);
    document.addEventListener('mouseup', onTouchEnd);
  })();

});
