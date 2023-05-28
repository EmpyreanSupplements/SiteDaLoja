import React from "react";
import './Perfil.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Card from "./InfoPerfil";
import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";

function Perfil() {
return (   
<><NavbarComp/>

    <div class="container-fluid justify-content-center">
        <h3 class="welcome"> Oi fulano! Acompanhe aqui seus pedidos e seus dados cadastrais. Sair</h3>

        <div class="small-12 medium-12 large-3 columns mw-50  justify-content-center">

            <div class="list-group list-group-horizontal text-center " id="minhaLista" role="tablist">
                <a id="btnPerfil" class="list-group-item list-group-item-action active" data-toggle="list" href="#meusdados" role="tab">Meus dados</a>
                <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#meuspedidos" role="tab">Meus pedidos</a>
                <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#enderecos" role="tab">Endereços</a>
                <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#cartoes" role="tab">Cartões</a>
                <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#cupons" role="tab">Cupons</a>
                <a id="btnPerfil" class="list-group-item list-group-item-action" data-toggle="list" href="#sair" role="tab">Sair</a>
                
            </div>

            

        </div>

        <div class="tab-content">
                <div class="tab-pane active" id="meusdados" role="tabpanel">
                    ...1
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