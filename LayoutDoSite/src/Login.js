import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import './Login.css';

function Login() {
return (   
<>
<NavbarComp />
<div className="Logar">
<div class="container">
    <h1 class="align-items-sm-center"> Login</h1>
    <h2 class="subtitleCadastro">Informe seus dados, por favor</h2>

    <form class="mt-3">
    <div class="container2">
        <div class="">
        <fieldset class="itens">
            <legend>Dados Pessoais</legend>
            <div class="form-floating mb-4">
                <input class="form-control" type="text" id="txtNome" placeholder=" " autofocus />
                <label for="txtNome">Nome</label>
            </div>
            <div class="form-floating mb-4">
                <input class="form-control" type="text" id="txtEmail" placeholder=" " />
                <label for="txtEmail">Email</label>
            </div>
            <div class="form-floating mb-4">
                <input class="form-control" type="password" id="txtSenha" placeholder=" " />
                <label for="txtSenha">Senha</label>
            </div>
        </fieldset>
    </div>
    </div>
    <hr />
    </form>
    <div class="mb-3 text-center" id="divConfirmar">
     <button className="button2">Fazer Login</button>
    </div>
</div>
</div>
<Footer />
</>
)}

export default Login;