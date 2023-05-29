import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import NavbarComp from './Components/NavbarComp';
import Footer from './Components/Footer';
import './Carrinho.css';

function Carrinho() {
return (  
<><NavbarComp />
<div className="Carrinho">
    <div class="container">
        <h1 className="titleCar">
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
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
        <li class="list-group-item py-3">
        <div class="row g-3">
            <div class="col-4 col-md-3 col-lg-2">
                <a href="#">
                    <img src="creatina1.webp" class="img-thumbnail"/>
                </a>
            </div>
            <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                <h4>
                    <b><a href="#" class="text-decoration-none text-danger">
                    WHEY PROTEIN ISOLATE</a></b>
                </h4>
                <h5 class="descricaoTxt">
                Fornece 27g de Whey Protein Isolado por porção, obtido através do processo de filtragem por membranas.
                </h5>
            </div>


            <div
                class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                


                <div class="input-group">
                    <button class="btn btn-outline-dark btn-sm" type="button">
                        
                            <img src="plus-lg.svg"/>
                       
                    </button>
                    <input id="buttomPlus" type="text" class="form-control text-center border-dark" value="40"/>
                    <button class="btn btn-outline-dark btn-sm" type="button">
                       
                            <img src="dash.svg"/>
                    </button>
                    <button class="btn btn-outline-danger border-dark btn-sm" type="button">
                        <i class="bi-trash" >
                        <img src="trash3.svg"/>
                        </i>
                    </button>
                </div>
                
                
            </div>
                

                <div class="text-end mt-2">
                    <small class="text-secondary">Valor kg: R$ 369,90</small><br/>
                    <span class="text-dark">Valor Item: R$ 15,96</span>
                </div>
        </div>
    </li>
    <hr/>
    <li class="list-group-item py-3">
        <div class="row g-3">
            <div class="col-4 col-md-3 col-lg-2">
                <a href="#">
                    <img src="creatina2.webp" class="img-thumbnail"/>
                </a>
            </div>
            <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                <h4>
                    <b><a href="#" class="text-decoration-none text-danger">
                    WHEY BLEND 900g</a></b>
                </h4>
                <h5 class="descricaoTxt">
                    Abacate manteiga da melhor qualidade possível e muito fresco.
                </h5>
            </div>
            <div
                class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                <div class="input-group">
                    <button class="btn btn-outline-dark btn-sm" type="button">
                        
                            <img src="plus-lg.svg"/>
                       
                    </button>
                    <input id="buttomPlus" type="text" class="form-control text-center border-dark" value="40"/>
                    <button class="btn btn-outline-dark btn-sm" type="button">
                       
                            <img src="dash.svg"/>
                    </button>
                    <button class="btn btn-outline-danger border-dark btn-sm" type="button">
                        <i class="bi-trash" >
                        <img src="trash3.svg"/>
                        </i>
                    </button>
                </div>
                <div class="text-end mt-2">
                    <small class="text-secondary">Valor kg: R$ 139,00</small><br/>
                    <span class="text-dark">Valor Item: R$139,00</span>
                </div>
            </div>
        </div>
    </li>
    <hr/>
    <li class="list-group-item py-3">
        <div class="row g-3">
            <div class="col-4 col-md-3 col-lg-2">
                <a href="#">
                    <img src="whey1.png" class="img-thumbnail"/>
                </a>
            </div>
            <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                <h4>
                    <b><a href="#" class="text-decoration-none text-danger">
                    CREATINE TURBO</a></b>
                </h4>
                <h5 class="descricaoTxt">
                    Abacate manteiga da melhor qualidade possível e muito fresco.
                </h5>
            </div>
            <div
                class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                <div class="input-group">
                    <button class="btn btn-outline-dark btn-sm" type="button">
                        <i class="bi-caret-down">
                        <img src="plus-lg.svg"/>
                        </i>
                    </button>
                    <input type="text" class="form-control text-center border-dark" value="4"/>
                    <button class="btn btn-outline-dark btn-sm" type="button">
                        <i class="bi-caret-up" >
                            <img src="dash.svg"/>
                        </i>
                    </button>
                    <button class="btn btn-outline-danger border-dark btn-sm" type="button">
                        <i class="bi-trash" >
                            <img src="trash3.svg"/>
                        </i>
                    </button>
                </div>
                <div class="text-end mt-2">
                    <small class="text-secondary">Valor kg: R$ 89,90</small><br/>
                    <span class="text-dark">Valor Item: R$ 15,96</span>
                </div>
            </div>
        </div>
    </li>
    <hr/>
    <li class="list-group-item py-3">
        <div class="row g-3">
            <div class="col-4 col-md-3 col-lg-2">
                <a href="#">
                    <img src="whey2.webp" class="img-thumbnail"/>
                </a>
            </div>
            <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                <h4>
                    <b><a href="#" class="text-decoration-none text-danger">
                    CREATINA HARDCORE</a></b>
                </h4>
                <h5 class="descricaoTxt">
                    Abacate manteiga da melhor qualidade possível e muito fresco.
                </h5>
            </div>
            <div
                class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                <div class="input-group">
                    <button class="btn btn-outline-dark btn-sm" type="button">
                        <i class="bi-caret-down" >
                        <img src="plus-lg.svg"/>
                        </i>
                    </button>
                    <input type="text" class="form-control text-center border-dark" value="4"/>
                    <button class="btn btn-outline-dark btn-sm" type="button">
                        <i class="bi-caret-up" >
                            <img src="dash.svg"/>
                        </i>
                    </button>
                    <button class="btn btn-outline-danger border-dark btn-sm" type="button">
                        <i class="bi-trash" >
                            <img src="trash3.svg"/>
                        </i>
                    </button>
                </div>
                <div class="text-end mt-2">
                    <small class="text-secondary">Valor kg: R$ 174,99</small><br/>
                    <span class="text-dark">Valor Item: R$ 15,96</span>
                </div>
            </div>
        </div>
    </li>
    <hr/>


        <li class="list-group-item py-3">
            <div class="text-end">
                <h4 class="text-dark mb-3">
                    Valor Total: R$ 63,84
                </h4>
                
                    <a href="/" class="btn btn-outline-success btn-lg">Continuar Comprando</a>
                    <a href="/" class="btn btn-danger btn-lg ms-2 mt-xs-3">Finalizar Compra</a>
                

            </div>
        </li>

        
    </ul>
</div>
    </div>
    

    
           

    <div class="col  bd-highlight" id="col2">
        <h4 class="text-dark mb-3" id="titleResumo">RESUMO DO PEDIDO</h4>

        <br></br><br></br>
        <p class="paragrafosDoResumo">Quantidade de produtos:ㅤ
           <a class="QntdDeProdutos">4</a>
        </p>

        <p class="paragrafosDoResumo">Frete:ㅤR$
           <a class="ValorDoFrete">100,00</a>
        </p>

        

        <p class="paragrafosDoResumo">Produtos:<br></br>
            <h6 class="flex align-items-end justify-content-end">
                4X   WHEY PROTEIN ISOLATE <br></br>
                4X   WHEY BLEND 900g <br></br>
                4X   CREATINE TURBO <br></br>
                4X   CREATINA HARDCORE <br></br>
            </h6>
        </p>

        <hr class="hrResumo"/>

        <h5 class="paragrafosDoResumo"> Total: R$ 980,00</h5>

            <div class="containerButtons">
                <a href="/" class="btn btn-outline-success btn-lg">Continuar Comprando</a>
                <a href="/" class="btn btn-danger btn-lg ms-2 mt-xs-3">Finalizar Compra</a>
            </div>
      
    </div>
  </div>
</div>


<h1 class='SubtitleCarrinho'>APROVEITE E LEVE MAIS...  </h1> 


<div className="container justify-content-center">
    <div className='row col-md-12 justify-content-center'>
      <Card className="m-3"style={{ width: '18rem' }}>
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


<Footer/>
</>
)}

export default Carrinho;