// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

const products = require('./products.json');

app.use(cors());
app.use(express.json());

// Rota: Todos os produtos
app.get('/api/products', (req, res) => {
  res.json(products);
});

// === NOVA ROTA ===
// Rota: Produtos em Destaque (para a Home)
app.get('/api/products/featured', (req, res) => {
  const featuredProducts = products.filter(p => p.featured === true);
  res.json(featuredProducts);
});
// === FIM DA NOVA ROTA ===

// Rota: Produto por ID (slug)
// Deixei como :slug para ser mais amigável (SEO)
app.get('/api/products/:slug', (req, res) => {
  const product = products.find(p => p.slug === req.params.slug);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Produto não encontrado');
  }
});

// Rota: Formulário de Contato
app.post('/api/contact', (req, res) => {
  // O req.body só existe por causa do "app.use(express.json())"
  const { name, email, phone, message } = req.body;
  
  console.log('=== NOVO CONTATO RECEBIDO ===');
  console.log('Nome:', name);
  console.log('Email:', email);
  console.log('Telefone:', phone);
  console.log('Mensagem:', message);
  console.log('=============================');
  
  // Próximo passo (futuro):
  // Aqui você usaria o Nodemailer para enviar um e-mail de verdade
  // para a DanPainéis com esses dados.
  
  // Envie uma resposta de sucesso
  res.status(200).json({ message: 'Mensagem recebida com sucesso! Entraremos em contato em breve.' });
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});