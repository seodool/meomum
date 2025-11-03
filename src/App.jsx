import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import IntroPage from './pages/IntroPage';
import Router from './router/Router';

function App() {
  // 세션 스토리지에 따라 인트로 화면 초기 상태 결정
  const [showIntro, setShowIntro] = useState(() => 
    sessionStorage.getItem('introShown') !== 'true'
  );

  useEffect(() => {
    if (!showIntro) return;

    const timer = setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem('introShown', 'true');
    }, 1500);

    // 클린업: 컴포넌트 언마운트 또는 showIntro 변경 시 타이머 제거
    return () => clearTimeout(timer);
  }, [showIntro]);

  return (
    <div className={showIntro ? 'intro-bg' : 'main-bg'}>
      {showIntro ? <IntroPage /> : <Router />}
    </div>
  );
}

export default App;