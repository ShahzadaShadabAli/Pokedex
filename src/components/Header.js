import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
     
    <Navbar expand="lg" className="bg-dark navbar-dark w-100">
      <Container>
        <Navbar.Brand to='/'>Pokedex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/'>Home</Link>
            <Link to="/favPokemons">Favorites</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
}
 
export default Header;