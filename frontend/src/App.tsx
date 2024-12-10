import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <AppRoutes />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
