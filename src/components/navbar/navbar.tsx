import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/car.png';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt="Logo Car" className='img-fluid logo_img' />Auto<span>Nest</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>

            <NavDropdown title="Products" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/products">Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/motorcycles">Motorcycle</NavDropdown.Item>
              <NavDropdown.Item href="/cars">Car</NavDropdown.Item>
              <NavDropdown.Item href="/trucks">Truck</NavDropdown.Item>
              <NavDropdown.Item href="/trailers">Trailer</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav>
            <Nav.Link href="tel:0886747088" className='text-danger'><FontAwesomeIcon icon={faPhoneVolume} /> +359 88 6747 088</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;