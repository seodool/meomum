import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import meomumLogo from '/meomum_blue.svg'
import LoginCard from '../components/login/loginCard';
import kakaoIcon from '../assets/kakao.svg';
import naverIcon from '../assets/naver.svg';
import goolgeIcon from '../assets/google.svg';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <img src={meomumLogo} alt="MEOMUM Logo" className="meomum-logo" />

      <section className="title-section">
        <h1 className="login-title">머뭄, 당신의 일상을 이어갑니다</h1>
      </section>

      <section className="login-section">
        <LoginCard 
          backgroundColor = "#FEE500"
          textColor = "#262200"
          icon = {kakaoIcon}
          iconSize = {18}
          text = "카카오로 로그인"
        />
        <LoginCard 
          backgroundColor = "#00C73C"
          textColor = "#FFFFFF"
          icon = {naverIcon}
          iconSize = {16}
          text = "네이버로 로그인"
        />
        <LoginCard 
          backgroundColor = "#FFFFFF"
          textColor = "#000000"
          icon = {goolgeIcon}
          iconSize = {18}
          text = "Google로 로그인"
        />
        <LoginCard 
          backgroundColor = "#ECECEC"
          textColor = "#000000"
          text = "이메일로 로그인"
        />
      </section>
      
      <p className="signup-button" onClick={() => navigate("/")}>이메일 회원가입</p>
    </div>
  );
}

export default LoginPage;