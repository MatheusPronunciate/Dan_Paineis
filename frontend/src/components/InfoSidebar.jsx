import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Reutilizamos o CSS da Sidebar que já criamos!

function InfoSidebar() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    // Busca a lista de links de informações
    axios.get('https://danpaineis-api.onrender.com/api/infos')
      .then(res => setInfos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <aside className="product-sidebar">
      <div className="sidebar-widget">
        {/* Título amarelo igual ao da imagem */}
        <h3 className="widget-title">Informações</h3>
        <ul className="widget-product-list">
          {infos.map(item => (
            <li key={item.id}>
              <Link to={`/informacoes/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default InfoSidebar;