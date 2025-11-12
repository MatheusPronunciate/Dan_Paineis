// src/pages/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Lightbox from "yet-another-react-lightbox"; // O Lightbox que instalamos
import "yet-another-react-lightbox/styles.css";

import Sidebar from '../components/Sidebar'; // Importe a nova Sidebar
import './ProductDetail.css';

function ProductDetail() {
  const { slug } = useParams(); 
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Estado para o Lightbox
  const [openLightbox, setOpenLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://danpaineis-api.onrender.com/api/products/${slug}`);
        setProduct(response.data);
      } catch (err) {
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
  }, [slug]);

  // --- Funções do Lightbox ---
  const openImage = (index) => {
    setLightboxIndex(index);
    setOpenLightbox(true);
  };
  
  const slides = product?.galleryImages.map(imgUrl => ({ src: imgUrl })) || [];

  // --- Estados de Renderização ---
  if (isLoading) {
    return <div className="container"><p>Carregando detalhes do produto...</p></div>;
  }
  if (error) {
    return <div className="container"><p style={{ color: 'red' }}>{error}</p></div>;
  }
  if (!product) {
    return <div className="container"><p>Produto não disponível.</p></div>;
  }

  // --- Renderização Principal ---
  return (
    <>
      <div className="container product-detail-container">
        
        {/* Coluna Principal (Esquerda) */}
        <main className="product-detail-main">
          
          {/* 1. Breadcrumbs */}
          <nav className="breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/produtos">Produtos</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>

          {/* 2. Título */}
          <h1 className="product-title">{product.name}</h1>

          {/* 3. Galeria de Imagens */}
          <div className="product-gallery">
            {product.galleryImages && product.galleryImages.map((image, index) => (
              <div 
                className="gallery-image" 
                key={index}
                onClick={() => openImage(index)}
              >
                <img src={image} alt={`${product.name} - imagem ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* 4. Descrição em Tabela */}
          <div className="description-section">
            <h3 className="description-title">Descrição</h3>
            <table className="description-table">
              <tbody>
                {product.specifications && product.specifications.map((spec, index) => (
                  <tr key={index}>
                    <td className="spec-property">{spec.property}</td>
                    <td className="spec-value">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        
        </main>
        
        {/* Coluna da Sidebar (Direita) */}
        <Sidebar /> {/* Nosso novo componente! */}

      </div>

      {/* Componente Lightbox (fica fora do layout) */}
      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        slides={slides}
        index={lightboxIndex}
      />
    </>
  );
}

export default ProductDetail;