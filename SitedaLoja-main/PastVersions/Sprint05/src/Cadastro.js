import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import './Login.css';
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom"
export function Cadastro() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();
    
    async function Cadastrar (e) {
        e.preventDefault();
        const response = createUserWithEmailAndPassword( auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            navigate("/");
        })
        .catch((error) => {
            console.log(error);
        });
    };

return (   
    <><NavbarComp />
    <div className="Cadastrar">
 <div class="container"  text-align="center">
    <h1 class="cadastrarse"> Cadastro</h1>
    <h2 class="subtitleCadastro">Informe seus dados, por favor</h2>

    <form class="row" onSubmit={Cadastrar}>
        <div className="row">
            <div class="form-group row mb-3">
            <label for="txtNome">Nome</label>
                <input class="form-control" type="text" id="txtNome" placeholder="Digite o nome" autofocus />
            </div>
            <div class="form-group row mb-3">
            <label for="txtEmail">Email</label>
            <input class="form-control" type="email" id="txtEmail" placeholder="Insira o email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="form-group row mb-3">
            <label for="txtSenha">Senha</label>
            <input class="form-control" type="password" id="txtSenha" placeholder="Crie uma senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            </div>
    <hr />
    <div class="mb-3" id="divConfirmar">
     <button className="button">Cadastrar-se</button>
     <p>Já tem cadastro?<a href="/Login" className="">Fazer login</a></p>
    </div>
    </form>
</div>


        
</div>
   <Footer /></>
)}

export default Cadastro;