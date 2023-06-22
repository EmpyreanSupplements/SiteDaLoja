import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Footer from './Components/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function App() {
  return (
    <>
     <NavbarComp/>
     <Carousel className='Carousel' slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Banner1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Banner2.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Banner3.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <br></br>
  <div className="container justify-content-center">
    <div className='row col-md-12 justify-content-center '>
      <Card className="m-3"style={{ width: '18rem' }}>
      <Card className="justify-content-start border-0 pt-3 pb-1" style={{ width: '3rem' }}> 
        <img class="justify-content-start" src="iconNew.png"/>
      </Card>
      <Card.Img variant="top" src="whey1.png" />
      <Card.Body>
        <Card.Title>WHEY PROTEIN ISOLATE</Card.Title>
        <Card.Text>
        Fornece 27g de Whey Protein Isolado por porção,  obtido através do processo de filtragem por membranas.
        </Card.Text>
        <h3>R$369,90</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
    <Card className="justify-content-start border-0 pt-3 pb-1" style={{ width: '3rem' }}> 
      <img class="justify-content-start" src="iconNew.png"/>
    </Card>
      <Card.Img variant="top" src="whey2.webp" />
      <Card.Body>
        <Card.Title>WHEY BLEND 900g</Card.Title>
        <Card.Text>
        Produto de alto valor biológico que pode ser utilizado para as mais diversas finalidades e objetivos.
        </Card.Text>
        <h3>R$139,00</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
    <Card className="justify-content-start border-0 pt-3 pb-1" style={{ width: '3rem' }}> 
      <img class="justify-content-start" src="iconNew.png"/>
    </Card>
      <Card.Img variant="top" src="creatina1.webp" />
      <Card.Body>
        <Card.Title>CREATINE TURBO</Card.Title>
        <Card.Text>
        Apoia o ganho de massa e a conclusão dos treinos mantendo a qualidade de suas repetições.
        </Card.Text>
        <h3>R$89,90</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
    <Card className="justify-content-start border-0 pt-3 pb-1" style={{ width: '3rem' }}> 
      <img class="justify-content-start" src="iconNew.png"/>
    </Card>
      <Card.Img variant="top" src="creatina2.webp" />
      <Card.Body>
        <Card.Title>CREATINA HARDCORE</Card.Title>
        <Card.Text>
        Ajuda a hidratar a musculatura enquanto você malha, promovendo o aumento, força e firmeza.
        </Card.Text>
        <h3>R$174,99</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
  <br></br>

    <div className="container justify-content-center">
      <h1 className="promoções">PROMOÇÕES</h1>
    </div>

  <br></br>
  <Carousel className='carrossel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slider1.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slider2.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slider3.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  <br></br>
  <div className="container justify-content-center">
    <div className='row col-md-12 justify-content-center'>
      <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="hiargu.png" />
      <Card.Body>
        <Card.Title>HI-ARGININA 3000</Card.Title>
        <Card.Text>
        Desenvolvida para o maior estímulo de liberação do óxido nítrico, Isso aumenta o fluxo de sangue e nutrientes.
        </Card.Text>
        <h3>R$65,90</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="tauros.png" />
      <Card.Body>
        <Card.Title>TAURUS (60CAPS)</Card.Title>
        <Card.Text>
        Taurus da FTW com l-taurina é um aminoácido livre que aumenta a resistência, possui ação antioxidante.
        </Card.Text>
        <h3>R$38,86</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="crealanina.png" />
      <Card.Body>
        <Card.Title>BETA ALANINA (200G)</Card.Title>
        <Card.Text>
        Não pode faltar na sua rotina para ajudar na performance e na recuperação muscular pós treino.
        </Card.Text>
        <h3>R$64,28</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="creaticinza.png" />
      <Card.Body>
        <Card.Title>BETA ALANINA (150G)</Card.Title>
        <Card.Text>
        A Beta-Alanina da Max Titanium é um excelente suplemento para incluir em seu consumo, é importantíssimo.
        </Card.Text>
        <h3>R$95,39</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="chocopro.png" />
      <Card.Body>
        <Card.Title>CHOCOLATE PROTEICO</Card.Title>
        <Card.Text>
        12 unidades de recompensa deliciosa e nutritiva, veio para ser a recompensa oficial dos seus treinos.
        </Card.Text>
        <h3>R$166,79</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="wheycinza.jpeg" />
      <Card.Body>
        <Card.Title>ARGIPURE (30CAPS)</Card.Title>
        <Card.Text>
        A arginina funciona como um precursor de outros aminoácidos e proteínas, ela atua no ciclo da ureia.
        </Card.Text>
        <h3>R$58,25</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="wheychoco.png" />
      <Card.Body>
        <Card.Title>DELICIOUS 3WHEY</Card.Title>
        <Card.Text>
        é uma fonte de proteína que ajuda na formação dos músculos e ossos, se o seu objetivo é hipertrofia, ele auxilia. 
        </Card.Text>
        <h3>R$129,58</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="wheydoce.png" />
      <Card.Body>
        <Card.Title>BEST WHEY</Card.Title>
        <Card.Text>
        É um Whey Protein hidrolisado, concentrado e isolado. Possui 25g de proteína  de alto valor biológico.
        </Card.Text>
        <h3>R$194,58</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="wheygold.png" />
      <Card.Body>
        <Card.Title>100% WHEY PROTEIN</Card.Title>
        <Card.Text>
        É um dos melhores suplementos proteicos mais vendidos no mundo. É uma Whey Protein isolada...
        </Card.Text>
        <h3>R$344,45</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="wheynitro.jpg" />
      <Card.Body>
        <Card.Title>NITRO TECH 100%</Card.Title>
        <Card.Text>
        É uma nova fórmula baseada em péptidos de soro de absorção rápida e isolados de soro de alta pureza.
        </Card.Text>
        <h3>R$294,53</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="wheypure.png" />
      <Card.Body>
        <Card.Title>100% PURE WHEY</Card.Title>
        <Card.Text>
        É um suplemento proteico composto pela Proteína Concentrada do Soro de Leite (Whey Protein Concentrate).
        </Card.Text>
        <h3>R$175,41</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="antioxi.png" />
      <Card.Body>
        <Card.Title>MELATO LABZ</Card.Title>
        <Card.Text>
        Suplemento que é um poderoso antioxidante, atua contra os radicais livres e realiza a regulagem do sono. 
        </Card.Text>
        <h3>R$88,94</h3>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
  <br></br>
  <Carousel className='carrossel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner5.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner6.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="banner7.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <br></br>
    <Footer />
    <ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  />
    </>
  );
}

export default App;
