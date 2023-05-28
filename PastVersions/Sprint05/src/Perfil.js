import React from "react";
import './Perfil.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Card from "./InfoPerfil";
import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";

function Perfil() {
return (   
<><NavbarComp/>

<h3 id="welcome" class="font-weight-bold  justify-content-center"> Oi fulano! Acompanhe aqui suas informações. Sair</h3>

    <div class="container-fluid justify-content-center w-75 p-3">

        <div class="small-12 medium-12 large-3 columns mw-50  justify-content-center">

            <div class="list-group list-group-horizontal text-center justify-content-center" id="minhaLista" role="tablist">
                <a id="btnPerfil" class="list-group-item list-group-item-action active" data-toggle="list" href="#meusdados" role="tab">Meus dados</a>
                <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#meuspedidos" role="tab">Meus pedidos</a>
                <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#enderecos" role="tab">Endereços</a>
                <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#cartoes" role="tab">Cartões</a>
                <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#cupons" role="tab">Cupons</a>
                <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#sair" role="tab">Sair</a>
                
            </div>

            

        </div>

        <div class="tab-content container-fluid">
                <div class="tab-pane active" id="meusdados" role="tabpanel">
                    ...1
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
          <label for="endereco">Endereço:</label>
          <input type="text" class="form-control rounded-pill shadow p-3 mb-3 bg-white rounded mt-2" id="endereco" name="endereco" required/>
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
                    ...2

                    
                </div>

                <div class="tab-pane" id="enderecos" role="tabpanel">
                    ...3
                </div>

                <div class="tab-pane" id="cartoes" role="tabpanel">
                    ...5
                </div>
                <div class="tab-pane" id="cupons" role="tabpanel">
                    ...6
                </div>
                <div class="tab-pane" id="sair" role="tabpanel">
                    ...7
                </div>
        </div>







        
    </div>    

<Footer/></>
)}

export default Perfil;