// src/components/Navbar.jsx
import React, { useState } from 'react'; // 1. Importe o useState
import { Link } from 'react-router-dom';
import './Navbar.css';


import logo from '../assets/logo.webp'; 

function Navbar() {
  // 2. Adicione o estado para controlar o menu mobile
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="navbar-container">
      <div className="container navbar-inner-container">
      <div className="navbar-logo">
        <Link to="/" onClick={() => setMenuAberto(false)}>
          {/* <img src={logo} alt="DanPainéis Logo" /> */}
          <strong>DanPainéis</strong>
        </Link>
      </div>

      {/* 3. Botão Hambúrguer (só aparece no mobile) */}
      <button 
        className="navbar-toggle" 
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {/* Cria o ícone (3 barras) com CSS */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* 4. Adicione a classe 'open' condicionalmente
        E mova o navbar-contact para DENTRO dos links
      */}
      <nav className={menuAberto ? "navbar-links open" : "navbar-links"}>
        <Link to="/" onClick={() => setMenuAberto(false)}>Home</Link>
        <Link to="/empresa" onClick={() => setMenuAberto(false)}>Empresa</Link>
        <Link to="/produtos" onClick={() => setMenuAberto(false)}>Produtos</Link>
        <Link to="/informacoes" onClick={() => setMenuAberto(false)}>Informações</Link>
        <Link to="/contato" onClick={() => setMenuAberto(false)}>Contato</Link>
        
        {/* Movido para dentro da navegação para funcionar bem no mobile */}
        <div className="navbar-contact-mobile">
          <span>📞 (11) 2852-5968</span>
        </div>
      </nav>

      {/* 5. Deixe a versão desktop do contato separada */}
      <div className="navbar-contact-desktop">
        <span>📞 (11) 2852-5968</span>
      </div>
      </div>  
    </header>
  );
}

export default Navbar;