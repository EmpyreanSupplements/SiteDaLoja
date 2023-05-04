import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import './Produto11.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Produto11() {
    return (
        <>
        <NavbarComp />
        <div className="detalheproduto">
        <img src="wheychoco.png" class="imagem-produto"/> 
        <div className="text" >  
  <h2>DELICIOUS 3WHEY</h2>
  <br></br>
</div>
<div class="text-end">
          <h2> R$129,58</h2>
          <h6>4x de R$32,39 sem juros</h6>
</div>
</div>

  <br></br>

  <Button className="botaozinh" href='/Carrinho' variant="primary">Comprar</Button>

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

    <div className="container">
    <div className='row col-md-12'>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="chocopro.png" />
      <Card.Body>
        <Card.Title>CHOCOLATE PROTEICO</Card.Title>
        <Card.Text>
        12 unidades de recompensa deliciosa e nutritiva, veio para ser a recompensa oficial dos seus treinos.
        </Card.Text>
        <h3>R$166,79</h3>
        <Button href='/Produto9' variant="primary">Comprar</Button>
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
        <Button href='/Produto10' variant="primary">Comprar</Button>
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
        <Button href='/Produto12' variant="primary">Comprar</Button>
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
        <Button href='/Produto13' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
 </div>
 </div>
           <Footer />
         </>
  )}

export default Produto11;