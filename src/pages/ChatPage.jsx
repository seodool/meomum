import React from 'react';
import './ChatPage.css';

const Chat = () => {
  return (
    <div id="chatPage" className="page page-chat" style={{ display: "block" }}>
      <header className="chat-header">
        <h2>채팅</h2>
        <button type="button">설정</button>
      </header>

      <section className="chat-ai-card">
        <div className="chat-ai-label">AI</div>
        <p className="chat-ai-sub">
          숙소 생활의 모든 궁금증, 여기서 바로 해결하세요.
        </p>
        <div className="chat-ai-greeting">
          <p className="chat-ai-greeting-line">안녕하세요</p>
          <p className="chat-ai-greeting-line">무엇을 도와드릴까요?</p>
        </div>
        <button className="chat-ai-start-btn" type="button">
          AI와 채팅 시작
        </button>
      </section>

      <section className="chat-list-section">
        <ul className="chat-list">
          <li className="chat-item">
            <div className="chat-avatar chat-avatar-ai">AI</div>
            <div className="chat-texts">
              <div className="chat-name-row">
                <span className="chat-name">AI</span>
                <time className="chat-time">오전 7:20</time>
              </div>
              <div className="chat-preview">이게 안되는데...</div>
            </div>
          </li>
          <li className="chat-item">
            <div className="chat-avatar">🧭</div>
            <div className="chat-texts">
              <div className="chat-name-row">
                <span className="chat-name">라이프 패턴 매니저</span>
                <time className="chat-time">어제</time>
              </div>
              <div className="chat-preview">
                넵, 그러면 3일 후 다시 연락 드리겠습니다.
              </div>
            </div>
          </li>
          <li className="chat-item">
            <div className="chat-avatar">✉️</div>
            <div className="chat-texts">
              <div className="chat-name-row">
                <span className="chat-name">문의</span>
                <time className="chat-time">어제</time>
              </div>
              <div className="chat-preview">이런 상황입니다.</div>
            </div>
          </li>
          <li className="chat-item">
            <div className="chat-avatar">🏡</div>
            <div className="chat-texts">
              <div className="chat-name-row">
                <span className="chat-name">숙소 관리자</span>
                <time className="chat-time">10월 10일</time>
              </div>
              <div className="chat-preview">불편 드려 죄송합니다.</div>
            </div>
          </li>
          <li className="chat-item">
            <div className="chat-avatar">🔔</div>
            <div className="chat-texts">
              <div className="chat-name-row">
                <span className="chat-name">알림</span>
                <time className="chat-time">10월 10일</time>
              </div>
              <div className="chat-preview">예약이 완료되었습니다.</div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Chat;