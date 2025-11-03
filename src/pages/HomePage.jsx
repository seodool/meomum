import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>홈</h1>
      <p className="login-button" onClick={() => navigate("/login")}>로그인</p>
    </div>
    
  );
};

export default Home;