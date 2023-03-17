import logo from "./assets/logo.svg";
import { Link } from "react-router-dom"
import React, { useState } from "react";
import "./global.css";
import Axios from 'axios';

export function Cadastrar() {
  const [values, setValues] = useState();
  console.log(values);
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]:value.target.value,
    }));
  }

  const handleClickButton = () => {
    Axios.post("http:localhost:3000/Cadastro", {
      username: values.username,
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    })
  }


  return <div className="container">
    <header className="header">
      <img src={logo} alt="LogoEmpresa" />
    </header>

    <form>

    <div className="inputContainer">
        <label htmlFor="username">Usuário</label>
        <input 
        type="text" 
        name="username" 
        id="username"
        placeholder="Insira o nome"
        onChange={handleChangeValues}
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="email">Email</label>
        <input 
        type="text" 
        name="email" 
        id="email"
        placeholder="insira o Email"
        onChange={handleChangeValues}
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="password">Senha</label>
        <input 
        type="password" 
        name="password" 
        id="password"
        placeholder="*****"
        onChange={handleChangeValues}
        />
      </div>

      <a href="">Esqueceu sua senha?</a>

      <button className="button" onClick={handleClickButton}>
        Cadastrar-se
      </button>

      <div className="footer">
        <p>Já tem um cadastro?</p>
        <Link to="/Login">Login</Link>
      </div>
    </form>
  </div>
}

export default Cadastrar