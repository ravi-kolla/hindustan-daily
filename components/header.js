import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => (
  <Navbar collapseOnSelect className="bg-white border-bottom header" expand="lg" sticky="top">
    <Container>
    <Navbar.Brand className="theme-color" href="/">Hindustan Daily</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Nav>
        <Nav.Link className="theme-color" href="/news">News</Nav.Link>
        <Nav.Link className="theme-color" href="/reviews">Reviews</Nav.Link>
        <Nav.Link className="theme-color" href="/gallery">Gallery</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header;
