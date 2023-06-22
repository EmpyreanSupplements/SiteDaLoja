import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import './FormasPag.css'

function FormasPag() {
return (   
<><NavbarComp/>
<div className="Formas">
<h1>Formas de pagamento</h1> 
    <br></br>
    <div className="texto1">
    <h2>IMPORTANTE</h2>
    <br></br>
    <h6>O prazo para pagamento do pedido é de dois dias úteis. Após esse prazo o pedido em aberto será cancelado.</h6>
    <br></br>
    </div>
    <div className="texto2">
    <h2>PIX</h2>
    <br></br>
    <h6>O pagamento via PIX é confirmado de forma automática, não é preciso realizar o envio de comprovante. <br></br> Após realizar o pedido, o prazo para pagamento é de até 30 minutos.</h6>
    <br></br>
    </div>
    <div className="texto3">
    <h2>BOLETO BANCÁRIO</h2>
    <br></br>
    <h6>Também disponibilizamos a forma de pagamento via Boleto Bancário que pode ser pago em qualquer agência bancária.</h6>
    <br></br>
    </div>
    <div className="texto4">
    <h2>IMPORTANTE BOLETO BANCÁRIO</h2>
    <br></br>
    <h6>O pedido não é enviado antes da quitação do boleto bancário. O valor do boleto será igual o valor do pedido<br></br>ex: produto + frete - desconto = total.
        O envio do produto é feito após a confirmação do pagamento.<br></br>O não pagamento do boleto antes do vencimento do mesmo acarretará no cancelamento do pedido<br></br>sem qualquer custo ao cliente.
    </h6>
    <br></br>
    </div>
    <div className="texto5">
    <h2>CARTÃO DE CRÉDITO</h2>
    <br></br>
    <h6>O parcelamento pode ser feito em até dez vezes sem juros. Aceitamos as bandeiras:<br></br>Visa, Mastercard, ELO, Amex, Hipercard, Hiper e Bradesco.</h6>
    <br></br>
    </div>
    <div className="imagem">
    <img src="bandeirasCartoes.jpeg"></img>
    </div>
</div>

<Footer/></>
)}

export default FormasPag;