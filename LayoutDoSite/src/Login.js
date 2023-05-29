import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import './Login.css';
import Container from 'react-bootstrap/Container';
function Login() {
return (   
<><NavbarComp />
<div className="Logar">
<div class="container" text-align="center">
    <h1 class="cadastrarse">
        Login
        <img id="iconLogin" src="box-arrow-in-right.svg"/>
    </h1>

    <h2 class="subtitleCadastro">Informe seus dados, por favor</h2>

    <form class="row justify-content-center">
        <div className="col-md-6">
            <div class="form-group">
            <label for="txtNome">Nome</label>
                <input class="form-control rounded-pill shadow p-3 mb-3 bg-white rounded mt-2" type="text" id="txtNome" placeholder="Digite o nome" autofocus />
            </div>
            <div class="form-group">
            <label for="txtEmail">Email</label>
            <input class="form-control rounded-pill shadow p-3 mb-3 bg-white rounded mt-2" type="email" id="txtEmail" placeholder="Insira o email" autofocus/>
            </div>
            <div class="form-group">
            <label for="txtSenha">Senha</label>
            <input class="form-control rounded-pill shadow p-3 mb-5 bg-white rounded mt-2" type="password" id="txtSenha" placeholder="Digite a senha" autofocus/>
            </div>
            </div>
    <hr />
        <div class="justify-content-center mb-3" id="divConfirmar">
            <button id="btnConfirmar" class="rounded-pill shadow p-3 mb-3 rounded mt-2" className="button">Fazer login</button>
            <p>Não tem login? <a href="/Cadastro" className="">Cadastrar-se</a></p>
            google buttom aqui
        </div>
    </form>
</div>
</div>
<Footer /></>
)}

export default Login;