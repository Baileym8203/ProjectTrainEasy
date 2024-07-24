import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

function NavbarMain() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='mainNavbar'>
          <Navbar.Brand href="#home">TrainEz</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href="#features">My Profile</Nav.Link>
            <Nav.Link href="#pricing">Weight Calculator</Nav.Link>
            <Nav.Link href="#logout">Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavbarMain;
