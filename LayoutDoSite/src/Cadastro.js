import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import './Login.css';
import './Cadastro.css';
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom"
import OAuth from "./Components/OAuth";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { toast } from "react-toastify";
import { db } from "./firebase";
import { auth } from "./firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

export default function Cadastro() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
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
      
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);
      navigate ("/Login")
      toast.success("Cadastro concluído");
      } catch (error) {
      toast.error("Ocorreu um erro com seu cadastro");
      }
      createUserWithEmailAndPassword(auth,email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  }

return (   
    <><NavbarComp />
    <div className="Cadastrar">
 <div class="container"  text-align="center">
    <h1 class="cadastrarse">
        Cadastro
        <img id="iconRegister" src="person-plus-fill.svg"/>
    </h1>

    <h2 class="subtitleCadastro">Informe seus dados, por favor</h2>

    <form onSubmit={onSubmit} class="row justify-content-center" >
        <div className="col-md-6">
            <div class="form-group row mb-3">
                <label for="txtName">Nome</label>
                <input type="text" id = "name" value ={name} onChange={onChange} class="form-control rounded-pill shadow p-3 mb-3 bg-white rounded mt-2" placeholder="Digite o nome" autofocus />
            </div>
            <div class="form-group row mb-3">
            <label for="txtEmail">Email</label>
            <input type="email" id = "email" value = {email} onChange={onChange}  class="form-control rounded-pill shadow p-3 mb-3 bg-white rounded mt-2" placeholder="Insira o email" />
            </div>
            <div class="form-group row mb-3">
            <label for="txtSenha">Senha</label>
            <input type={showPassword ? "text" : "password"}
                id="password" value={password} onChange={onChange} class="form-control rounded-pill shadow p-3 mb-3 bg-white rounded mt-2" placeholder="Crie uma senha" />
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
            </div>

        <div class="mb-3" id="divConfirmar">
            <button id="btnConfirmar" type= "submit" class="rounded-pill shadow p-3 mb-3 rounded mt-2" className="button">Cadastrar-se</button>
            <p>Já tem cadastro? <a href="/Login" className="">Fazer login</a></p>
            <OAuth/>
        </div>
    </form>
</div>


        
</div>
   <Footer /></>
)}