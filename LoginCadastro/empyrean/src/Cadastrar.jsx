import logo from "./assets/logo.svg";
import { Link } from "react-router-dom"
import "./global.css";
import { useState } from "react";

export function Cadastrar() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev) {
      ev.preventDefault();
      const response = await fetch('http://localhost:4000/registro', {
        method: 'POST',
        body: JSON.stringify({username, email, password}),
        headers: {'Content-Type':'application/json'},
      });
      if (response.status === 200) {
        alert('Registro completo');
      } else {
        alert('Falha no cadastro');
      }
    }
  return (
    <div className="container">
    <header className="header">
      <img src={logo} alt="LogoEmpresa" />
    </header>

    <form onSubmit={register}>

    <div className="inputContainer">
        <label htmlFor="username">Usuário</label>
        <input 
        type="text" 
        name="username" 
        id="username"
        placeholder="Insira o nome"
        onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="email">Email</label>
        <input 
        type="text" 
        name="email" 
        id="email"
        placeholder="insira o Email"
        onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="password">Senha</label>
        <input 
        type="password" 
        name="password" 
        id="password"
        placeholder="*****"
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <a href="">Esqueceu sua senha?</a>

      <button className="button" type="submit">
        Cadastrar-se
      </button>

      <div className="footer">
        <p>Já tem um cadastro?</p>
        <Link to="/Login">Login</Link>
      </div>
    </form>
  </div>
  )
}

export default Cadastrar