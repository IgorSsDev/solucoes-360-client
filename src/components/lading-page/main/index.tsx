import Image from 'next/image'
import graficos from '../../../assets/graficos.png'
import '../../lading-page/main/style.css'
import background from "../../../../public/background.jpg"
export default function PageMain() {
    return (
      <main>
        <div className="page-main">
          <div className="background_img">
            <Image alt="background" src={background} />
          </div>
          <div className="title">
            <h1>Nosso trabalho, é o desempenho  🚀</h1>
            <p>
              Trabalhamos com o intuito de melhorar a sua empresa/negócio. Temos
              pacotes proporcionais ao seu negócio.
            </p>
          </div>
          <div className="bnt-container">
            <button>Vesão Grátis</button>
            <button id="none">Leia Mais</button>
          </div>
        </div>
      </main>
    );
}