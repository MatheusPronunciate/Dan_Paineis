// src/components/CookieBanner.jsx
import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se já existe o consentimento salvo
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Salva a decisão no navegador do usuário
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          Utilizamos cookies para melhorar sua experiência e salvar suas preferências.
          Ao continuar navegando, você concorda com nossa política de privacidade.
        </p>
        <button onClick={handleAccept} className="cookie-btn">
          Entendi e Aceito
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;