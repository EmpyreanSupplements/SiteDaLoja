import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "./Components/OAuth";
import NavbarComp from './Components/NavbarComp';
import Footer from './Components/Footer';
import Button from 'react-bootstrap/Button';
import './ForgotPassword.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset password");
    }
  }
  return (
    <> <NavbarComp/>
    <section className="sessao">
      <h1 className="text-center mt-6 font-bold mb-5">Esqueceu sua senha?</h1>
      <h4 className="text-center mt-6 font-bold">Digite seu endereço de email</h4>
        <div className="container" text-align="center">
          <form class="row justify-content-center" onSubmit={onSubmit}>
           <div className="col-md-6">
          <div className="form-group row mb-3">
            <input 
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
              className="mb-3 px-4 py-2 text-gray-700 bg-white border-gray-300 rounded"
            />
            </div>
            
            <div className="form-group row mb-3">
              <p className="mb-3">
                Ainda não tem cadastro?
                <Link
                  to="/Cadastro"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Cadastrar-se
                </Link>
              </p>
            </div>
            <div className="form-group row mb-3">
            <Button className="buttonforgot" syze="lg" type="submit">Enviar</Button>
            </div>
            </div>
      

          </form>
        </div>
 
    </section>
    <Footer/>
    </>
  );
}
