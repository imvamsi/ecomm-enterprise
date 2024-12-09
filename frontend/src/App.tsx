import { Container } from "react-bootstrap";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1> welcome to ecomm</h1>
        </Container>
      </main>
    </>
  );
}

export default App;
