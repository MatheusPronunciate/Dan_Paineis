import React from 'react';
import { Link } from 'react-router-dom';
import './InfoList.css';
import infosData from '../data/infos.json'; // IMPORTAÇÃO DIRETA

function InfoList() {
  return (
    <div className="container info-list-container">
      <div className="list-header">
        <h1>Informações Técnicas</h1>
        <p>Artigos, guias e especificações sobre nossos serviços.</p>
      </div>

      <div className="info-grid">
        {infosData.map(info => {
          // Lógica da imagem (agora local)
          const thumbImage = (info.images && info.images.length > 0)
            ? info.images[0]
            : '/imagens/placeholder.jpg'; // Caminho relativo

          return (
            <Link to={`/informacoes/${info.slug}`} key={info.id} className="info-card">
              <div className="info-card-image">
                <img src={thumbImage} alt={info.title} />
              </div>
              <div className="info-card-content">
                <h3>{info.title}</h3>
                <span className="read-more">Ler Artigo &rarr;</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default InfoList;