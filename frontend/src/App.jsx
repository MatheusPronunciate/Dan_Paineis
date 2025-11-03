// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa o Layout
import Layout from './components/Layout';

// Importa as Páginas
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail'; // A página de detalhe
import Contato from './pages/Contato';
// (Importe aqui a página de 'Informacoes' quando a criar)

function App() {
  return (
    <Routes>
      {/* A rota "pai" (Layout) envolve todas as outras.
        Todas as rotas filhas serão renderizadas dentro do <Outlet /> do Layout.
      */}
      <Route path="/" element={<Layout />}>
        {/* Rota da Página Inicial */}
        <Route index element={<Home />} />
        
        {/* Outras Páginas */}
        <Route path="empresa" element={<Empresa />} />
        
        {/* Rotas de Produtos */}
        <Route path="produtos" element={<ProductList />} />
        <Route path="produtos/:slug" element={<ProductDetail />} />
        
        {/* Rota de Contato */}
        <Route path="contato" element={<Contato />} />

        {/* (Adicione a rota 'informacoes' aqui) */}
        
        {/* Rota "Não Encontrado" (404) */}
        <Route path="*" element={<h2>Página não encontrada (404)</h2>} />
      </Route>
    </Routes>
  );
}

export default App;