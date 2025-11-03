// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Vamos criar o CSS

// O card recebe um 'product' como propriedade (prop)
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/produtos/${product.slug}`}> {/* Link para a página de detalhe */}
        <div className="product-card-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-card-content">
          <h4>{product.name}</h4>
          <p>Saiba mais &rarr;</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;