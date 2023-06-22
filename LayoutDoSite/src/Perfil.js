import React, { useEffect } from "react";
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
import { updateProfile } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  doc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "./firebase";
import { auth } from "./firebase";



export default function Perfil() {
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(true);
  const [formData, setFormData] = useState('')
  const { name, email } = formData;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const name = user.displayName;
        const email = user.email;
        setFormData({
          name: name,
          email: email
        })
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  })

  function onLogout() {
    auth.signOut();
    navigate("/");
  }
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        //update display name in firebase auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update name in the firestore

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      toast.success("Profile details updated");
    } catch (error) {
      toast.error("Could not update the profile details");
    }
  }
  return (
    <><NavbarComp />

      <h3 id="welcome" class="font-weight-bold  justify-content-center"> Oi usuário! Acompanhe aqui suas informações.</h3>

      <div class="container-fluid justify-content-center w-75 p-3">

        <div class="small-12 medium-12 large-3 columns mw-50 mb-4  justify-content-center">

          <div class="list-group list-group-horizontal text-center justify-content-center" id="minhaLista" role="tablist">
            <a id="btnPerfil" class="list-group-item list-group-item-action active" data-toggle="list" href="#meusdados" role="tab">Meus dados</a>
            <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#meuspedidos" role="tab">Meus pedidos</a>
            <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#enderecos" role="tab">Endereços</a>
          </div>



        </div>

        <div class="tab-content container-fluid">

          <div class="tab-pane active" id="meusdados" role="tabpanel">
            <div class="container-fluid">
              <div class="row justify-content-center">
                <div class="col-md-6 ">
                  <h2 class="text-center">Editarㅤ
                    <img id="pencil-square" src="pencil-square.svg" />
                  </h2>
                  <form>
                    <div class="form-group">
                      <label for="nome">Nome:</label>
                      <input type="text" class="form-control rounded-pill p-2 mb-3 bg-white rounded  mt-2" value={name} disabled={!changeDetail} onChange={onChange} id="name" required />
                    </div>
                    <div class="form-group">
                      <label for="email">Email:</label>
                      <input type="email" class="form-control rounded-pill p-2 mb-3 bg-white rounded mt-2" value={email} disabled id="email" required />
                    </div>
                    <div class="form-group">
                      <label for="senha">Senha:</label>
                      <input type="password" class="form-control rounded-pill p-2 mb-3 bg-white rounded mt-2" id="senha" name="senha" />
                    </div>
                    <button type="submit" id="btn-Alterar" onLogout={onLogout} class="btn btn-primary text-center">
                     Sair
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>




          <div class="tab-pane" id="meuspedidos" role="tabpanel">

            <Tabs defaultActiveKey="tudo" id="Tab" className="" >
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
                                  <img src="creatina1.webp" class="img-thumbnail" />
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

                              <hr></hr>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>



              <Tab eventKey="Não pago" title="Não pago">
                <div class="container">
                  <div class="row align-items-start">
                    <div class="col">
                      <div class="container">
                        <ul class="list-group mb-3">
                          <li class="list-group-item py-3">
                            <div class="row g-3">
                              <div class="col-4 col-md-3 col-lg-2">
                                <a href="#">
                                  <img src="chocopro.png" class="img-thumbnail" />
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

                              <hr></hr>

                              <div class="row g-3">
                                <div class="col-4 col-md-3 col-lg-2">
                                  <a href="#">
                                    <img src="tauros.png" class="img-thumbnail" />
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

                                <hr></hr>
                              </div>

                              <div class="row g-3">
                                <div class="col-4 col-md-3 col-lg-2">
                                  <a href="#">
                                    <img src="creatina1.webp" class="img-thumbnail" />
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

                                <hr></hr>
                              </div>


                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>


              <Tab eventKey="Processando" title="Processando">
                <div class="container">
                  <div class="row align-items-start">
                    <div class="col">
                      <div class="container">
                        <ul class="list-group mb-3">
                          <li class="list-group-item py-3">
                            <div class="row g-3">
                              <div class="col-4 col-md-3 col-lg-2">
                                <a href="#">
                                  <img src="creatina1.webp" class="img-thumbnail" />
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

                              <hr></hr>

                              <div class="row g-3">
                                <div class="col-4 col-md-3 col-lg-2">
                                  <a href="#">
                                    <img src="creatina1.webp" class="img-thumbnail" />
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

                                <hr></hr>
                              </div>

                              <div class="row g-3">
                                <div class="col-4 col-md-3 col-lg-2">
                                  <a href="#">
                                    <img src="creatina1.webp" class="img-thumbnail" />
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

                                <hr></hr>
                              </div>


                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>


              <Tab eventKey="Enviado" title="Enviado" >
                <div class="container">
                  <div class="row align-items-start">
                    <div class="col">
                      <div class="container">
                        <ul class="list-group mb-3">
                          <li class="list-group-item py-3">
                            <div class="row g-3">
                              <div class="col-4 col-md-3 col-lg-2">
                                <a href="#">
                                  <img src="creatina1.webp" class="img-thumbnail" />
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

                              <hr></hr>


                              <div class="row g-3">
                                <div class="col-4 col-md-3 col-lg-2">
                                  <a href="#">
                                    <img src="creatina1.webp" class="img-thumbnail" />
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

                                <hr></hr>
                              </div>


                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>


              <Tab eventKey="Cancelado" title="Cancelado" >
                <div class="container">
                  <div class="row align-items-start">
                    <div class="col">
                      <div class="container">
                        <ul class="list-group mb-3">
                          <li class="list-group-item py-3">
                            <div class="row g-3">
                              <div class="col-4 col-md-3 col-lg-2">
                                <a href="#">
                                  <img src="creatina1.webp" class="img-thumbnail" />
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

                              <hr></hr>

                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>


              <Tab eventKey="Concluido" title="Concluído" >
                <div class="container">
                  <div class="row align-items-start">
                    <div class="col">
                      <div class="container">
                        <ul class="list-group mb-3">
                          <li class="list-group-item py-3">
                            <div class="row g-3">
                              <div class="col-4 col-md-3 col-lg-2">
                                <a href="#">
                                  <img src="creatina1.webp" class="img-thumbnail" />
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

                              <hr></hr>

                              <div class="row g-3">
                                <div class="col-4 col-md-3 col-lg-2">
                                  <a href="#">
                                    <img src="creatina1.webp" class="img-thumbnail" />
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

                                <hr></hr>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
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
                    <option>Afeganistão</option><option>Albânia</option><option>Alemanha</option><option>Andorra</option><option>Angola</option><option>Antígua e Barbuda</option><option>Arábia Saudita</option><option>Argélia</option><option>Argentina</option><option>Armênia</option><option>Austrália</option><option>Áustria</option><option>Azerbaijão</option><option>Bahamas</option><option>Bahrain</option><option>Bangladesh</option><option>Barbados</option><option>Belarus</option><option>Bélgica</option><option>Belize</option><option>Benin</option><option>Bolívia</option><option>Bósnia e Herzegovina</option><option>Botsuana</option><option>Brasil</option><option>Brunei</option><option>Bulgária</option><option>Burkina Faso</option><option>Burundi</option><option>Butão</option><option>Cabo Verde</option><option>Camarões</option><option>Camboja</option><option>Canadá</option><option>Catar</option><option>Cazaquistão</option><option>Chade</option><option>Chile</option><option>China</option><option>Chipre</option><option>Cingapura</option><option>Colômbia</option><option>Comores</option><option>Congo</option><option>Coreia do Norte</option><option>Coreia do Sul</option><option>Costa do Marfim</option><option>Costa Rica</option><option>Croácia</option><option>Cuba</option><option>Dinamarca</option><option>Djibuti</option><option>Dominica</option><option>Egito</option><option>El Salvador</option><option>Emirados Árabes Unidos</option><option>Equador</option><option>Equatorial Guiné</option><option>Eritreia</option><option>Eslováquia</option><option>Eslovênia</option><option>Espanha</option><option>Estados Unidos</option><option>Estônia</option><option>Eswatini</option><option>Etiópia</option><option>Fiji</option><option>Filipinas</option><option>Finlândia</option><option>França</option><option>Gabão</option><option>Gâmbia</option><option>Gana</option><option>Geórgia</option><option>Granada</option><option>Grécia</option><option>Guatemala</option><option>Guiana</option><option>Guiné</option><option>Guiné Equatorial</option><option>Guiné-Bissau</option><option>Haiti</option><option>Holanda</option><option>Honduras</option><option>Hungria</option><option>Iêmen</option><option>Ilhas Marshall</option><option>Ilhas Salomão</option><option>Ilhas Seychelles</option><option>Ilhas Timor-Leste</option><option>Ilhas Tonga</option><option>Ilhas Trindade e Tobago</option><option>Ilhas Tuvalu</option>
                    <option>Índia</option><option>Indonésia</option><option>Irã</option><option>Iraque</option><option>Irlanda</option><option>Islândia</option><option>Israel</option><option>Itália</option><option>Jamaica</option><option>Japão</option><option>Jordânia</option><option>Laos</option><option>Lesoto</option><option>Letônia</option><option>Líbano</option><option>Liberia</option><option>Líbia</option><option>Liechtenstein</option><option>Lituânia</option><option>Luxemburgo</option><option>Macau</option><option>Macedônia do Norte</option><option>Madagascar</option><option>Malásia</option><option>Malawi</option><option>Maldivas</option><option>Mali</option><option>Malta</option><option>Marrocos</option><option>Martinica</option><option>Mauritânia</option><option>México</option><option>Mianmar</option><option>Micronésia</option><option>Moldávia</option><option>Mônaco</option><option>Mongólia</option><option>Montenegro</option><option>Montserrat</option><option>Namíbia</option><option>Nauru</option><option>Nepal</option><option>Nicarágua</option><option>Níger</option><option>Nigéria</option><option>Niue</option><option>Noruega</option><option>Nova Caledônia</option><option>Nova Zelândia</option><option>Omã</option><option>Países Baixos</option><option>Palau</option><option>Palestina</option><option>Panamá</option><option>Papua Nova Guiné</option><option>Paquistão</option><option>Paraguai</option><option>Peru</option><option>Polônia</option><option>Porto Rico</option><option>Portugal</option><option>Quênia</option><option>Quirguistão</option><option>Quiribati</option><option>Reino Unido</option><option>República Centro-Africana</option><option>República Democrática do Congo</option><option>República Dominicana</option><option>República Tcheca</option><option>Reunião</option><option>Romênia</option><option>Ruanda</option><option>Rússia</option><option>Samoa</option><option>Samoa Americana</option><option>Santa Helena</option><option>Santa Lúcia</option><option>São Bartolomeu</option><option>São Cristóvão e Nevis</option><option>São Marino</option><option>São Martinho</option><option>São Pedro e Miquelão</option><option>São Tomé e Príncipe</option><option>São Vicente e Granadinas</option><option>Senegal</option><option>Serra Leoa</option><option>Sérvia</option><option>Síria</option>
                    <option>Sri Lanka</option><option>Sudão</option><option>Sudão do Sul</option><option>Suécia</option><option>Suíça</option><option>Suriname</option><option>Tailândia</option><option>Taiwan</option><option>Tajiquistão</option><option>Tanzânia</option><option>Tchéquia</option><option>Timor-Leste</option><option>Togo</option><option>Tonga</option><option>Trinidad e Tobago</option><option>Tunísia</option><option>Turcomenistão</option><option>Turquia</option><option>Tuvalu</option><option>Ucrânia</option><option>Uganda</option><option>Uruguai</option><option>Uzbequistão</option><option>Vanuatu</option><option>Vaticano</option><option>Venezuela</option><option>Vietnã</option><option>Zâmbia</option><option>Zimbábue</option>
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
                    <option>Acre</option>
                    <option>Alagoas</option>
                    <option>Amapá</option>
                    <option>Amazonas</option>
                    <option>Bahia</option>
                    <option>Ceará</option>
                    <option>Distrito Federal</option>
                    <option>Espírito Santo</option>
                    <option>Goiás</option>
                    <option>Maranhão</option>
                    <option>Mato Grosso</option>
                    <option>Mato Grosso do Sul</option>
                    <option>Minas Gerais</option>
                    <option>Pará</option>
                    <option>Paraíba</option>
                    <option>Paraná</option>
                    <option>Pernambuco</option>
                    <option>Piauí</option>
                    <option>Rio de Janeiro</option>
                    <option>Rio Grande do Norte</option>
                    <option>Rio Grande do Sul</option>
                    <option>Rondônia</option>
                    <option>Roraima</option>
                    <option>Santa Catarina</option>
                    <option>São Paulo</option>
                    <option>Sergipe</option>
                    <option>Tocantins</option>
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
            ...Função de logout
          </div>






        </div>
      </div>

      <Footer /></>
  )
}