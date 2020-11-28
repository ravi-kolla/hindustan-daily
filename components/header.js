import { Navbar, Container, Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter();
    return (
      <Navbar collapseOnSelect className="bg-white border-bottom header" expand="lg" sticky="top">
        <Container>
        {
          router.pathname.includes('telugu') ?
          <>
          <Navbar.Brand className="theme-color" href="/telugu">హిందూస్తాన్ డైలీ</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <Nav.Link className="theme-color" href="/telugu/news">వార్తలు</Nav.Link>
                <Nav.Link className="theme-color" href="/telugu/reviews">సినిమ రీవ్యూ</Nav.Link>
                <Nav.Link className="theme-color" href="/telugu/gallery">ఫోటోలు</Nav.Link>
                <Nav.Link className="theme-color" href="/telugu/entertainment">వినోదం</Nav.Link>
                <Nav.Link className="theme-color" href="/telugu/health">ఆరోగ్యం</Nav.Link>
                <Nav.Link className="btn btn-sm btn-primary text-white" href="/">English</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </>  :
            <>
            <Navbar.Brand className="theme-color" href="/">Hindustan Daily</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                  <Nav.Link className="theme-color" href="/news">News</Nav.Link>
                  <Nav.Link className="theme-color" href="/reviews">Reviews</Nav.Link>
                  <Nav.Link className="theme-color" href="/gallery">Gallery</Nav.Link>
                  <Nav.Link className="theme-color" href="/entertainment">Entertainment</Nav.Link>
                  <Nav.Link className="theme-color" href="/health">Health</Nav.Link>
                  <Nav.Link className="btn btn-sm btn-primary text-white" href="/telugu">తెలుగు</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </>
           }
        </Container>
      </Navbar>
    )
}

export default Header;
