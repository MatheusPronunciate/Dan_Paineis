// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importe o Link
import ProductCard from '../components/ProductCard'; // Importe seu card
import './Home.css'; // CSS para a Home
import heroBackground from '../assets/fundo_tec.jpg'; // Importe a imagem

function Home() {
  // Estado para guardar os produtos e para controle de loading/erro
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar os dados
    const fetchFeaturedProducts = async () => {
      try {
        
        const response = await axios.get('https://danpaineis-api.onrender.com/api/products/featured');
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
      {/* 1. NOVA SEÇÃO HERO (com fundo 100% azul) */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBackground})` }}>
        {/* Container para centralizar o conteúdo */}
        <div className="container hero-content">
          <span className="hero-subtitle">Referência em Segurança</span>
          <h1 className="hero-title">
            Soluções de Engenharia Multi-Disciplinada
          </h1>
          <p className="hero-text">
            Profissionais altamente capacitados para atender às suas necessidades com excelência.
          </p>
          <a href="/contato" className="hero-button">
            Consulte Agora
          </a>
        </div>
      </section>

      {/* 2. SEÇÃO "SOBRE" (Agora dentro de um container) */}
      <div className="container">
        <section className="about-section">
          <h2>DanPainéis - Montagem e Comércio de Painéis Ltda</h2>
          <p>
            Seja bem-vindo ao site da DanPainéis. Conheça um pouco mais sobre nossos produtos, localização e história da empresa.
            Nossa empresa está no mercado há mais de dezoito anos, atuando com qualidade, atendimento e prazo de entrega diferenciado.
          </p>
        </section>

        {/* 3. SEÇÃO "PRODUTOS EM DESTAQUE" (Dentro do mesmo container) */}
        <section className="featured-products-section">
          <h2>Produtos em Destaque</h2>
          
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