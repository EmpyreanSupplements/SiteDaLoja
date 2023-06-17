import React from "react";
import './Perfil.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./InfoPerfil";
import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';



function Perfil() {
return (   
<><NavbarComp/>

<h3 id="welcome" class="font-weight-bold  justify-content-center"> Oi fulano! Acompanhe aqui suas informações. Sair</h3>

    <div class="container-fluid justify-content-center w-75 p-3">

        <div class="small-12 medium-12 large-3 columns mw-50  justify-content-center">

            <div  class="list-group list-group-horizontal text-center justify-content-center" id="minhaLista" role="tablist">
                <a id="btnPerfil" class="list-group-item list-group-item-action active" data-toggle="list" href="#meusdados" role="tab">Meus dados</a>
                <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#meuspedidos" role="tab">Meus pedidos</a>
                <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#enderecos" role="tab">Endereços</a>
                <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#sair" role="tab">Sair</a>
                
            </div>

            

        </div>

        <div class="tab-content container-fluid">
                <div class="tab-pane active" id="meusdados" role="tabpanel">
            
                    <div class="container-fluid">
  <div class="row justify-content-center">
    <div class="col-md-6 ">
      <h2 class="text-center">Editarㅤ
      <img id="pencil-square" src="pencil-square.svg"/>
      </h2>
      <form>
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input type="text" class="form-control rounded-pill shadow p-3 mb-3 bg-white rounded mt-2" id="nome" name="nome" required/>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control rounded-pill shadow p-3 mb-3 bg-white rounded mt-2" id="email" name="email" required/>
        </div>
        <div class="form-group">
          <label for="senha">Senha:</label>
          <input type="password" class="form-control rounded-pill shadow p-3 mb-3 bg-white rounded mt-2" id="senha" name="senha" required/>
        </div>
        <div class="form-group">
          <label for="endereco">CPF:</label>
          <input type="text" class="form-control rounded-pill shadow p-3 mb-3 bg-white rounded mt-2" id="cpf" name="cpf" required/>
        </div>
        <div class="form-group">
          <label for="estado">Estado:</label>
          <input type="text" class="form-control rounded-pill shadow p-3 mb-3 bg-white rounded mt-2" id="estado" name="estado" required/>
        </div>
        <div class="form-group">
          <label for="cidade">Cidade:</label>
          <input type="text" class="form-control rounded-pill shadow p-3 mb-5 bg-white rounded mt-2" id="cidade" name="cidade" required/>
        </div>
        <button type="submit" id="btn-Alterar" class="btn btn-primary text-center">
            Alterar
        </button>
      </form>
    </div>
  </div>

</div>
                </div>

                <div class="tab-pane" id="meuspedidos" role="tabpanel">
               
             <div className="butao">
             <Button variant="dark">Pedidos excluídos</Button>
             </div>
                <Tabs defaultActiveKey="tudo" id="Tab" className="mb-3" >
                 <Tab eventKey="tudo" title="Tudo">
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
                  <h4 class="text-dark">Pedido cancelado</h4><br></br>
                  <Button variant="primary">Adicionar ao carrinho</Button><br></br>
                 <span class="text-dark">Valor: R$ 369,90</span>
                 
            </div>
            <div class="col-4 col-md-3 col-lg-2">
                <a href="#">
                    <img src="Tauros.png" class="img-thumbnail"/>
                </a>
            </div>
            <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                <h4>
                    <b><a href="#" class="text-decoration-none text-danger">
                    TAURUS (60CAPS)</a></b>
                </h4>
                <h5 class="descricaoTxt">
                Taurus da FTW com l-taurina é um aminoácido livre que aumenta a resistência, possui ação antioxidante.
                </h5>
            </div>
            <div
                class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                  <h4 class="text-dark">Não pago</h4><br></br>
                  <Button variant="primary">Finalizar compra</Button><br></br>
                 <span class="text-dark">Valor: R$38,86</span>
                 
            </div>
            <div class="col-4 col-md-3 col-lg-2">
                <a href="#">
                    <img src="chocopro.png" class="img-thumbnail"/>
                </a>
            </div>
            <div class="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">
                <h4>
                    <b><a href="#" class="text-decoration-none text-danger">
                    CHOCOLATE PROTEICO</a></b>
                </h4>
                <h5 class="descricaoTxt">
                12 unidades de recompensa deliciosa e nutritiva, veio para ser a recompensa oficial dos seus treinos.
                </h5>
            </div>
            <div
                class="col-6 offset-6 col-sm-6 offset-sm-6 col-md-4 offset-md-8 col-lg-3 offset-lg-0 col-xl-2 align-self-center mt-3">
                  <h4 class="text-dark">Pedido concluído</h4><br></br>
                  <Button variant="primary">Voltar a comprar</Button><br></br>
                 <span class="text-dark">Valor: R$166,79</span>
                 
            </div>
                 </div> </li></ul> </div></div></div></div>
          
                 </Tab>
                  <Tab eventKey="Não pago" title="Não pago">
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
                  <h4 class="text-dark">Pedido cancelado</h4><br></br>
                  <Button variant="primary">Adicionar ao carrinho</Button><br></br>
                 <span class="text-dark">Valor: R$ 369,90</span>
                 
            </div>
                  </Tab>
                  <Tab eventKey="Processando" title="Processando">
                 
                  </Tab>
                  <Tab eventKey="Enviado" title="Enviado" >
                   
                  </Tab>
                  <Tab eventKey="Concluido" title="Concluído" >
                  
                  </Tab>
                </Tabs>
                </div>

                <div class="tab-pane" id="enderecos" role="tabpanel">
           
                    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>País</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Escolha...</option>
            <option>Brasil</option>
            <option>Estados Unidos</option>
            <option>Alemanha</option>
            <option>Austrália</option>
            <option>Cuba</option>
            <option>Canadá</option>
            <option>Equador</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contato</Form.Label>
          <Form.Control type="number" placeholder="55+" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>CEP</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Cidade</Form.Label>
        <Form.Control />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Bairro</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Estado</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Escolha...</option>
            <option>Alagoas</option>
            <option>Ceará</option>
            <option>Rio de Janeiro</option>
            <option>São Paulo</option>
            <option>Acre</option>
            <option>Rio Grande do Sul</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Complemento</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Definir endereço como padrão" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Confirmar
      </Button>
    </Form>
                </div>
                <div class="tab-pane" id="sair" role="tabpanel">
                    ...7
                </div>
        </div> 
    </div>    

<Footer/></>
)}

export default Perfil;