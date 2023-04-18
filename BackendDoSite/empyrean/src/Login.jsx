import logo from "./assets/logo.svg";
import { Link } from "react-router-dom"
import "./global.css";
import { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function login(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
  });

    if (response.ok) {
      alert('Você fez login!')
    } else {
      alert('Credenciais inválidas!');
    }
  }
  return <div className="container">
    <header className="header">
      <img src={logo} alt="LogoEmpresa" />
    </header>

    <form onSubmit={login}>

      <div className="inputContainer">
        <label htmlFor="email">Email</label>
        <input 
        type="text" 
        name="email" 
        id="email"
        placeholder="insira o Email"
        value={email}
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
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