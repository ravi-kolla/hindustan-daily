import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const Footer = () => (
  <div className="footer mt-5 border-top">
  <Container className="pt-5 pb-3 pl-3 pr-3">
  <Row className="">
    <Col md>
    <div>
      <h5>Hindustan Daily</h5>
    </div>
    </Col>
    <Col md>
    <div>
    <Link href="/">
      <a>Home</a>
    </Link>
    </div>
    <div>
    <Link href="/news">
      <a>News</a>
    </Link>
    </div>
    <div>
    <Link href="/reviews">
      <a>Reviews</a>
    </Link>
    </div>
    </Col>
    <Col md>
    <div>
      <small className="m-md-auto">Copyright © 2019 - 2020 Hindustan Daily</small>
    </div>
    </Col>
  </Row>
  </Container>
  </div>
)

export default Footer;
