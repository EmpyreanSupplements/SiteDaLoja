import './Footer.css';

function Footer() {
    return (
   <footer className="bg-light text-white pt-5 pb-4">
    <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-dark">QUEM SOMOS?</h5>
                <p className="text-dark">Bem-vindo à sua loja! Como uma apaixonada entusiasta do fitness, nossa empresa tem o prazer de ajudar você a encontrar os suplementos e acessórios perfeitos para apoiar seus objetivos!</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-dark">Produtos</h5>
                <p><a href="#" className="text-dark">Suplementos</a></p>
                <p><a href="#" className="text-dark">Acessórios</a></p>
                <p><a href="#" className="text-dark">Moda esportiva</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-dark">Links úteis</h5>
                <p><a href="#" className="text-dark">Sua conta</a></p>
                <p><a href="#" className="text-dark">Ajuda</a></p>
                <p><a href="#" className="text-dark">Seja um afiliado</a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-dark">Contato</h5>
                <p><a href="mailto:grupopp33@gmail.com" className="text-dark"> <img src="envelope.svg" width="20px"/>Email da empresa</a></p>
                <p><a href="#" className="text-dark"> <img src="telephone.svg" width="20px"/>Nosso telefone:<br></br> (85)3451-3132</a></p>
                <p><a href="#" className="text-dark"> <img src="local.svg" width="20px"/>Onde estamos: <br></br>Av. Antônio Sales, 3110</a></p>
            </div>
        </div>

    </div>
   </footer>
)}

export default Footer