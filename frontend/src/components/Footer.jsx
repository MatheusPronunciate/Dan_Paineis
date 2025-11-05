// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Example: Importing specific brand icons
import './Footer.css'; // Vamos criar este arquivo de CSS

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content container">
      <div className="footer-content">
        <div className="footer-info">
          <h4>DanPainéis - Montagem e Comércio de Painéis Ltda</h4>
          <p>Rua Bixio, 28 - Vila Oratório</p>
          <p>São Paulo/SP - CEP: 03192-040</p>
          <p><strong>(11) 2852-5968 / (11) 2384-0046</strong></p>
        </div>
        <div className="footer-links">
          <h4>Navegação</h4>
          <Link to="/">Home</Link>
          <Link to="/empresa">Empresa</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/mapa-do-site">Mapa do site</Link>
        </div>
        <div className="footer-social">
          <h4>Redes</h4>
          
          <p>Siga-nos!</p>
          <div className="social-icons">
           
<a href="https://www.instagram.com/danpaineis/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} size="lg" />
</a>
<a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faWhatsapp} size="lg" />
</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © DanPainéis. Desenvolvido por Matheus Pronunciate</p>
        {/* Você pode remover esses links W3C, eles são de validação antiga */}
      </div>
      
      </div>
    </footer>
  );
}

export default Footer;