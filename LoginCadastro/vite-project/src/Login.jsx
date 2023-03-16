import logo from "./assets/logo.svg";
import { Link } from "react-router-dom"
import "./global.css";

export function Login() {
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