import React, { useState } from 'react';
import './CommunityPage.css';

const Community = () => {
  const [activeTab, setActiveTab] = useState('추천');
  const tabs = ['추천', '공지사항', '이벤트/혜택', '후기', '매거진', '게시판'];

  return (
    <div id="communityPage" className="page page-community" style={{ display: "block" }}>
      <header className="comm-header">
        <h2>커뮤니티</h2>
        {/* <svg className="comm-header-icon" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg> */}
      </header>

      <nav className="comm-tabs">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={
              "comm-tab-item" + (activeTab === tab ? " active" : "")
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </nav>

      <div className="comm-banner">
        <div className="comm-banner-overlay">
          <span className="comm-banner-label">공지사항</span>
          <div className="comm-banner-title">머뭄 서비스 안내</div>
        </div>
      </div>

      {/* 이하 섹션은 원본 HTML 그대로 JSX로 변환 */}
      <section className="comm-section">
        <div className="comm-section-header">
          <div>
            <div className="comm-title">이런걸 찾고 있나요?</div>
            <div className="comm-subtitle">
              좋아하실 라이프 스타일 콘텐츠를 추천드려요
            </div>
          </div>
        </div>
        <div className="comm-scroll-row">
          <div className="cat-card">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400"
              className="cat-img"
              alt=""
            />
            <div className="cat-overlay">
              <span className="cat-text">반려동반</span>
            </div>
          </div>
          <div className="cat-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400"
              className="cat-img"
              alt=""
            />
            <div className="cat-overlay">
              <span className="cat-text">바다</span>
            </div>
          </div>
          <div className="cat-card">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400"
              className="cat-img"
              alt=""
            />
            <div className="cat-overlay">
              <span className="cat-text">시골살이</span>
            </div>
          </div>
          <div className="cat-card">
            <img
              src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400"
              className="cat-img"
              alt=""
            />
            <div className="cat-overlay">
              <span className="cat-text">산</span>
            </div>
          </div>
        </div>
      </section>

      <section className="comm-section">
        <div className="comm-section-header">
          <div className="comm-title">HOT 리뷰</div>
        </div>
        <div className="review-grid">
          <article className="review-card">
            <div className="review-img-box">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400"
                className="review-img"
                alt=""
              />
            </div>
            <h4 className="review-title">취업 전, 필요했던 시간</h4>
            <p className="review-desc">
              앞으로 무엇을 하며 살아야 할지 모르겠고, 졸업은 했지만
              이대로 사는 게 맞는지...
            </p>
          </article>
          <article className="review-card">
            <div className="review-img-box">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400"
                className="review-img"
                alt=""
              />
            </div>
            <h4 className="review-title">번아웃에서 벗어나기</h4>
            <p className="review-desc">
              지쳐서 아무것도 하기 싫었는데, 작은 기록부터 시작하니 마음이
              한결 가벼워졌...
            </p>
          </article>
        </div>
      </section>

      <section className="comm-section">
        <div className="comm-section-header">
          <div className="comm-title">매거진</div>
          <div className="comm-more-link">더보기</div>
        </div>
        <div className="comm-scroll-row">
          <article className="magazine-card">
            <div className="mag-img-box">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400"
                className="mag-img"
                alt=""
              />
            </div>
            <div className="mag-content">
              <h4 className="mag-title">디지털에서 벗어나서</h4>
              <p className="mag-desc">
                하루 종일 손에 쥔 스마트폰이 우리의 시선을 가리고 있습니다.
                잠시 내려놓는 순간...
              </p>
            </div>
          </article>
          <article className="magazine-card">
            <div className="mag-img-box">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?w=400"
                className="mag-img"
                alt=""
              />
            </div>
            <div className="mag-content">
              <h4 className="mag-title">휴식이 곧 생산성</h4>
              <p className="mag-desc">
                과로와 번아웃 사이에서 진짜 회복은 '아무것도 하지 않음'에서
                시작됩니다.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="comm-section">
        <div className="comm-section-header">
          <div className="comm-title">그룹 & 챌린지</div>
          <div className="comm-more-link">더보기</div>
        </div>
        <div className="group-grid">
          <div className="group-card gc-blue">운동</div>
          <div className="group-card gc-purple">미라클 모닝</div>
          <div className="group-card gc-pink">식단</div>
          <div className="group-card gc-orange">감사 일기</div>
          <div className="group-card gc-green">독서</div>
          <div className="group-card gc-navy">습관 만들기</div>
        </div>
      </section>

      <section className="comm-section" style={{ marginBottom: 20 }}>
        <div className="comm-section-header">
          <div className="comm-title">오늘의 질문</div>
        </div>
        <div className="qna-box">
          <h4 className="qna-title">Q. 요즘 나를 제일 안정시키는 건?</h4>
          <ul className="qna-list">
            <li className="qna-item">
              <span>조용한 밤 산책</span>
              <span className="qna-time">6분 전</span>
            </li>
            <li className="qna-item">
              <span>그냥 혼자 있는 시간</span>
              <span className="qna-time">3분 전</span>
            </li>
            <li className="qna-item">
              <span>아침마다 커피 내릴 때</span>
              <span className="qna-time">1분 전</span>
            </li>
            <li className="qna-item">
              <span>운동 끝나고 샤워하고 나왔을 때</span>
              <span className="qna-time">방금</span>
            </li>
          </ul>
          <button className="qna-btn">한줄 남기기</button>
        </div>
      </section>
    </div>
  );
};

export default Community;