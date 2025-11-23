import React, { useState } from 'react';
import './ReservationPage.css';

const dateLabels = ["all", "10", "11", "12", "13", "end"];

const Reservation = () => {
  const [activeDate, setActiveDate] = useState('11');
  const [missions, setMissions] = useState([true, false, false, false, false]);

  const toggleMission = (index) => {
    setMissions((prev) =>
      prev.map((v, i) => (i === index ? !v : v))
    );
  };

  return (
    <div
      id="reservationPage"
      className="page page-reservation"
      style={{ display: "block" }}
    >
      <header className="reservation-header-custom">
        <h2>한달살이</h2>
        <div className="header-links">
          <span>예약</span>
          <span>상담사 연결</span>
        </div>
      </header>

      <div className="reservation-hero-card">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
          className="reservation-hero-img"
          alt="삼척 정하동"
        />
        <div className="reservation-hero-overlay" />
        <div className="reservation-hero-title">삼척 정하동</div>
        <button className="reservation-hero-btn" type="button">
          둘러보기
        </button>
      </div>

      <section className="date-chip-row">
        {dateLabels.map((label) => (
          <button
            key={label}
            className={
              "date-chip" + (activeDate === label ? " active" : "")
            }
            onClick={() => setActiveDate(label)}
          >
            {label}
          </button>
        ))}
      </section>

      {/* 체크리스트 카드 */}
      <section className="reservation-card">
        <div className="reservation-card-header">
          <h3>체크리스트</h3>
          <span className="link-sm">전체보기</span>
        </div>
        <ul className="mission-list">
          {[
            "오늘의 미션 선택",
            "호수공원 산책하기",
            "카페에서 독서하기",
            "간식 재료 사기",
            "간식 만들기",
          ].map((text, idx) => (
            <li className="mission-item" key={text}>
              <span>{text}</span>
              <div
                className={
                  "mission-checkbox" + (missions[idx] ? " done" : "")
                }
                onClick={() => toggleMission(idx)}
              ></div>
            </li>
          ))}
        </ul>
      </section>

      {/* 오늘의 미션 카드 */}
      <section className="reservation-card">
        <div className="reservation-card-header">
          <h3>오늘의 미션</h3>
          <span className="link-sm">찾아보기</span>
        </div>
        <p className="reservation-subtext">
          하고 싶은것 하나를 선택하세요
        </p>

        <button className="mission-main-button primary" type="button">
          도서관 들려서 책 읽기
        </button>
        <button className="mission-main-button secondary" type="button">
          공방가서 아크릴화 그려보기
        </button>
      </section>

      {/* 일기 카드 */}
      <section className="reservation-card">
        <div className="reservation-card-header">
          <h3>일기</h3>
        </div>
        <p className="diary-text">
          오늘 비가 와서 너무 귀찮았지만, 도서관에서 책을...
        </p>
        <button className="diary-write-btn" type="button">
          글쓰기
        </button>
      </section>

      {/* 루틴 기록 카드 */}
      <section className="reservation-card">
        <div className="reservation-card-header">
          <h3>루틴 기록</h3>
          <span className="link-sm">전체보기</span>
        </div>
        <ul className="routine-list">
          <li className="routine-item">07:14 기상</li>
          <li className="routine-item routine-desc">
            총 수면 6h 45m / 깊은 수면 2h 10m
          </li>
          <li className="routine-item" style={{ marginTop: 10 }}>
            07:45 아침 명상
          </li>
          <li className="routine-item routine-desc">호흡 세션 완료</li>
        </ul>
      </section>

      <button className="reservation-cta-btn-large" type="button">
        <span className="cta-title">상담사 연결</span>
        <span className="cta-desc">
          불안 하거나, 걱정되는 점 및 매니징
        </span>
      </button>
    </div>
  );
};

export default Reservation;