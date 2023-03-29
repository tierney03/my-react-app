import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Project</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/quiz">Quiz</Nav.Link>
          <Nav.Link href="/results">Results</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
