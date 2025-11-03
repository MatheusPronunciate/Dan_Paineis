// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; // Importe seu card
import './Home.css'; // CSS para a Home

function Home() {
  // Estado para guardar os produtos e para controle de loading/erro
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar os dados
    const fetchFeaturedProducts = async () => {
      try {
        // Use a URL do seu backend (não esqueça do http://)
        const response = await axios.get('http://localhost:3001/api/products/featured');
        setFeaturedProducts(response.data);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        setError("Não foi possível carregar os produtos. Tente novamente mais tarde.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []); // O array vazio [] faz o useEffect rodar apenas uma vez (on mount)

  return (
  <>

      {/* 1. Seção Hero (Banner) */}
      <section className="hero-section" style={{ backgroundImage: `url('https://i.imgur.com/link-para-banner.jpg')` }}>
        <div className="container">
          <div className="hero-content">
            <h1>Referência em segurança</h1>
            <p>Com profissionais altamente capacitados para atender às suas necessidades.</p>
            <a href="/contato" className="hero-button">Conheça nossa empresa</a>
          </div>
        </div>  
      </section>

      {/* 2. Seção "Sobre" (Resumo) */}
      <div className="container">
      <section className="about-section">
        <h2>DanPainéis - Montagem e Comércio de Painéis Ltda</h2>
        <p>Seja bem-vindo ao site da DanPainéis. Conheça um pouco mais sobre nossos produtos, localização e história da empresa...</p>
        {/* Adicione o resto do texto e o botão "Saiba mais" */}
      </section>

      {/* 3. Seção "Produtos em Destaque" */}
      <section className="featured-products-section">
        <h2>Produtos em Destaque</h2>

        {/* Lógica de exibição */}
        {isLoading && <p>Carregando produtos...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!isLoading && !error && (
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

    </div>
  </>
  );
}

export default Home;