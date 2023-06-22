import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import './PrivSeg.css'

function PrivSeg() {
return (   
<><NavbarComp/>

<div className="Formas">
<h1>Privacidade e segurança</h1> 
    <br></br>
    <div className="texto1">
    <h2>COMPRA 100% SEGURA</h2>
    <br></br>
    <h6>Para garantir uma operação 100% segura a você cliente, nos tornamos parceiros das maiores e melhores instituições de segurança, certificação e criptografia da internet.

Proporcionamos a você toda segurança em relação à compra e aos seus dados pessoais e financeiros.</h6>
    <br></br>
    </div>
    <div className="texto2">
   <img className="siteblindado" src="siteblindado.jpg"></img>
    <br></br>
    <h6>Compre tranquilo - seus dados estão guardados com segurança. O selo Site Blindado fica visível somente se o site auditado estiver aprovado nos milhares de testes anti-hacker realizados todos os dias.

O SITE BLINDADO realiza diariamente milhares de testes em nosso site. Todos esses testes são feitos como simulações de ataques de HACKERS, garantindo assim a qualidade total e geral do nosso sistema e a segurança ao comprar conosco.</h6>
    <br></br>
    </div>
    <div className="texto3">
    <img className="comodo" src="comodo.png"></img>
    <br></br>
    <h6>Compre tranquilo - seus dados estão guardados com segurança. O selo Site Blindado fica visível somente se o site auditado estiver aprovado nos milhares de testes anti-hacker realizados todos os dias.

O SITE BLINDADO realiza diariamente milhares de testes em nosso site. Todos esses testes são feitos como simulações de ataques de HACKERS, garantindo assim a qualidade total e geral do nosso sistema e a segurança ao comprar conosco.</h6>
    <br></br>
    </div>
    <div className="texto4">
    <h6>Presente no mercado brasileiro desde janeiro de 2000, a e-bit é referência no fornecimento de informações sobre e-commerce nacional.
A e-bit atua como um consultor de compras online, realizando a avaliação da compra junto ao consumidor.
A Empyreansupplements possui avaliação DIAMANTE (excelente) em avaliação de clientes.
    </h6>
    <br></br>
    </div>
</div>

<Footer/></>
)}

export default PrivSeg;