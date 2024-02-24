import "./style.css";
import graficopng from "../../../assets/grafico.png";
import caderneta from "../../../assets/caderneta.png";
import people from "../../../assets/pessoa.png";
import Graph from "./graph/graph";
import feliz from "../../../assets/cara-feliz.png";
import medio from "../../../assets/rosto-medio.png";
import triste from "../../../assets/rosto-triste.png";
import Image from "next/image";
import DoughnutPage from "@/components/DoughnutGraphic/dounot";
export default function Main({ isData, setIsPage, infoUser, client, setClient }: any) {
  return (
    <main>

      <div className="content-center">
        <h5>
          {infoUser?.dataClient?.nameWork}
        </h5>
        <br />

        <img src={infoUser?.dataClient?.workLogo} alt="" style={{ width: "30%" }} id="logo" />

        <div className="content-products">

          <div className="item-top">
            <h1>Valores simplificados</h1>
            <p >sumário</p>
          </div>

          <div className="modal-cards">
            <div className="card">
              <Image src={graficopng} alt="" width={30} />
              <h1>Total: {isData?.somaTotal + isData?.notclient?.some || isData.somaTotal}</h1>
              <p>Soma dos relatórios</p>20AEF3
              <h3 style={{ color: "#FEB95A" }}>feedback dos clientes</h3>
            </div>
            <div className="card">
              <Image src={people} alt="" width={30} />
              <h1>Votos: {isData?.numberPeople + isData?.notclient?.total}</h1>
              <p>Número de votos realizados </p>
              <h3 style={{ color: "#20AEF3" }}>Avaliação das perguntas </h3>
            </div>
            <div className="card">
              <Image src={caderneta} alt="" width={30} />
              <h1>Media: {isData?.Media}</h1>
              <p>Media da empresa</p>
              <h3 style={{ color: "#A9DFD8" }}>Valor máximo de média: 10 </h3>
            </div>
          </div>

        </div>
        <div className="content-products">

        {client ? (
          <>
              <div className="item-top">
            <h1>Tabela baseada em nossos clientes.</h1>
            <p >sumário</p>
          </div>

          <div className="modal-cards">
            <div className="card">
              <Image src={graficopng} alt="" width={30} />
              <h1>Total: {isData?.somaTotal}</h1>
              <p>Soma dos relatórios</p>
              <h3 style={{ color: "#FEB95A" }}>feedback dos clientes</h3>
            </div>
            <div className="card">
              <Image src={people} alt="" width={30} />
              <h1>Votos: {isData?.numberPeople}</h1>
              <p>Número de votos realizados </p>
              <h3 style={{ color: "#20AEF3" }}>Avaliação das perguntas </h3>
            </div>
            <div className="card">
              <Image src={caderneta} alt="" width={30} />
              <h1>Media: {isData?.Media}</h1>
              <p>Media da empresa</p>
              <h3 style={{ color: "#A9DFD8" }}>Valor máximo de média: 10 </h3>
            </div>
          </div>
          </>
        ) : (
          <>
              <div className="item-top"
               >
            <h1>Tabela baseada em pessoas que não é cliente.</h1>
            <p >sumário</p>
          </div>

          <div className="modal-cards">
            <div className="card">
              <Image src={graficopng} alt="" width={30} />
              <h1>Total: {isData?.notclient?.some}</h1>
              <p>Soma dos relatórios</p>
              <h3 style={{ color: "#FEB95A" }}>feedback dos clientes</h3>
            </div>
            <div className="card">
              <Image src={people} alt="" width={30} />
              <h1>Votos: {isData?.notclient?.total}</h1>
              <p>Número de votos realizados </p>
              <h3 style={{ color: "#20AEF3" }}>Avaliação das perguntas </h3>
            </div>
            <div className="card">
              <Image src={caderneta} alt="" width={30} />
              <h1>Media: {isData?.notclient?.media}</h1>
              <p>Media da empresa</p>
              <h3 style={{ color: "#A9DFD8" }}>Valor máximo de média: 10 </h3>
            </div>
          </div>
          </>
        )}
          <button  onClick={() => setClient(!client)} style={{ marginTop: 20, padding: 15, color: client ? "#B200FF" : "#fff"
          , fontSize: 20, transition: "1s", background: client ? "#160030": "green", borderRadius: 10,border: "none", outline: "none", cursor: "pointer" }}>

              {client ? "clique para ver pessoas que não são clientes" : "Ver de clientes"}
          </button>

        </div>
        <div className="graph-numbers">
          <div className="title">
            <h1>Escala de avaliações</h1>
          </div>
          <div className="graph">
            <div className="column">
              <div className="top">
                <h1>#</h1>
              </div>
              <h2>01</h2>
              <h2>02</h2>
              <h2>03</h2>
            </div>
            <div className="column">
              <div className="top">
                <h1>Titulos</h1>
              </div>
              <h2>Excelente</h2>
              <h2>Satisfeito</h2>
              <h2>Insatisfeito</h2>
            </div>
            <div className="column">
              <div className="top">
                <h1>score</h1>
              </div>
              <h2>
                <div
                  className="line"
                  style={{
                    width: `${isData?.emogis[0].calc}`,
                    background: "#FEB95A",
                  }}
                >
                  <div className="data"></div>
                </div>
              </h2>
              <h2>
                <div
                  className="line"
                  style={{
                    width: `${isData?.emogis[1].calc}`,
                    background: "#20AEF3",
                  }}
                >
                  <div className="data"></div>
                </div>
              </h2>{" "}
              <h2>
                <div
                  className="line"
                  style={{
                    width: `${isData?.emogis[2].calc}`,
                    background: "#A9DFD8",
                  }}
                >
                  <div className="data"></div>
                </div>
              </h2>
            </div>
            <div className="column">
              <div className="top">
                <h1>Porcentagens</h1>
              </div>
              <h2 className="porcento">{isData?.emogis[0].calc}</h2>
              <h2 className="porcento">{isData?.emogis[1].calc}</h2>
              <h2 className="porcento">{isData?.emogis[2].calc}</h2>
            </div>
          </div>
        </div>
        <div className="graph-data">
          <Graph isData={isData} />
        </div>
        <footer>
          <a href="#" id="more" onClick={() => setIsPage(false)}>
            {" "}
            Ver Gráficos
          </a>
        </footer>
      </div>
      <div className="modal-avaliable-rigth">
        <div className="card-score">
          <div className="container-card">
            <h1>Score De Gráficos</h1>
            <p>Baseado em todas as análises</p>
            <h2>Desempenho: {isData?.emogis[0].calc}</h2>
            <p>As cores indicam seu padrão da empresa</p>

            <div className="mid-range-back">
              <div
                className="line-score"
                style={{
                  position: "absolute",
                  left: `${isData?.emogis[0].calc}`,
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="content-doughnut">
          <DoughnutPage isData={isData} />
        </div>

        <div className="card-emogis">
          <h1>Veja seus clientes</h1>
          <div className="faces">
            <div className="icon">
              <Image src={feliz} alt="" />
              <h2>Excelente</h2>
              <p>{isData?.dataClient?.satisfied[0].notas}</p>
            </div>
            <div className="icon">
              <Image src={medio} alt="" />
              <h2>Satisfeito</h2>
              <p>{isData?.dataClient?.satisfied[1].notas}</p>
            </div>{" "}
            <div className="icon">
              <Image src={triste} alt="" />
              <h2>Insatisfeito</h2>
              <p>{isData?.dataClient?.satisfied[2].notas}</p>
            </div>
          </div>
        </div>
        <a href="/share" style={{ marginTop: 20, color: "white" }}>
          Indique para um amigo
        </a>
      </div>
    </main>
  );
}
