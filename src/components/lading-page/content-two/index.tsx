import "./style.css";

export default function ContentTwo() {
  return (
    <div className="content-two">
      <div className="title_top">
        <h1>
          Confira já todos os nossos <strong>pacotes</strong>
        </h1>
      </div>

      <div className="cards">
        <div
          className="card"
          style={{ border: "1px solid #6F4B94", background: "#150E1C" }}
        >
          <div className="items-top">
            <span>Grátis por 7 dias</span>
            <h1>Plano gratuito</h1>
            <h2>Acesso de 7 dias</h2>
          </div>
          <div className="items-bottom">
            <p>- Gratuito por 7 dias ⏳;</p>
            <p>- Acesso ao Dashboard 📊;</p>
            <p>- Criação de perguntas personalizadas</p>
            <p>- Controle do dashboard 24hrs ⏰;</p>
            <p>- Suporte dedicado ao seu serviço 🤝.</p>
          </div>
        </div>
        <div
          className="card"
          style={{ border: "1px solid #367CD5", background: "#091422" }}
        >
          <div className="items-top">
            <span>plano pago</span>
            <h1>Plano Premiun</h1>
            <h2>manunteção de pesquisa 448,00R$ /mes </h2>
            <br />
            <h2>valor da implantação: 1.498,00 R$ </h2>
          </div>
          <div className="items-bottom">
            <p>- Serviço 100% Ativo ✅;</p>
            <p>- Análise para aprimorar desempenho da empresa 📈;</p>
            <p>- Acesso total ao Dashboard 🖥️;</p>
            <p>- Suporte especializado 🛠️;</p>
            <p>- E Muito mais🚀;</p>
          </div>
        </div>
        <div
          className="card"
          style={{ border: "1px solid #42995B", background: "#0A170D" }}
        >
          <div className="items-top">
            <span>plano personalizado</span>
            <h1>Plano gratuito</h1>
            <h2>Acesso personalizado</h2>
          </div>
          <div className="items-bottom">
            <p> - Preços avaliados conforme suas escolhas </p>
            <p> - Especifiações avançadas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
