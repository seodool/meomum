import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginCard.css';

function LoginCard({ backgroundColor, textColor, icon, text, onClick, iconSize = 24 }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) onClick(); // 원래 이벤트 실행
    navigate('/');
  }

  return (
    <div 
      className="login-card"
      style={{ backgroundColor, color: textColor, border: backgroundColor === '#FFFFFF' ? '1px solid #E5E5EC' : 'none' }}
      onClick={handleClick}
    >
      {icon && <img src={icon} alt="Social Login Icon" className="login-icon" style={{width: iconSize, height: "auto", objectFit: "contain"}}/>}
      <span className="login-text">{text}</span>
    </div>
  );
}

export default LoginCard;