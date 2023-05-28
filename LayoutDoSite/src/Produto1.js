import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import './Produto1.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Produto1() {
    return (
        <>
        <NavbarComp />

        <div class="container px-lg-5 justify-content-center">
          <div class="row mx-lg-n5">

            <div class="col py-3 px-lg-5">
              <img src="whey1.png" class="justify-content-center"/> 
              <div className="text" >  
                <br></br>
              </div>
            </div>

            <div class="col py-3 px-lg-5 border rounded">
              <div className="detalheproduto justify-content-center">
                  <div className="text" >  
                    <h2>ISOLATE PERFOMANCE WHEY PROTEIN 2kg</h2>
                    <br></br>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Card.Text>
                    <br/>
                  </div>
                <div class="text-end">
                          <h5>De: R$ 400,00</h5>
                          <h2>Por: R$ 369,90</h2>
                          <h6>6x de R$61,65 sem juros</h6>
                </div>
              </div>

              <div class="col text-center justify-content-center">
              <Button className="sizeBtnDescProduto" href='/Carrinho' variant="primary">Comprar</Button>
              </div>

              <div class="input-group mb-3 mt-5">
                <input type="text" class="form-control rounded-pill shadow bg-white rounded " placeholder="Calcule o valor do frete..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                    <img id="iconSearchCep" src="search.svg"/>
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
    <div className='row col-md-12 justify-content-center'>
    <Card className="m-3"style={{ width: '18rem' }}>

      <Card className="justify-content-start border-0 pt-3 pb-1" style={{ width: '3rem' }}> 
         <img class="justify-content-start" src="iconNew.png"/>
      </Card>

      <Card.Img variant="top" src="whey1.png" />

      <Card.Body>
        <Card.Title>WHEY PROTEIN ISOLATE</Card.Title>
        <Card.Text>
        Produto de alto valor biológico que pode ser utilizado para as mais diversas finalidades e objetivos.
        </Card.Text>
        <h4>R$369,90</h4>
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
        <h4>R$139,00</h4>
        <Button href='/Produto2' variant="primary">Comprar</Button>
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
        Produto de alto valor biológico que pode ser utilizado para as mais diversas finalidades e objetivos.
        </Card.Text>
        <h4>R$89,90</h4>
        <Button href='/Produto3' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>

    <Card className="justify-content-start border-0 pt-3 pb-1" style={{ width: '3rem' }}> 
      <img class="justify-content-start" src="iconNew.png"/>
    </Card>
    
      <Card.Img variant="top" src="creatina2.webp" />
      <Card.Body>
        <Card.Title>CREATINE HARDCORE</Card.Title>
        <Card.Text>
        Produto de alto valor biológico que pode ser utilizado para as mais diversas finalidades e objetivos.
        </Card.Text>
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