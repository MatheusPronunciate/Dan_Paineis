// src/pages/ProductList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; // Nosso card reutilizável
import './ProductList.css'; // CSS específico para esta página

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      setIsLoading(true);
      try {
        // A mágica está aqui: buscamos a rota principal '/api/products'
        const response = await axios.get('https://danpaineis-api.onrender.com/api/products');
        setProducts(response.data);
      } catch (err) {
        console.error("Erro ao buscar todos os produtos:", err);
        setError("Falha ao carregar o catálogo de produtos.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllProducts();
  }, []); // Array vazio, roda apenas uma vez

  return (
    <div className="container product-list-container">
      <div className="list-header">
        <h1>Nosso Catálogo de Produtos</h1>
        <p>Conheça todas as nossas soluções em painéis elétricos, quadros de comando e mais.</p>
      </div>

      {isLoading && <p>Carregando produtos...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!isLoading && !error && (
        // Reutilizando a classe global que movemos para o index.css
        <div className="products-grid"> 
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;