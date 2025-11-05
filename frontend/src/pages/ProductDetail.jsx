// src/pages/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Importe o useParams e Link
import axios from 'axios';
import './ProductDetail.css'; // CSS para os detalhes

function ProductDetail() {
  // 1. Pega o parâmetro 'slug' da URL (vamos ajustar a Rota no App.jsx)
  const { slug } = useParams(); 

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        // 2. Faz a chamada de API usando o slug
        const response = await axios.get(`https://danpaineis-api.onrender.com/api/products/${slug}`);
        setProduct(response.data);
      } catch (err) {
        console.error(`Erro ao buscar produto ${slug}:`, err);
        if (err.response && err.response.status === 404) {
          setError("Produto não encontrado.");
        } else {
          setError("Falha ao carregar o produto.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [slug]); // 3. IMPORTANTE: O useEffect depende do 'slug'
               // Se o slug na URL mudar, a API é chamada de novo.

  // --- Estados de Renderização ---
  if (isLoading) {
    return <p>Carregando detalhes do produto...</p>;
  }

  if (error) {
    return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>;
  }

  if (!product) {
    // Isso não deve acontecer se o loading/error funcionar, mas é uma boa prática
    return <p>Produto não disponível.</p>;
  }

  // --- Renderização de Sucesso ---
  return (
    <div className="product-detail-container">
      <div className="product-detail-header">
        <Link to="/produtos" className="back-link">&larr; Voltar ao catálogo</Link>
        <h1>{product.name}</h1>
      </div>

      <div className="product-detail-layout">
        <div className="product-detail-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h3>Descrição do Produto</h3>
          <p>{product.description}</p>

          {/* Você pode adicionar mais campos aqui se eles existirem no JSON 
              (ex: especificações técnicas, dimensões, etc.) 
          */}

          <Link to="/contato" className="quote-button">
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;