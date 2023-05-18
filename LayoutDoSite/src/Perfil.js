import React from "react";
import './Perfil.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Card from "./InfoPerfil";
import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";

function Perfil() {
return (   
<><NavbarComp/>

    <div class="container-fluid">
        <h3 class="welcome"> Oi fulano! Acompanhe aqui seus pedidos e seus dados cadastrais. Sair</h3>

        <div class="small-12 medium-12 large-3 columns">
        Coluna 1*

            <div class="list-group w-25 p-3">
                <a id="btnPerfil" href='/Carrinho'><button  href='/Carrinho' type="button" class="list-group-item list-group-item-action active">
                    Meus dados
                </button>
                </a>

                <a id="btnPerfil" href='/Carrinho'><button type="button" class="list-group-item list-group-item-action">
                    Meus pedidos</button>

                </a>
                <a id="btnPerfil" href='/Carrinho'><button  href='/Carrinho' type="button" class="list-group-item list-group-item-action">
                    Endereços de entrega</button>
                </a>

                    <a id="btnPerfil" href='/Carrinho'> <button href='/Carrinho' type="button" class="list-group-item list-group-item-action">
                    Formas de pagamentos</button>
                    </a>
                    
                    <a id="btnPerfil" href='/Carrinho'> <button  href='/Carrinho' type="button" class="list-group-item list-group-item-action">
                    Sair</button>
                    </a>
            </div>
        </div>

        
    </div>    

<Footer/></>
)}

export default Perfil;