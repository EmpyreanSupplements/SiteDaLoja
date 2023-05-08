import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css'

function NavbarComp() {
    return (
        <>
        {['md'].map((expand) => (
          <Navbar key={expand} variant={"dark"} expand={expand} className="Nav">
            <Container fluid>
              <img src="logoemgif.gif" alt='logo' className='logo'/>
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
                
                <form class="form-inline my-2 my-lg-0">
                  <div class="input-group rounded-pill">
                    <input class="form-control border-0 rounded-pill" type="search" placeholder="Search..."/>
                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary border-0 rounded-pill" type="submit">
                        <img src="search.svg"/>
                      </button>
                    </div>
                  </div>
                </form>



                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className='c' href="/">Home</Nav.Link>
                    <Nav.Link className='c' href="/Carrinho">Carrinho</Nav.Link>
                    <Nav.Link className='c' href="/Cadastro">Cadastre-se</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          
        ))}
      </>
  );
}


  export default NavbarComp;