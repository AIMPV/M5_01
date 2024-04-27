import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-danger" data-bs-theme="dark">
      <Container className='flex-lg-row-reverse'>
        <Navbar.Brand href="#home">Happy Cake 🍰</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='text-white text-decoration-none mx-3' to="/">🏠 Home</Link>
            <Link className='text-white text-decoration-none mx-3' to="/contacto">🗒️ Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;