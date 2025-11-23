import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CommunityPage from '../pages/CommunityPage';
import ReservationPage from '../pages/ReservationPage';
import ChatPage from '../pages/ChatPage';
import MorePage from '../pages/MorePage';
import LoginPage from '../pages/LoginPage';
import Layout from '../components/layout/Layout';

function Router() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/community' element={<CommunityPage />}/>
            <Route path='/reservation' element={<ReservationPage />}/>
            <Route path='/chat' element={<ChatPage />}/>
            <Route path='/more' element={<MorePage />}/>
          </Route>

          <Route path='/login' element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
