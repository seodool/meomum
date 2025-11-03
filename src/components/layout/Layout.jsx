import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  const location = useLocation();

  // Navbar를 숨길 페이지 목록
  const hiddenPaths = ['/login'];
  const hideNavbar = hiddenPaths.includes(location.pathname);

  return (
    <>
      {/* 페이지 콘텐츠 */}
      <Outlet />
      
      {/* 조건부 렌더링 */}
      {!hideNavbar && <Navbar />}
    </>
  );
};

export default Layout;
