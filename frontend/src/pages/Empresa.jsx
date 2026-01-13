// src/pages/Empresa.jsx
import React from 'react';
import './Empresa.css'; // Vamos criar este CSS específico

export default function Empresa() {
  return (
    <div className="container empresa-container">
      <div className="empresa-header">
        <h1>Sobre a Empresa</h1>
        <p className="empresa-intro">
          Criada em 13/09/2002, a <strong>DanPainéis Montagem e Comércio de Painéis Ltda</strong> atua na área de montagem e projetos de quadros elétricos.
          Ao longo dos anos, sempre teve como prioridade oferecer a seus clientes e parceiros o melhor em soluções técnicas.
        </p>
      </div>

      <div className="empresa-values">
        <div className="value-card">
          <h3>Atendimento</h3>
          <p>
            Através de nossa equipe de engenheiros altamente capacitados e
            treinados, oferecemos as melhores opções do mercado, tanto tecnicamente
            quanto financeiramente.
          </p>
        </div>

        <div className="value-card">
          <h3>Qualidade</h3>
          <p>
            Nossos quadros são montados com os melhores produtos do mercado.
            Todos devidamente certificados e homologados pelas normas vigentes.
          </p>
        </div>

        <div className="value-card">
          <h3>Prazo de entrega</h3>
          <p>
            Atendimento e qualidade são fatores importantes, porém, cientes de que
            o prazo de entrega é fundamental para o cronograma da obra, a
            DanPainéis prioriza seus prazos e sempre cumpre o acordado.
          </p>
        </div>
      </div>
    </div>
  );
}