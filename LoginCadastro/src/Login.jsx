import logo from "./assets/logo.svg";
import { Link } from "react-router-dom"
import "./global.css";

export function Login() {
  return <div className="container">
    <header className="header">
      <img src={logo} alt="LogoEmpresa" />
    </header>

    <form>

      <div className="inputContainer">
        <label htmlFor="email">Email</label>
        <input 
        type="text" 
        name="email" 
        id="email"
        placeholder="insira o Email"
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="password">Senha</label>
        <input 
        type="password" 
        name="password" 
        id="password"
        placeholder="*****"
        />
      </div>

      <a href="">Esqueceu sua senha?</a>

      <button className="button">
        Fazer login
      </button>

      <div className="footer">
        <p>Não tem um cadastro?</p>
        <Link to="/">Cadastrar-se</Link>
      </div>
    </form>
  </div>
}

export default Login