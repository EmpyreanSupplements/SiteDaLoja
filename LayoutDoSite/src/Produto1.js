import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import "./Produto1.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import findAll from "./produtos";
import CardTeste from "./Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Components/Navbar.css";
import { useNavigate } from "react-router-dom";

function Produto1() {
  const location = useLocation();
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await findAll();
    setAllProducts([...res]);
  };

  useEffect(() => {
    fetchData();
    setProduct(location.state.item);
  }, []);

  const handleClick = () => {
    navigate(`/Carrinho`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} variant={"dark"} expand={expand} className="Nav">
          <Container fluid>
            <a classname="logo" href="../">
              <img src="../logoemgif.gif" alt="logo" className="logo" />
            </a>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  class="titleNavBarDropDanw"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  EMPYREAN SUPPLEMENTS
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div class="input-group justify-content-center">
                  <input
                    class="form-control border-0 "
                    type="search"
                    placeholder="Encontre suplementos..."
                    img="search.svg"
                  />
                  <span class="input-group-text">
                    <img
                      class="IconeSearchNavbar"
                      src="../search.svg"
                      alt="logo"
                    />
                  </span>
                </div>

                <div class="d-flex flex-row bd-highlight ">
                  <div class="p-2 bd-highlight">
                    <li id="removeCircle" class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <a href="../Perfil">
                          <img class="icons" src="../Usuario.png" width="65%" />
                        </a>
                      </a>

                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="./Perfil">
                          Minha conta
                        </a>

                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">
                          Sair
                        </a>
                      </div>
                    </li>
                  </div>
                  <div class="p-2 bd-highlight">
                    <a href="../Carrinho">
                      <img class="icons" src="../Carrinho.png" width="65%" />
                    </a>
                  </div>

                  <div class="p-2 bd-highlight">
                    <a href="../Cadastro">
                      <img class="icons" src="../AddUsuario.png" width="65%" />
                    </a>
                  </div>
                  <div class="p-2 bd-highlight ">
                    <a href="mailto:grupopp33@gmail.com">
                      <img class="icons" src="../Contato.png" width="65%" />
                    </a>
                  </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <div class="container px-lg-5 justify-content-center mt-3">
        <div class="row mx-lg-n5">
          <div class="col py-3 px-lg-5">
            <Card
              className="justify-content-start border-0  pb-1 mr-3"
              style={{ width: "6rem" }}
            >
              <img class="justify-content-start" src="../iconNew.png" />
            </Card>
            <img
              height={350}
              src={product.produtoImg}
              class="justify-content-center"
            />
            <div className="text">
              <br></br>
            </div>
          </div>

          <div class="col py-3 px-lg-5">
            <div className="detalheproduto justify-content-center">
              <div className="text">
                <h2> {product.produtoNome} </h2>
                <br></br>
                <Card.Text>{product.produtoDesc}</Card.Text>
                <br />
              </div>
              <div class="text-end">
                <h5>De: R$ {product.produtoPreco + 20} </h5>
                <h2>Por: R$ {product.produtoPreco} </h2>
                <h6>
                  6x de R$ {(product.produtoPreco / 6).toFixed(2)} sem juros
                </h6>
              </div>
            </div>

            <div class="col text-center justify-content-center">
              <Button
                className="sizeBtnDescProduto"
                onClick={handleClick}
                variant="primary"
              >
                Comprar
              </Button>
            </div>

            <div class="input-group mb-3 mt-5">
              <input
                type="text"
                class="form-control rounded-pill shadow bg-white rounded "
                placeholder="Calcule o valor do frete..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  <img id="iconSearchCep" src="../search.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center pt-5 pb-3">
        <h1 className="font-weight-normal">PRODUTOS SIMILARES</h1>
      </div>

      <div className="container justify-content-center">
        <div className="row col-md-12 justify-content-center">
          {allProducts.map((product) => {
            return <CardTeste key={product.id} product={product} />;
          })}
        </div>
      </div>
      <footer className="bg-light text-white pt-5 pb-4">
        <div class="text-center p-3" id="redessociais">
          <div class="me-5">
            <span>
              Fique conectado nas nossas redes sociais:
              <a href="#">
                <img class="iconesDeRede" src="../instagram.svg" width="20px" />
              </a>
              <a href="#">
                <img class="iconesDeRede" src="../whatsapp.svg" width="20px" />
              </a>
              <a href="#">
                <img class="iconesDeRede" src="../facebook.svg" width="20px" />
              </a>
              <a href="#">
                <img class="iconesDeRede" src="../twitter.svg" width="20px" />
              </a>
            </span>
          </div>
        </div>

        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-dark">
                QUEM SOMOS?
              </h5>
              <p className="text-dark">
                Bem-vindo à sua loja! Como uma apaixonada entusiasta do fitness,
                nossa empresa tem o prazer de ajudar você a encontrar os
                suplementos e acessórios perfeitos para apoiar seus objetivos!
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-dark">
                Produtos
              </h5>
              <p>
                <a href="NotFound" className="text-dark">
                  Suplementos
                </a>
              </p>
              <p>
                <a href="NotFound" className="text-dark">
                  Acessórios
                </a>
              </p>
              <p>
                <a href="NotFound" className="text-dark">
                  Moda esportiva
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-dark">
                Links úteis
              </h5>
              <p>
                <a href="Perfil" className="text-dark">
                  Sua conta
                </a>
              </p>
              <p>
                <a href="PrivSeg" className="text-dark">
                  Privacidade e segurança
                </a>
              </p>
              <p>
                <a href="FormasPag" className="text-dark">
                  Formas de pagamento
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-dark">
                Contato
              </h5>
              <p>
                <a href="mailto:grupopp33@gmail.com" className="text-dark">
                  {" "}
                  <img class="iconFooter" src="../envelope.svg" width="20px" />
                  Mande um e-mail
                </a>
              </p>
              <p>
                <a href="#" className="text-dark">
                  {" "}
                  <img class="iconFooter" src="../telephone.svg" width="20px" />
                  (85)3451-3132
                </a>
              </p>
              <p>
                <a href="#" className="text-dark">
                  {" "}
                  <img class="iconFooter" src="../local.svg" width="20px" />
                  R. Prof. Manoel Lourenço, 820 - Jóquei Clube, Fortaleza - CE,
                  60510-101
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="text-center p-3" id="rodape">
          © 2023 Copyright:
          <a class="text-dark" href="#">
            EmpyreanSupplements.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default Produto1;
