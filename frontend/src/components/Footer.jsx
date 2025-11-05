// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
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
          {/* Adicione links para redes sociais se houver */}
          <p>Siga-nos!</p>
          {/* Ex: <a href="..." target="_blank">Instagram</a> */}
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