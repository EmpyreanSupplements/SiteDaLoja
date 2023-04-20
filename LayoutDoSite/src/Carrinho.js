import NavbarComp from './Components/NavbarComp';
import Footer from './Components/Footer';
import './Carrinho.css';

function Carrinho() {
    return (  
        <>
        <NavbarComp />
       <div className="Carrinho ">
    


       <div class="container">

            <h1>CARRINHO <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg> </h1>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <img src="creatina1.webp" class="iimg-thumbnail" max-width="10%" alt="..."/> 
                    WHEY PROTEIN ISOLATE 
                    R$369,90

                    </li> 
                
                <li class="list-group-item"> 
                    <img src="creatina2.webp" class="iimg-thumbnail" alt="..."/> 
                    WHEY BLEND 900g <br/>
                    R$139,00
                </li>

                <li class="list-group-item"> 
                    <img src="whey1.png" class="iimg-thumbnail" alt="..."/> 
                    CREATINE TURBO <br/>
                    R$89,90
                </li>

                <li class="list-group-item"> 
                    <img src="whey2.webp" class="iimg-thumbnail" alt="..."/> 
                    CREATINA HARDCORE <br/>
                    R$174,99
                </li>
            </ul>



        </div>
    
    
       </div>
       <Footer/>
       </>
)}

export default Carrinho;
