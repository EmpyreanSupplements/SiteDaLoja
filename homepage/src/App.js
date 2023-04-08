import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Footer from './Components/Footer';


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
  <div className="container">
    <div className='row col-md-12'>
      <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="whey1.png" />
      <Card.Body>
        <Card.Title>WHEY PROTEIN ISOLATE</Card.Title>
        <Card.Text>
        fornece 27g de Whey Protein Isolado por porção,  obtido através do processo de filtragem por membranas.
        </Card.Text>
        <h3>R$369,90</h3>
        <Button href='/Carrinho' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="whey2.webp" />
      <Card.Body>
        <Card.Title>WHEY BLEND 900g</Card.Title>
        <Card.Text>
        Produto de alto valor biológico que pode ser utilizado para as mais diversas finalidades e objetivos.
        </Card.Text>
        <h3>R$139,00</h3>
        <Button href='/Carrinho' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="creatina1.webp" />
      <Card.Body>
        <Card.Title>CREATINE TURBO</Card.Title>
        <Card.Text>
        Apoia o ganho de massa e a conclusão dos treinos mantendo a qualidade de suas repetições.
        </Card.Text>
        <h3>R$89,90</h3>
        <Button href='/Carrinho' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="creatina2.webp" />
      <Card.Body>
        <Card.Title>CREATINA HARDCORE</Card.Title>
        <Card.Text>
        Ajuda a hidratar a musculatura enquanto você malha, promovendo o aumento, força e firmeza.
        </Card.Text>
        <h3>R$174,99</h3>
        <Button href='/Carrinho' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
  <br></br>
  <h1 className='promoções'>PROMOÇÕES</h1>
  <br></br>
  <Carousel className='carrossel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="promo1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="promo2.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="promo3.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  <br></br>
    <Footer />
    </>
  );
}

export default App;
