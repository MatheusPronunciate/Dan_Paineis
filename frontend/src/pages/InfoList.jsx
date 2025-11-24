// src/pages/InfoList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InfoSidebar from '../components/InfoSidebar';
import './ProductDetail.css'; // Reutilizamos o layout grid que já criamos!

function InfoList() {
  const [infos, setInfos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Busca a lista do seu backend
    axios.get('https://danpaineis-api.onrender.com/api/infos')
      .then(response => {
        setInfos(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar infos", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container product-detail-container">
      
      {/* Coluna Principal: Lista de Artigos */}
      <main className="product-detail-main">
        <h1 className="product-title">Informações Técnicas</h1>
        
        {isLoading ? (
          <p>Carregando informações...</p>
        ) : (
          <div className="info-grid">
            {infos.map(info => (
              <div key={info.id} style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--cor-borda)' }}>
                <Link to={`/informacoes/${info.slug}`} style={{ textDecoration: 'none' }}>
                  <h3 style={{ color: 'var(--cor-texto)', fontFamily: 'Archivo, sans-serif', marginBottom: '0.5rem' }}>
                    {info.title}
                  </h3>
                </Link>
                <Link 
                  to={`/informacoes/${info.slug}`} 
                  style={{ color: 'var(--cor-highlight)', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase', fontSize: '0.9rem' }}
                >
                  Ler mais &rarr;
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Coluna da Direita: Sidebar */}
      <InfoSidebar />
      
    </div>
  );
}

export default InfoList;