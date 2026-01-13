// src/pages/InfoDetail.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import InfoSidebar from '../components/InfoSidebar';
import './ProductDetail.css'; // O CSS é compartilhado
import infosData from '../data/infos.json';

function InfoDetail() {
  const { slug } = useParams();
  const info = infosData.find(i => i.slug === slug);

  const [openLightbox, setOpenLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!info) return <div className="container"><p>Informação não encontrada.</p></div>;

  const slides = info.images ? info.images.map(src => ({ src })) : [];

  return (
    <>
      <div className="container product-detail-container">
        <main className="product-detail-main">
          <nav className="breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <Link to="/informacoes">Informações</Link> <span>/</span> <span>{info.title}</span>
          </nav>

          <h1 className="product-title">{info.title}</h1>

          {slides.length > 0 && (
            <div className="product-gallery">
              {slides.map((slide, idx) => (
                <div key={idx} className="gallery-image" onClick={() => { setLightboxIndex(idx); setOpenLightbox(true); }}>
                  <img src={slide.src} alt={info.title} />
                </div>
              ))}
            </div>
          )}

          {/* MUDANÇA AQUI: Usamos a mesma classe 'product-description-text' do Produto */}
          <div
            className="product-description-text"
            dangerouslySetInnerHTML={{ __html: info.content }}
          />

        </main>
        <InfoSidebar />
      </div>
      <Lightbox open={openLightbox} close={() => setOpenLightbox(false)} slides={slides} index={lightboxIndex} />
    </>
  );
}

export default InfoDetail;