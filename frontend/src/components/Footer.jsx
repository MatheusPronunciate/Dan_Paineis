// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Example: Importing specific brand icons
import './Footer.css'; // Vamos criar este arquivo de CSS

function Footer() {
  return (
    <footer className="footer-container">
      <div className="container"> {/* Já usamos o .container para centralizar */}
        
        <div className="footer-main">
          {/* Bloco 1: Logo e Descrição */}
          <div className="footer-block">
            <Link to="/" className="footer-logo">
              <strong>
                Dan<span className="highlight">Painéis</span>
              </strong>
            </Link>
            <p className="footer-description">
              Referência em segurança e soluções de engenharia,
              com profissionais altamente capacitados.
            </p>
          </div>

          {/* Bloco 2: Navegação */}
          <div className="footer-block">
            <h4 className="footer-title">Navegação</h4>
            <ul className="footer-links">
              <li><Link to="/empresa">Empresa</Link></li>
              <li><Link to="/produtos">Produtos</Link></li>
              <li><Link to="/contato">Contato</Link></li>
              <li><Link to="/informacoes">Informações</Link></li>
            </ul>
          </div>

          {/* Bloco 3: Contatos */}
          <div className="footer-block">
            <h4 className="footer-title">Contatos</h4>
            <ul className="footer-contact">
              <li>Rua Bixio, 28 - Vila Oratório</li>
              <li>São Paulo/SP - CEP: 03192-040</li>
              <li>(11) 2852-5968</li>
            </ul>
          </div>
{/* Bloco 4: Redes Sociais */}
          <div className="footer-block">
            <h4 className="footer-title">Siga-nos</h4>
            <div className="footer-socials">
              <a href="https://www.instagram.com/danpaineis/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
            </div>
        </div>

        {/* --- Rodapé Secundário --- */}
        <div className="footer-secondary">
          <p>Copyright © DanPainéis. Desenvolvido por Matheus Pronunciate</p>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;