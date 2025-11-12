// src/components/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Sidebar.css'; // Vamos criar este CSS

function Sidebar() {
  const [products, setProducts] = useState([]);
  const { slug } = useParams(); // Pega o slug do produto atual

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Use a sua URL de produção
        const response = await axios.get('https://danpaineis-api.onrender.com/api/products');
        setProducts(response.data);
      } catch (err) {
        console.error("Erro ao buscar produtos para sidebar:", err);
      }
    };
    fetchProducts();
  }, []); // Busca todos os produtos uma vez

  // Filtra o produto que já está na página
  const otherProducts = products.filter(p => p.slug !== slug);

  return (
    <aside className="product-sidebar">
      
      {/* --- Widget 1: Outros Produtos --- */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Produtos</h3>
        <ul className="widget-product-list">
          {otherProducts.map(product => (
            <li key={product.id}>
              <Link to={`/produtos/${product.slug}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Widget 2: Contato --- */}
      <div className="sidebar-widget widget-contact">
        <h3 className="widget-title">Entre em Contato</h3>
        <p>Pelos Telefones</p>
        <span className="phone-number">11 2852-5968</span>
        <span className="phone-number">11 2384-0046</span>
      </div>
      
    </aside>
  );
}

export default Sidebar;