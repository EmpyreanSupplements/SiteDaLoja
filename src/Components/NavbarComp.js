import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css'




function NavbarComp() {
    return (
        <>
        {['md'].map((expand) => (
          <Navbar key={expand} variant={"dark"} expand={expand} className="Nav">
            <Container fluid>
              <a classname="logo" href="./">
              <img href="./" src="logoemgif.gif" alt='logo' className='logo'/>
              </a>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title class="titleNavBarDropDanw" id={`offcanvasNavbarLabel-expand-${expand}`}>
                    EMPYREAN SUPPLEMENTS
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                
           
                  <div class="input-group justify-content-center">
                    <input class="form-control border-0 " type="search" placeholder="Encontre suplementos..." img="search.svg" />
                    <span class="input-group-text">
                    <img class="IconeSearchNavbar" src="search.svg" alt='logo' />
                    </span>
                  </div>

                  
                  
                  <div class="d-flex flex-row bd-highlight " >
                    <div class="p-2 bd-highlight">
                            <li id="removeCircle" class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                              <a href="./Perfil">
                                <img class="icons" src="Usuario.png" width="65%"/>
                                </a>
                              </a>

                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="./Perfil">Meu Perfil</a>
                                
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Sair</a>
                              </div>
                            </li>
                      </div>
                      <div class="p-2 bd-highlight" >
                        <a href="./Carrinho"><img class="icons" src="Carrinho.png" width="65%"/></a>
                      </div>
                      
                      <div class="p-2 bd-highlight">
                        <a href="./Cadastro"><img class="icons" src="AddUsuario.png" width="65%"/></a>
                      </div>
                      <div class="p-2 bd-highlight ">
                        <a href="mailto:grupopp33@gmail.com"><img class="icons" src="Contato.png" width="65%"/></a>
                      </div>
                  </div>

                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          
        ))}
      </>
  );
}


  export default NavbarComp;