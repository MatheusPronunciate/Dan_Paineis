// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

function Layout() {
  return (
    <div>
      <Navbar />

      {/* DE:
        <main style={{ minHeight: '80vh', padding: '20px' }}>
      */}

      {/* PARA:
        Damos a ele uma classe que cuidará do centramento.
      */}
      <main className="main-container">
        <Outlet />
      </main>

      <Footer />

      <CookieBanner />
    </div>
  );
}

export default Layout;