// ================================
// Swiper 초기화 (홈에서만 작동)
// ================================
var swiper = null;
var swiperContainer = document.querySelector('.mySwiper');
if (swiperContainer) {
  swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    cardsEffect: {
      perSlideOffset: 20,
      perSlideRotate: 6,
      slideShadows: false,
      rotate: true
    },
    loop: true,

    pagination: {
      el: ".swiper-pagination-custom",
      clickable: true,

    },
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
(function() {
  const boxes = document.querySelectorAll('.mission-checkbox');
  if (!boxes.length) return;

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      box.classList.toggle('done');
    });
  });
})();
// ================================
// Swiper 초기화 (홈에서만 작동)
// ================================
var swiper = null;
var swiperContainer = document.querySelector('.mySwiper');
if (swiperContainer) {
  swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    cardsEffect: {
      perSlideOffset: 20,
      perSlideRotate: 6,
      slideShadows: false,
      rotate: true
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination-custom",
      clickable: true,
    },
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
(function() {
  const boxes = document.querySelectorAll('.mission-checkbox');
  if (!boxes.length) return;

  boxes.forEach(box => {
    box.addEventListener('click', () => {
      box.classList.toggle('done');
    });
  });
})();


// ================================
// 지도 검색: 하단 카드 드래그 & 스냅백 (Snap-back)
// ================================
(function() {
  const card = document.querySelector('.map-info-card');
  if (!card) return;

  let startY = 0;
  let isDragging = false;
  const snapThreshold = 100; // 최대 끌어올릴 수 있는 픽셀 높이

  // 터치 시작
  const onTouchStart = (e) => {
    // e.type === 'mousedown'은 마우스 이벤트 지원을 위한 코드입니다.
    startY = e.touches ? e.touches[0].clientY : e.clientY;
    isDragging = true;
    card.style.transition = 'none'; // 드래그 중에는 애니메이션 비활성화
  };

  // 터치 이동 중
  const onTouchMove = (e) => {
    if (!isDragging) return;

    // 현재 Y 위치 계산
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const diffY = startY - clientY; // 드래그한 거리 (위로 드래그하면 양수)

    // 카드는 아래로만 당겨지거나, 위로 최대 snapThreshold까지만 움직이도록 제한
    if (diffY > 0) {
      // 위로 드래그 (끌어올리기)
      // 부드러운 당김 효과를 위해 0.5배 속도로 움직임
      const moveDistance = Math.min(diffY * 0.5, snapThreshold); 
      card.style.transform = `translateY(-${moveDistance}px)`;
    } else {
      // 아래로 드래그 (당기기): 위치 변화 없음 (0으로 고정)
      card.style.transform = 'translateY(0)'; 
    }
  };

  // 터치 끝 (스냅백 로직)
  const onTouchEnd = () => {
    if (!isDragging) return;
    isDragging = false;

    // 드래그가 끝나면 transform을 제거하고 transition을 다시 활성화하여 제자리로 복귀
    card.style.transition = 'transform 0.3s ease-out';
    card.style.transform = 'translateY(0)'; 
  };

  // 이벤트 리스너 연결
  card.addEventListener('touchstart', onTouchStart, { passive: true });
  card.addEventListener('touchmove', onTouchMove, { passive: false });
  card.addEventListener('touchend', onTouchEnd);
  
  // 마우스 이벤트 지원
  card.addEventListener('mousedown', onTouchStart, { passive: true });
  document.addEventListener('mousemove', onTouchMove, { passive: false });
  document.addEventListener('mouseup', onTouchEnd);

})();