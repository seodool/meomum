import React from 'react';
import './IntroPage.css';
import meomumLogo from '/meomum.svg'

const IntroPage = () => {
  return (
    <div className="intro-screen">
      <img src={meomumLogo} alt="MEOMUM Logo" className="meomum-logo" />
    </div>
  );
};

export default IntroPage;
