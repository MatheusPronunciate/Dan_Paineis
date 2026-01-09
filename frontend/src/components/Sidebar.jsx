import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Sidebar.css';
import productsData from '../data/products.json'; // IMPORTAÇÃO

function Sidebar() {
  const { slug } = useParams();
  // Filtra para não mostrar o produto atual na lista lateral
  const otherProducts = productsData.filter(p => p.slug !== slug);

  return (
    <aside className="product-sidebar">
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