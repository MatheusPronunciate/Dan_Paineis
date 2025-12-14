// src/pages/Contato.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Contato.css'; // Vamos criar o CSS

function Contato() {
  // Estado para guardar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Estado para controlar o feedback de envio
  const [isSending, setIsSending] = useState(false);
  // 'null', 'success', ou 'error'
  const [submitStatus, setSubmitStatus] = useState(null);

  // Função genérica para atualizar o estado quando um input muda
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    setIsSending(true);
    setSubmitStatus(null);

    try {
      // Faz a requisição POST para o backend
      const response = await axios.post('https://danpaineis-api.onrender.com/api/contact', formData);

      setSubmitStatus('success'); // Sucesso!
      console.log(response.data.message); // Ex: "Mensagem recebida..."

      // Limpa o formulário
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
      setSubmitStatus('error'); // Erro!
    } finally {
      setIsSending(false); // Terminou o envio
    }
  };

  return (
    <div className="container contact-container">
      <div className="contact-header">
        <h1>Entre em Contato</h1>
        <p>Envie-nos uma mensagem ou venha nos visitar. Estamos prontos para atender.</p>
      </div>

      <div className="contact-layout">

        {/* Coluna 1: Informações Estáticas */}
        <div className="contact-info">
          <h3>Nossas Informações</h3>
          <p>
            <strong>Endereço:</strong><br />
            Rua Barra Negra, 39, vila Oratório<br />
            São Paulo/SP - CEP: 03192-040
          </p>
          <p>
            <strong>Telefones:</strong><br />
            (11) 2852-5968<br />
            (11) 2384-0046
          </p>
          <strong >Whatsapp:</strong>
          <p>
            <a href="https://wa.me/11976524520" target="_blank" rel="noopener noreferrer">
              (11) 976524520
            </a>
          </p>

          <p>
            <strong>Email:</strong><br />
            danpaineis@danpaineis.com.br {/* (Email de exemplo) */}
          </p>
          {/* Você pode adicionar um Google Maps embarcado aqui */}
        </div>

        {/* Coluna 2: Formulário */}
        <div className="contact-form-wrapper">
          <h3>Envie sua mensagem</h3>
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefone (com DDD)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={isSending}>
              {isSending ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            {/* Feedback de Sucesso */}
            {submitStatus === 'success' && (
              <p className="feedback-success">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </p>
            )}

            {/* Feedback de Erro */}
            {submitStatus === 'error' && (
              <p className="feedback-error">
                Ocorreu um erro ao enviar sua mensagem. Tente novamente, por favor.
              </p>
            )}

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contato;