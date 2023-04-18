import Navbar from "./Navbar"
import Footer from "./Footer"
import "./Home.css"
import img1 from "./assets/img1.webp"
import top from "./assets/top.jpg"
import whey from "./assets/whey.jpg"

export function Home() {
   return (
    <div className="Home">
        <Navbar />
        <section className="Inicio">
            <div className="imgem" >
            <img src={img1} alt="img1" width={1864} />
            </div>
            <h3 className="Texto">WHEY PROTEIN   |    CREATINA   |   GLUTAMINA  |    ABULMINA   |    BCAA    |    CAFEÍNA </h3>

            <div className="secTitle">
                <h3 className="produtos">Nossos produtos</h3>
            </div>
            <section className="Sessao">
          <div className="Produto1">
            <div className="fotos">
         <img src ={top} alt="top" width="200px" height="auto" />
         </div>
         <p className="texto1">WHEY PROTEIN (PROTEÍNA DO SORO DE LEITE) É UM TIPO DE PROTEÍNA DE ALTO VALOR BIOLÓGICO, OU SEJA, QUE POSSUI ELEVADOS ÍNDICES DE AMINOÁCIDOS ESSENCIAIS. WHEY 100% PURE É UM SUPLEMENTO PROTEICO COM MÉDIA VELOCIDADE DE METABOLIZAÇÃO, QUE CONTRIBUI PARA PROLONGAR O BALANÇO NITROGENADO POSITIVO DO ORGANI</p>
         <button className="button2">Comprar agora!</button>
          </div>
          <div className="Produto1">
             <div className="fotos2">
          <img src ={whey} alt="whey" width="260px" height="auto" />
          </div>
          <p className="texto1">WHEY PROTEIN (PROTEÍNA DO SORO DE LEITE) É UM TIPO DE PROTEÍNA DE ALTO VALOR BIOLÓGICO, OU SEJA, QUE POSSUI ELEVADOS ÍNDICES DE AMINOÁCIDOS ESSENCIAIS. WHEY 100% PURE É UM SUPLEMENTO PROTEICO COM MÉDIA VELOCIDADE DE METABOLIZAÇÃO, QUE CONTRIBUI PARA PROLONGAR O BALANÇO NITROGENADO POSITIVO DO ORGANI</p>
          <button className="button2">Comprar agora!</button>
          </div>
          <div className="Produto1">
            <div className="fotos">
          <img src ={top} alt="top" width="200px" height="auto" />
          </div>
          <p className="texto1">WHEY PROTEIN (PROTEÍNA DO SORO DE LEITE) É UM TIPO DE PROTEÍNA DE ALTO VALOR BIOLÓGICO, OU SEJA, QUE POSSUI ELEVADOS ÍNDICES DE AMINOÁCIDOS ESSENCIAIS. WHEY 100% PURE É UM SUPLEMENTO PROTEICO COM MÉDIA VELOCIDADE DE METABOLIZAÇÃO, QUE CONTRIBUI PARA PROLONGAR O BALANÇO NITROGENADO POSITIVO DO ORGANI</p>
          <button className="button2">Comprar agora!</button>
           </div>
           </section>
        </section>
        <Footer />
    </div>
   )
}

export default Home