import React, { useState } from 'react';
import './RegionsTabs.css'; // Vamos criar o CSS abaixo

const regionsData = {
  "Região Central": ["Aclimação", "Bela Vista", "Bom Retiro", "Brás", "Centro", "Liberdade", "Santa Cecília"],
  "Zona Norte": ["Brasilândia", "Casa Verde", "Jaçanã", "Santana", "Tucuruvi", "Vila Maria"],
  "Zona Sul": ["Brooklin", "Campo Belo", "Interlagos", "Ipiranga", "Moema", "Morumbi", "Saúde", "Vila Mariana"],
  "Zona Leste": ["Moóca", "Tatuapé", "Vila Prudente", "Penha", "Itaquera", "São Mateus"],
  "Zona Oeste": ["Lapa", "Perdizes", "Pinheiros", "Vila Madalena", "Butantã"]
};

function RegionsTabs() {
  const [activeTab, setActiveTab] = useState("Região Central");

  return (
    <div className="regions-tabs-container">
      <h3>Regiões onde a DanPainéis atende:</h3>
      
      {/* Botões das Abas */}
      <div className="regions-nav">
        {Object.keys(regionsData).map(region => (
          <button 
            key={region} 
            className={activeTab === region ? 'active' : ''}
            onClick={() => setActiveTab(region)}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Conteúdo da Aba Ativa */}
      <div className="regions-content">
        <ul>
          {regionsData[activeTab].map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RegionsTabs;