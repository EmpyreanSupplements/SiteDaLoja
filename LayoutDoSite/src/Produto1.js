import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import './Produto1.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Produto1() {
    return (
        <>
        <NavbarComp />
        <div className="detalheproduto justify-content-center">
        <img src="whey1.png" class="imagem-produto"/> 
        <div className="text" >  
  <h2>ISOLATE PERFOMANCE WHEY PROTEIN 2kg</h2>
  <br></br>
</div>
<div class="text-end">
          <h5>De: R$ 400,00</h5>
          <h2>Por: R$ 369,90</h2>
          <h6>6x de R$61,65 sem juros</h6>
</div>
</div>

  <br></br>

  <Button className="botaozinh justify-content-center" href='/Carrinho' variant="primary">Comprar</Button>

  <div className="espacocep">
      <label htmlFor="cep">Consulte o prazo de entrega do seu pedido: </label>
      <input
        type="text"
        id="cep"
        name="cep"
        placeholder="Digite o CEP"
      />
      <button type="button">
        Buscar
      </button>
    </div>
<br></br>
<br></br>
<br></br>
<h2 className='promoções'>PRODUTOS SIMILARES</h2>

  <div className="container justify-content-center">
    <div className='row col-md-12 justify-content-center'>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card className="texto"> 
         <h6>Novo</h6>
      </Card>
      <Card.Img variant="top" src="whey1.png" />
      <Card.Body>
        <Card.Title>WHEY PROTEIN ISOLATE</Card.Title>
        <h4>R$369,90</h4>
        <Button href='/Produto1' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
    <Card className="texto"> 
         <h6>Novo</h6>
      </Card>
      <Card.Img variant="top" src="whey2.webp" />
      <Card.Body>
        <Card.Title>WHEY BLEND 900g</Card.Title>
        <h4>R$139,00</h4>
        <Button href='/Produto2' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
    <Card className="texto"> 
         <h6>Novo</h6>
      </Card>
      <Card.Img variant="top" src="creatina1.webp" />
      <Card.Body>
        <Card.Title>CREATINE TURBO</Card.Title>
        <h4>R$89,90</h4>
        <Button href='/Produto3' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
    <Card className="texto"> 
         <h6>Novo</h6>
      </Card>
      <Card.Img variant="top" src="creatina2.webp" />
      <Card.Body>
        <Card.Title>CREATINE HARDCORE</Card.Title>
        <h4>R$174,99</h4>
        <Button href='/Produto4' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
           <Footer />
         </>
  )}

export default Produto1;