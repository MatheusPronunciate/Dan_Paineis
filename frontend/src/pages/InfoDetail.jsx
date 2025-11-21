import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import InfoSidebar from '../components/InfoSidebar'; // Sidebar específica
import RegionsTabs from '../components/RegionsTabs'; // Componente de regiões
import './ProductDetail.css'; // Podemos reutilizar o CSS de produto!

function InfoDetail() {
  const { slug } = useParams();
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Lightbox state
  const [openLightbox, setOpenLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const fetchInfo = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://danpaineis-api.onrender.com/api/infos/${slug}`);
        setInfo(response.data);
      } catch (error) {
        console.error("Erro ao carregar info", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInfo();
  }, [slug]);

  if (isLoading) return <div className="container"><p>Carregando...</p></div>;
  if (!info) return <div className="container"><p>Informação não encontrada.</p></div>;

  const slides = info.images ? info.images.map(src => ({ src })) : [];

  return (
    <>
      <div className="container product-detail-container">
        
        {/* COLUNA DA ESQUERDA (Conteúdo) */}
        <main className="product-detail-main">
          <nav className="breadcrumbs">
            <Link to="/">Home</Link> <span>/</span>
            <Link to="/informacoes">Informações</Link> <span>/</span>
            <span>{info.title}</span>
          </nav>

          <h1 className="product-title">{info.title}</h1>

          {/* Galeria de Imagens (se houver) */}
          {slides.length > 0 && (
            <div className="product-gallery">
              {slides.map((slide, idx) => (
                <div key={idx} className="gallery-image" onClick={() => { setLightboxIndex(idx); setOpenLightbox(true); }}>
                  <img src={slide.src} alt={info.title} />
                </div>
              ))}
            </div>
          )}

          {/* Conteúdo de Texto (Renderiza o HTML do JSON) */}
          <div 
            className="description-section"
            style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--cor-texto)' }}
            dangerouslySetInnerHTML={{ __html: info.content }} 
          />

          {/* Componente de Regiões */}
          <RegionsTabs />

        </main>

        {/* COLUNA DA DIREITA (Sidebar de Informações) */}
        <InfoSidebar />

      </div>

      <Lightbox
        open={openLightbox}
        close={() => setOpenLightbox(false)}
        slides={slides}
        index={lightboxIndex}
      />
    </>
  );
}

export default InfoDetail;