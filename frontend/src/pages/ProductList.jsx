import React from 'react'; // Removemos useState, useEffect e axios
import ProductCard from '../components/ProductCard';
import './ProductList.css';
import productsData from '../data/products.json'; // IMPORTAÇÃO DIRETA

function ProductList() {
  // Os dados já estão prontos aqui na variável productsData

  return (
    <div className="container product-list-container">
      <div className="list-header">
        <h1>Nossos Produtos</h1>
        <p>Soluções completas em painéis elétricos para sua empresa.</p>
      </div>

      <div className="products-grid">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;