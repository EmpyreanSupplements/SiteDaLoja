import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CartItem from "./CartItem";

import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import "./Carrinho.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Carrinho() {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (location.state) {
      const item = [location.state.item];
      setItems(item);
    }
  }, []);

  items.forEach((item) => {
    
  })

  return (
    <>
      <NavbarComp />
      <div className="Carrinho">
        <div class="container">
          <h1 className="titleCar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            ㅤCARRINHO DE COMPRAS
          </h1>
        </div>
      </div>

      <div class="container">
        <div class="row align-items-start">
          <div class="col">
            <div class="container">
              <ul class="list-group mb-3">
                {items.map((item, idx) => {
                  return <CartItem key={idx} product={item} />;
                })}
                <li class="list-group-item py-3">
                  <div class="text-end">
                    <h4 class="text-dark mb-3">Valor Total: R$ {totalPrice}</h4>

                    <a href="/" class="btn btn-outline-success btn-lg">
                      Continuar Comprando
                    </a>
                    <a href="/" class="btn btn-danger btn-lg ms-2 mt-xs-3">
                      Finalizar Compra
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="col  bd-highlight" id="col2">
            <h4 class="text-dark mb-3" id="titleResumo">
              RESUMO DO PEDIDO
            </h4>

            <br></br>
            <br></br>
            <p class="paragrafosDoResumo">
              Quantidade de produtos:ㅤ
              <a class="QntdDeProdutos"> {items.length} </a>
            </p>

            <p class="paragrafosDoResumo">
              Frete:ㅤR$
              <a class="ValorDoFrete">100,00</a>
            </p>

            <p class="paragrafosDoResumo">
              Produtos:<br></br>
              <h6 class="flex align-items-end justify-content-end">
                {items
                  ? items.map((item) => {
                      return <p> {item.produtoNome} </p>;
                    })
                  : "babi"}
              </h6>
            </p>

            <hr class="hrResumo" />

            <h5 class="paragrafosDoResumo"> Total: R$ {totalPrice + 100} </h5>

            <div class="containerButtons">
              <a href="/" class="btn btn-outline-success btn-lg">
                Continuar Comprando
              </a>
              <a href="/" class="btn btn-danger btn-lg ms-2 mt-xs-3">
                Finalizar Compra
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1 class="SubtitleCarrinho">APROVEITE E LEVE MAIS... </h1>

      <div className="container justify-content-center">
        <div className="row col-md-12 justify-content-center">
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card
              className="justify-content-start border-0 pt-3 pb-1"
              style={{ width: "3rem" }}
            >
              <img class="justify-content-start" src="iconNew.png" />
            </Card>
            <Card.Img variant="top" src="whey1.png" />
            <Card.Body>
              <Card.Title>WHEY PROTEIN ISOLATE</Card.Title>
              <Card.Text>
                Fornece 27g de Whey Protein Isolado por porção, obtido através
                do processo de filtragem por membranas.
              </Card.Text>
              <h3>R$369,90</h3>
              <Button href="/Produto1" variant="primary">
                Comprar
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card
              className="justify-content-start border-0 pt-3 pb-1"
              style={{ width: "3rem" }}
            >
              <img class="justify-content-start" src="iconNew.png" />
            </Card>
            <Card.Img variant="top" src="whey2.webp" />
            <Card.Body>
              <Card.Title>WHEY BLEND 900g</Card.Title>
              <Card.Text>
                Produto de alto valor biológico que pode ser utilizado para as
                mais diversas finalidades e objetivos.
              </Card.Text>
              <h3>R$139,00</h3>
              <Button href="/Produto1" variant="primary">
                Comprar
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card
              className="justify-content-start border-0 pt-3 pb-1"
              style={{ width: "3rem" }}
            >
              <img class="justify-content-start" src="iconNew.png" />
            </Card>
            <Card.Img variant="top" src="creatina1.webp" />
            <Card.Body>
              <Card.Title>CREATINE TURBO</Card.Title>
              <Card.Text>
                Apoia o ganho de massa e a conclusão dos treinos mantendo a
                qualidade de suas repetições.
              </Card.Text>
              <h3>R$89,90</h3>
              <Button href="/Produto1" variant="primary">
                Comprar
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card
              className="justify-content-start border-0 pt-3 pb-1"
              style={{ width: "3rem" }}
            >
              <img class="justify-content-start" src="iconNew.png" />
            </Card>
            <Card.Img variant="top" src="creatina2.webp" />
            <Card.Body>
              <Card.Title>CREATINA HARDCORE</Card.Title>
              <Card.Text>
                Ajuda a hidratar a musculatura enquanto você malha, promovendo o
                aumento, força e firmeza.
              </Card.Text>
              <h3>R$174,99</h3>
              <Button href="/Produto1" variant="primary">
                Comprar
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="hiargu.png" />
            <Card.Body>
              <Card.Title>HI-ARGININA 3000</Card.Title>
              <Card.Text>
                Desenvolvida para o maior estímulo de liberação do óxido
                nítrico, Isso aumenta o fluxo de sangue e nutrientes.
              </Card.Text>
              <h3>R$65,90</h3>
              <Button href="/Produto1" variant="primary">
                Comprar
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="tauros.png" />
            <Card.Body>
              <Card.Title>TAURUS (60CAPS)</Card.Title>
              <Card.Text>
                Taurus da FTW com l-taurina é um aminoácido livre que aumenta a
                resistência, possui ação antioxidante.
              </Card.Text>
              <h3>R$38,86</h3>
              <Button href="/Produto1" variant="primary">
                Comprar
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="crealanina.png" />
            <Card.Body>
              <Card.Title>BETA ALANINA (200G)</Card.Title>
              <Card.Text>
                Não pode faltar na sua rotina para ajudar na performance e na
                recuperação muscular pós treino.
              </Card.Text>
              <h3>R$64,28</h3>
              <Button href="/Produto1" variant="primary">
                Comprar
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="creaticinza.png" />
            <Card.Body>
              <Card.Title>BETA ALANINA (150G)</Card.Title>
              <Card.Text>
                A Beta-Alanina da Max Titanium é um excelente suplemento para
                incluir em seu consumo, é importantíssimo.
              </Card.Text>
              <h3>R$95,39</h3>
              <Button href="/Produto1" variant="primary">
                Comprar
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="chocopro.png" />
            <Card.Body>
              <Card.Title>CHOCOLATE PROTEICO</Card.Title>
              <Card.Text>
                12 unidades de recompensa deliciosa e nutritiva, veio para ser a
                recompensa oficial dos seus treinos.
              </Card.Text>
              <h3>R$166,79</h3>
              <Button href="/Produto1" variant="primary">
                Comprar
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="wheycinza.jpeg" />
            <Card.Body>
              <Card.Title>ARGIPURE (30CAPS)</Card.Title>
              <Card.Text>
                A arginina funciona como um precursor de outros aminoácidos e
                proteínas, ela atua no ciclo da ureia.
              </Card.Text>
              <h3>R$58,25</h3>
              <Button href="/Produto1" variant="primary">
                Comprar
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="wheychoco.png" />
            <Card.Body>
              <Card.Title>DELICIOUS 3WHEY</Card.Title>
              <Card.Text>
                é uma fonte de proteína que ajuda na formação dos músculos e
                ossos, se o seu objetivo é hipertrofia, ele auxilia.
              </Card.Text>
              <h3>R$129,58</h3>
              <Button href="/Produto1" variant="primary">
                Comprar
              </Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="wheydoce.png" />
            <Card.Body>
              <Card.Title>BEST WHEY</Card.Title>
              <Card.Text>
                É um Whey Protein hidrolisado, concentrado e isolado. Possui 25g
                de proteína de alto valor biológico.
              </Card.Text>
              <h3>R$194,58</h3>
              <Button href="/Produto1" variant="primary">
                Comprar
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br></br>

      <Footer />
    </>
  );
}

export default Carrinho;
