import React from 'react';
import './MorePage.css';

const More = () => {
  return (
    <div id="morePage" className="page page-more" style={{ display: "block" }}>
      <header className="more-header">
        <h2>더보기</h2>
      </header>

      <section className="mypage-card">
        <h3 className="mypage-title">마이페이지</h3>
        <div className="mypage-avatar">
          <div className="mypage-avatar-circle">👤</div>
        </div>
        <div className="mypage-link-grid">
          <button className="mypage-link" type="button">
            계정 설정
          </button>
          <button className="mypage-link" type="button">
            내가 남긴 댓글
          </button>
          <button className="mypage-link" type="button">
            과거 진행 내역
          </button>
          <button className="mypage-link" type="button">
            내가 좋아요한 글
          </button>
        </div>
      </section>

      <section className="more-report-card">
        <div className="more-report-header">
          <h3 className="more-report-title">리포트 및 데이터</h3>
          <button className="more-report-more" type="button">
            더보기
          </button>
        </div>
        <article className="report-item">
          <div className="report-row">
            <span className="report-location">강릉 원주</span>
            <time className="report-date">2025.05.03</time>
          </div>
          <p className="report-snippet">
            기상 시간은 평균 오전 7시 30분, 취침은 12시 이후로
            불규칙했습니다. 아침 루틴...
          </p>
        </article>
        <article className="report-item">
          <div className="report-row">
            <span className="report-location">강릉 원주</span>
            <time className="report-date">2025.05.01</time>
          </div>
        </article>
      </section>

      <section className="more-section">
        <ul className="more-list">
          <li className="more-list-item">
            앱 버전<span>V1.0.14</span>
          </li>
          <li className="more-list-item">이용약관</li>
          <li className="more-list-item">공지사항</li>
          <li className="more-list-item">자주 묻는 질문</li>
          <li className="more-list-item">문의하기</li>
        </ul>
      </section>

      <section className="more-section">
        <ul className="more-list">
          <li className="more-list-item">로그아웃</li>
          <li className="more-list-item more-danger">회원탈퇴</li>
        </ul>
      </section>
    </div>
  );
};

export default More;