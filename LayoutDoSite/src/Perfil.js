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

        <div class="tab-content ">
                <div class="tab-pane active" id="meusdados" role="tabpanel">
                    ...1
                    <div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h2>Editarㅤ
      <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
      </h2>
      <form>
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input type="text" class="form-control" id="nome" name="nome" required/>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" name="email" required/>
        </div>
        <div class="form-group">
          <label for="senha">Senha:</label>
          <input type="password" class="form-control" id="senha" name="senha" required/>
        </div>
        <div class="form-group">
          <label for="endereco">Endereço:</label>
          <input type="text" class="form-control" id="endereco" name="endereco" required/>
        </div>
        <div class="form-group">
          <label for="estado">Estado:</label>
          <input type="text" class="form-control" id="estado" name="estado" required/>
        </div>
        <div class="form-group">
          <label for="cidade">Cidade:</label>
          <input type="text" class="form-control" id="cidade" name="cidade" required/>
        </div>
        <button type="submit" class="btn btn-primary">
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