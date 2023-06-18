import './Footer.css';

function Footer() {
    return (
   <footer className="bg-light text-white pt-5 pb-4">

    <div class="text-center p-3" id="redessociais">
        <div class="me-5">
            <span>Fique conectado nas nossas redes sociais:
                <a href="#"><img class="iconesDeRede" src="instagram.svg" width="20px"/></a>
                <a href="#"><img class="iconesDeRede" src="whatsapp.svg" width="20px"/></a>
                <a href="#"><img class="iconesDeRede" src="facebook.svg" width="20px"/></a>
                <a href="#"><img class="iconesDeRede" src="twitter.svg" width="20px"/></a>
            </span>
        </div>
    </div>

    <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-dark">QUEM SOMOS?</h5>
                <p className="text-dark">Bem-vindo à sua loja! Como uma apaixonada entusiasta do fitness, nossa empresa tem o prazer de ajudar você a encontrar os suplementos e acessórios perfeitos para apoiar seus objetivos!</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-dark">Produtos</h5>
                <p><a href="NotFound" className="text-dark">Suplementos</a></p>
                <p><a href="NotFound" className="text-dark">Acessórios</a></p>
                <p><a href="NotFound" className="text-dark">Moda esportiva</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-dark">Links úteis</h5>
                <p><a href="Perfil" className="text-dark">Sua conta</a></p>
                <p><a href="PrivSeg" className="text-dark">Privacidade e segurança</a></p>
                <p><a href="FormasPag" className="text-dark">Formas de pagamento</a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-dark">Contato</h5>
                <p><a href="mailto:grupopp33@gmail.com" className="text-dark"> <img class="iconFooter" src="envelope.svg" width="20px"/>Mande um e-mail</a></p>
                <p><a href="#" className="text-dark"> <img class="iconFooter" src="telephone.svg" width="20px"/>(85)3451-3132</a></p>
                <p><a href="#" className="text-dark"> <img class="iconFooter" src="local.svg" width="20px"/>R. Prof. Manoel Lourenço, 820 - Jóquei Clube, Fortaleza - CE, 60510-101</a></p>
            </div>
        </div>
    </div>
    
    <div class="text-center p-3" id="rodape">
      © 2023 Copyright: 
      <a class="text-dark" href="#"
         >EmpyreanSupplements.com</a
        >
    </div>
   </footer>
)}

export default Footer