// src/pages/ProductDetail.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Sidebar from '../components/Sidebar';
import './ProductDetail.css';
import productsData from '../data/products.json';

function ProductDetail() {
  const { slug } = useParams();
  const product = productsData.find(p => p.slug === slug);

  const [openLightbox, setOpenLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!product) {
    return <div className="container"><p>Produto não encontrado.</p></div>;
  }

  // Prepara slides. Se a galeria estiver vazia, tenta usar a imagem de capa
  const imagesToShow = (product.galleryImages && product.galleryImages.length > 0)
    ? product.galleryImages
    : (product.image ? [product.image] : []);

  const slides = imagesToShow.map(imgUrl => ({ src: imgUrl }));

  return (
    <>
      <div className="container product-detail-container">
        <main className="product-detail-main">

          <nav className="breadcrumbs">
             <Link to="/">Home</Link> <span>/</span> <Link to="/produtos">Produtos</Link> <span>/</span> <span>{product.name}</span>
          </nav>

          <h1 className="product-title">{product.name}</h1>

          {/* Galeria */}
          <div className="product-gallery">
            {imagesToShow.map((image, index) => (
              <div className="gallery-image" key={index} onClick={() => { setLightboxIndex(index); setOpenLightbox(true); }}>
                <img src={image} alt={product.name} />
              </div>
            ))}
          </div>

          {/* --- NOVO: Texto Descritivo (HTML vindo do JSON) --- */}
          {product.fullDescription && (
            <div
              className="product-description-text"
              dangerouslySetInnerHTML={{ __html: product.fullDescription }}
            />
          )}

          {/* Tabela de Especificações */}
          {product.specifications && product.specifications.length > 0 && (
            <div className="description-section">
              <h3 className="description-title">Especificações Técnicas</h3>
              <table className="description-table">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index}>
                      <td className="spec-property">{spec.property}</td>
                      <td className="spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>

        <Sidebar />
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

export default ProductDetail;