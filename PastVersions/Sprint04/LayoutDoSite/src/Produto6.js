import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import './Produto6.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Produto6() {
    return (
        <>
        <NavbarComp />
        <div className="detalheproduto">
        <img src="tauros.png" class="imagem-produto"/> 
        <div className="text" >  
  <h2>TAURUS (60CAPS)</h2>
  <br></br>
</div>
<div class="text-end">
          <h2> R$38,86</h2>
          <h6>2x de R$19,43 sem juros</h6>
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
      <Card.Img variant="top" src="hiargu.png" />
      <Card.Body>
        <Card.Title>HI-ARGININA 3000</Card.Title>
        <Card.Text>
        Desenvolvida para o maior estímulo de liberação do óxido nítrico, Isso aumenta o fluxo de sangue e nutrientes.
        </Card.Text>
        <h3>R$65,90</h3>
        <Button href='/Produto5' variant="primary">Comprar</Button>
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
        <Button href='/Produto7' variant="primary">Comprar</Button>
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
        <Button href='/Produto8' variant="primary">Comprar</Button>
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
        <Button href='/Produto9' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
 </div>
 </div>
           <Footer />
         </>
  )}

export default Produto6;