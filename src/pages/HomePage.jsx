import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import './HomePage.css';

const slides = [
  {
    title: "발리에서의<br>디지털 노마드?",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "제주도 푸른밤<br>한 달 살기",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "스위스<br>힐링 여행",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "파리<br>예술 기행",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "그리스 산토리니<br>낭만 여행",
    img: "https://images.unsplash.com/photo-1522814234026-6466185a5390?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "태국 푸켓에서<br>요가 명상",
    img: "https://images.unsplash.com/photo-1517409540030-97b0a3f901a1?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "미국 로드트립<br>대자연 탐험",
    img: "https://images.unsplash.com/photo-1506197603052-3be91368c227?q=80&w=800&auto=format&fit=crop",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("추천");

  return (
    <div id="homePage" className="page page-home" style={{ display: "block" }}>
      <header>
        <h1>MEOMUM</h1>
        <p className="login-button" onClick={() => navigate("/login")}>로그인</p>
      </header>
      
      <div className="search-wrapper">
        <div className="search-box">
          <svg className="search-icon" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="search-text"
            placeholder="검색을 시작해 보세요"
          />
        </div>
      </div>

      <div className="home-main-panel">
        <div className="tab-container">
          <div className="tab-wrapper">
            <div
              className={
                "tab-btn" + (activeTab === "추천" ? " active" : "")
              }
              onClick={() => setActiveTab("추천")}
            >
              추천
            </div>
            <div
              className={
                "tab-btn" + (activeTab === "카테고리" ? " active" : "")
              }
              onClick={() => setActiveTab("카테고리")}
            >
              카테고리
            </div>
          </div>
        </div>

        <div className="hero-text">
          <h2>어떤 삶을 살고 싶으세요?</h2>
          <p>현재 트렌드를 확인해 보세요</p>
        </div>

        <Swiper
          className="mySwiper"
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Pagination]}
          loop={true}
          pagination={{ clickable: true }}
          cardsEffect={{
            perSlideOffset: 20,
            perSlideRotate: 6,
            slideShadows: false,
            rotate: true,
          }}
        >
          {slides.map((s, idx) => (
            <SwiperSlide key={idx}>
              <img src={s.img} className="card-img" alt="" />
              <div className="card-overlay">
                <div
                  className="card-title"
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <svg className="heart-icon" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="cta-area">
          <button className="cta-btn">바로 떠나기</button>
        </div>
      </div>
    </div>
  );
};

export default Home;