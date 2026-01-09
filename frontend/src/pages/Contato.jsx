// src/pages/Contato.jsx
import React from 'react';
import './Contato.css';

function Contato() {
  return (
    <div className="container contact-container">

      <div className="contact-header">
        <h1>Entre em Contato</h1>
        <p>Envie-nos uma mensagem ou venha nos visitar. Estamos prontos para atender.</p>
      </div>

      <div className="contact-layout">

        {/* Coluna 1: Informações */}
        <div className="contact-info">
          <h3>Nossas Informações</h3>
          <p>
            <strong>Endereço:</strong><br />
            Rua Bixio, 28 - Vila Oratório<br />
            São Paulo/SP - CEP: 03192-040
          </p>
          <p>
            <strong>Telefones:</strong><br />
            (11) 2852-5968<br />
            (11) 2384-0046
          </p>
          <p>
            <strong>Whatsapp:</strong><br />
            <a href="https://wa.me/11976524520" target="_blank" rel="noopener noreferrer">(11) 97652-4520</a>
          </p>
          <p>
            <strong>Email:</strong><br />
            contato@danpaineis.com.br
          </p>
        </div>

        {/* Coluna 2: Formulário via FormSubmit */}
        <div className="contact-form-wrapper">
          <h3>Envie sua mensagem</h3>

          {/* O SEGREDO ESTÁ AQUI: action e method */}
          <form
            action="https://formsubmit.co/contato@danpaineis.com.br"
            method="POST"
          >

            {/* Configurações do FormSubmit (Campos Ocultos) */}
            {/* Assunto do email que vai chegar para você */}
            <input type="hidden" name="_subject" value="Novo contato pelo Site!" />

            {/* Para onde o usuário vai depois de enviar (volta para o contato) */}
            <input type="hidden" name="_next" value="https://www.danpaineis.com.br/contato" />

            {/* Desativa o captcha chato deles (opcional) */}
            <input type="hidden" name="_captcha" value="false" />

            {/* Mensagem em português */}
            <input type="hidden" name="_autoresponse" value="Recebemos sua mensagem e entraremos em contato em breve. Obrigado!" />

            {/* CAMPOS DO FORMULÁRIO (Note que não tem mais value={} nem onChange={}) */}

            <div className="form-group">
              <label htmlFor="name">Nome Completo</label>
              <input type="text" id="name" name="name" required placeholder="Seu nome" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="seu@email.com" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" name="phone" required placeholder="(00) 00000-0000" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" rows="5" required placeholder="Como podemos ajudar?"></textarea>
            </div>

            <button type="submit" className="submit-button">
              Enviar Mensagem
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contato;