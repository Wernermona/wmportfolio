import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 className="logoColor">W<span className='logoColor2'>M</span></h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2022. Tout droits Réservée à Werner Mona</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
