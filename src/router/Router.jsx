import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Layout from '../components/layout/Layout';

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/community' />
            <Route path='/reservation' />
            <Route path='/chat' />
            <Route path='/more' />
          </Route>

          <Route path='/login' element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Router;
