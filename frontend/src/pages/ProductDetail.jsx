import React, { useState, useEffect } from 'react'; // Mantemos hooks para o Lightbox e lógica simples
import { useParams, Link } from 'react-router-dom';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Sidebar from '../components/Sidebar';
import './ProductDetail.css';
import productsData from '../data/products.json'; // IMPORTAÇÃO

function ProductDetail() {
  const { slug } = useParams();

  // Encontra o produto instantaneamente
  const product = productsData.find(p => p.slug === slug);

  const [openLightbox, setOpenLightbox] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Se não achar o produto (slug errado)
  if (!product) {
    return <div className="container"><p>Produto não encontrado.</p></div>;
  }

  const slides = product.galleryImages
    ? product.galleryImages.map(imgUrl => ({ src: imgUrl }))
    : [];

  return (
    <>
      <div className="container product-detail-container">
        <main className="product-detail-main">
          {/* ... (Todo o seu JSX anterior de breadcrumbs, titulo, galeria, tabela...) */}
          <nav className="breadcrumbs">
             <Link to="/">Home</Link> <span>/</span> <Link to="/produtos">Produtos</Link> <span>/</span> <span>{product.name}</span>
          </nav>

          <h1 className="product-title">{product.name}</h1>

          {/* Galeria */}
          <div className="product-gallery">
            {product.galleryImages && product.galleryImages.map((image, index) => (
              <div className="gallery-image" key={index} onClick={() => { setLightboxIndex(index); setOpenLightbox(true); }}>
                <img src={image} alt={product.name} />
              </div>
            ))}
          </div>

          {/* Tabela de Especificações */}
          {product.specifications && (
            <div className="description-section">
              <h3 className="description-title">Descrição</h3>
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