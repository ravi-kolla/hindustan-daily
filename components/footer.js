import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'

const EnglishFooter = () => (
  <>
  <Col md>
  <div>
    <h5>Hindustan Daily</h5>
  </div>
  </Col>
  <Col md>
  <div>
  <Link href="/"><a>Home</a></Link>
  </div>
  <div>
  <Link href="/news"><a>News</a></Link>
  </div>
  <div>
  <Link href="/health"><a>Health</a></Link>
  </div>
  <div>
  <Link href="/reviews"><a>Reviews</a></Link>
  </div>
  </Col>
  <Col md>
  <div>
  <Link href="/telugu"><a>తెలుగు</a></Link>
  </div>
  </Col>
  <Col md>
  <div>
    <small className="m-md-auto">Copyright © 2020 Hindustan Daily</small>
  </div>
  </Col>
  </>
)
const TeluguFooter = () => (
  <>
  <Col md>
  <div>
    <h5>హిందూస్తాన్ డైలీ</h5>
  </div>
  </Col>
  <Col md>
  <div>
  <Link href="/telugu"><a>హోమ్</a></Link>
  </div>
  <div>
  <Link href="/telugu/news"><a>వార్తలు</a></Link>
  </div>
  <div>
  <Link href="/telugu/health"><a>ఆరోగ్యం</a></Link>
  </div>
  <div>
  <Link href="/telugu/reviews"><a>సినిమ రీవ్య</a></Link>
  </div>
  </Col>
  <Col md>
  <div>
  <Link href="/"><a>English</a></Link>
  </div>
  </Col>
  <Col md>
  <div>
    <small className="m-md-auto">కాపీరైట్ © 2020 హిందూస్తాన్ డైలీ</small>
  </div>
  </Col>
  </>
)
function Footer() {
  const router = useRouter();

  return  (
    <div className="footer mt-5 border-top bg-dark text-white">
    <Container className="pt-5 pb-3 pl-3 pr-3">
    <Row className="">
    {router.pathname.includes('telugu') ? <TeluguFooter /> : <EnglishFooter />}
    </Row>
    </Container>
    </div>
  )

}

export default Footer;
