import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import './Login.css';
import Container from 'react-bootstrap/Container';
function Login() {
return (   
<><NavbarComp />
<div className="Logar">
<div class="container" text-align="center">
    <h1 class="cadastrarse"> Login</h1>
    <h2 class="subtitleCadastro">Informe seus dados, por favor</h2>

    <form class="row">
        <div className="row">
            <div class="form-group row mb-3">
            <label for="txtNome">Nome</label>
                <input class="form-control" type="text" id="txtNome" placeholder="Digite o nome" autofocus />
            </div>
            <div class="form-group row mb-3">
            <label for="txtEmail">Email</label>
            <input class="form-control" type="email" id="txtEmail" placeholder="Insira o email" autofocus/>
            </div>
            <div class="form-group row mb-3">
            <label for="txtSenha">Senha</label>
            <input class="form-control" type="password" id="txtSenha" placeholder="Digite a senha" autofocus/>
            </div>
            </div>
    <hr />
    <div class="mb-3" id="divConfirmar">
     <button className="button">Fazer login</button>
     <p>Não tem login?<a href="/Cadastro" className="">Cadastrar-se</a></p>
    </div>
    </form>
</div>
</div>
<Footer /></>
)}

export default Login;