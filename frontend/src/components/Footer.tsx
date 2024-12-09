import { Container, Row, Col } from "react-bootstrap";

function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Ecomm &copy; {currentYear}</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
