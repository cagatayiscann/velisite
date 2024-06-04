import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from '../HomePage/HomePage';
import HomePage2 from '../HomePage2/HomePage2';

import AboutPage from '../AboutPage/AboutPage';

import PracticeSinglePage from '../PracticeSinglePage/PracticeSinglePage';

import PracticePage from '../PracticePage/PracticePage';

import ContactPage from '../ContactPage/ContactPage';
import LoginPage from '../LoginPage';
import SignUpPage from '../SignUpPage';
import ForgotPassword from '../ForgotPassword';

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="home-2" element={<HomePage2 />} />

          <Route path="about" element={<AboutPage />} />
          <Route path="practice" element={<PracticePage />} />
          <Route
            path="practice-single/:slug"
            element={<PracticeSinglePage />}
          />

          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
