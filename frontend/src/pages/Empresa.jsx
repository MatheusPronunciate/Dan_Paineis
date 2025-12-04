// src/pages/Empresa.jsx
import './Home.css'; // CSS para a Home

export default function Empresa() {
  return (
    <>
    <div className="container hero-content">
      <h2>Sobre a Empresa</h2>
      <p>
        Criada em 13/09/2002, a DanPainéis Montagem e Comércio de Painéis Ltda
        atua na área de montagem e projetos de quadros elétricos. Ao longo dos
        anos sempre teve como prioridade oferecer a seus clientes e parceiros o
        melhor em:
      </p>

      <div>
        <h3>Atendimento</h3>
        <p>
          Através de nossa equipe de engenheiros altamente capacitados e
          treinados, oferecemos as melhores opções do mercado, tecnicamente e
          financeiramente.
        </p>

        <h3>Qualidade</h3>
        <p>
          Nossos quadros são montados com os melhores produtos do mercado. Todos
          devidamente certificados.
        </p>

        <h3>Prazo de entrega</h3>
        <p>
          Atendimento e qualidade são fatores importantes, porém, cientes de que
          o prazo de entrega é fundamental para o bom atendimento da obra, a
          DanPainéis prioriza seus prazos e sempre cumpre o acordado.
        </p>
      </div>
      </div>
    </>
  );
}