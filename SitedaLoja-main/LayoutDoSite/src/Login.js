import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import './Login.css';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth} from "firebase/auth";
import { toast } from "react-toastify";
import OAuth from "./Components/OAuth";
import { ToastContainer } from "react-toastify";



export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({

    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/");
        toast.success("Você está logado!")
      }
      } catch (error) {
      toast.error("Credenciais erradas");
    }
  }
return (   
    <><NavbarComp />
    <div className="Logar">
    <div class="container" text-align="center">
    <h1 class="cadastrarse">
        Login
        <img id="iconLogin" src="box-arrow-in-right.svg"/>
    </h1>

    <h2 class="subtitleCadastro">Informe seus dados, por favor</h2>

    <form class="row justify-content-center" onSubmit={onSubmit}>
        <div className="col-md-6">
            <div class="form-group row mb-3">
            <label for="txtEmail">Email</label>
            <input onChange={onChange} value = {email} class="form-control rounded-pill shadow p-3 mb-3 bg-white rounded mt-2" type="email" id="email" placeholder="Insira o email" autofocus/>
            </div>
            <div class="form-group row mb-3">
            <label for="txtSenha">Senha</label>
            
            <input onChange={onChange} value = {password} class="form-control rounded-pill shadow p-3 mb-3 bg-white rounded mt-2" type={showPassword ? "text" : "password"} id="password" placeholder="Digite a senha" autofocus/>
            {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )} 
            </div>
                
              <div className="form-group row mb-2 justify-content-center text-center">
                  <Link 
                      to="/ForgotPassword"
                      className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out text-center"
                      >
                      Esqueceu sua senha? 
                    </Link>
              </div>

            </div>
        <hr/>
        <div class="justify-content-center  " id="divConfirmar"> 
            
           <button id="btnConfirmar" class="rounded-pill shadow p-3 rounded mt-2" className="button">Fazer login</button>
           <br></br>
          <OAuth/>
          <p className="mt-4">Não tem login? <a href="/Cadastro" className="">Cadastrar-se</a></p>
        </div>

    </form>
    <ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  />
</div>
</div>
<Footer /></>
)}

export default Login;