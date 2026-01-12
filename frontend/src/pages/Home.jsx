// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Home.css';
import productsData from '../data/products.json';

function Home() {
  const featuredProducts = productsData.slice(0, 3);

  return (
    <div className="home-page-wrapper">

      {/* SEÇÃO HERO (Banner) - Ocupa largura total, conteúdo centralizado */}
      <section className="hero-section">
        <div className="container hero-container-inner">
          <div className="hero-content">
            <h1>Soluções de Engenharia</h1>
            <p>Profissionais altamente capacitados para atender às suas necessidades com excelência.</p>
            <Link to="/produtos" className="cta-button">Ver Produtos</Link>
          </div>
        </div>
      </section>

      {/* SEÇÃO INTRO - Centralizada */}
      <section className="intro-section">
        <div className="container">
          <h2>Sobre a DanPainéis</h2>
          <p>
            Seja bem-vindo ao site da DanPainéis. Conheça um pouco mais sobre nossos produtos, localização e história da empresa. Nossa empresa está no mercado há mais de vinte e três anos, atuando com qualidade, atendimento e prazo de entrega diferenciado.
<br></br>
Nossos produtos são montados com componentes de qualidade e de marcas reconhecidas no mercado. Nossos produtos possuem barramentos pintados e contatos elétricos prateados. Os circuitos de comando são devidamente anilhados, obedecendo rigorosamente às normas nacionais e internacionais (NBR, DIN, ANSI E NEMA), bem como a norma de segurança NR-10.
          </p>
        </div>
      </section>

      {/* SEÇÃO DESTAQUES - Centralizada */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Nossos Produtos</h2>
            <Link to="/produtos" className="view-all-link">Ver todos &rarr;</Link>
            <p>    </p>
          </div>

          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO CTA (Chamada) - Fundo colorido total, texto centralizado */}
      <section className="cta-section">
        <div className="container">
          <h2>Precisa de um projeto personalizado?</h2>
          <p>Nossa equipe de engenharia está pronta para desenvolver a solução ideal para você.</p>
          <Link to="/contato" className="cta-button">Fale Conosco</Link>
        </div>
      </section>

    </div>
  );
}

export default Home;