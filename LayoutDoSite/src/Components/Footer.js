import './Footer.css';

function Footer() {
    return (
   <footer className="bg-light text-white pt-5 pb-4">
    <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold text-dark">QUEM SOMOS?</h5>
                <p className="text-dark">Bem-vindo à sua loja! Como uma apaixonada entusiasta do fitness, nosssa empresa tem o prazer de ajudar você a encontrar os suplementos e acessórios perfeitos para apoiar seus objetivos!</p>
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
                <p><a href="mailto:agentavery@sample.com" className="text-dark"> <img src="https://img.icons8.com/fluency/48/null/apple-mail.png" width="50px"/>Email da empresa</a></p>
                <p><a href="https://github.com/EmpyreanSupplements" className="text-dark"> <img src="https://img.icons8.com/fluency/48/null/github.png" width="50px"/>Github</a></p>
                <p><a href="#" className="text-dark"> <img src="developers.png" width="40px"/>Desenvolvedores</a></p>
            </div>
        </div>

    </div>
   </footer>
)}

export default Footer