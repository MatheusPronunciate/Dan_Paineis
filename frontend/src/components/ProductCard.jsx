// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  // Lógica de segurança: Se o campo image for null ou undefined, usa um placeholder
  // Isso evita que a imagem fique com ícone de "quebrado"
  const imageSrc = product.image ? product.image : '/images/placeholder.jpg';

  return (
    <div className="product-card">
      {/* O link envolve todo o card para facilitar o clique */}
      <Link to={`/produtos/${product.slug}`} className="card-link">

        <div className="card-image-container">
          <img src={imageSrc} alt={product.name} loading="lazy" />
        </div>

        <div className="card-info">
          <h3>{product.name}</h3>
          {/* Se quiser mostrar uma prévia da descrição, descomente abaixo: */}
          {/* <p className="card-desc">{product.description}</p> */}
          <span className="view-more">Ver detalhes &rarr;</span>
        </div>

      </Link>
    </div>
  );
}

export default ProductCard;