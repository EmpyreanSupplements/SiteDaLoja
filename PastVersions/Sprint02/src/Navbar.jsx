import { Link } from "react-router-dom"
import "./Navbar.css"
import Empyrean from "./assets/Empyrean.svg";


export function Navbar() {
   return (
    <div>
      <div className="sum">
     <div className="logo">
     <img src={Empyrean} alt="LogoEmpresa" />
      </div>
      <nav className='item'>
         <ul className='ul'>
            <li>
               <Link className="b" to='/'>Home</Link>
            </li>
            <li>
               <Link className="b" to='/Cadastrar'>Cadastrar-se</Link>
            </li>
            <li>
               <Link className="b" to='/Carrinho'>Carrinho</Link>
            </li>
            <li>
               <Link className="b" to='/Promoções'>Promoções</Link>
            </li>
         </ul>
         </nav>  
    </div>
    </div> 
   )
}

export default Navbar