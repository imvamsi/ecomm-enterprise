import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <Header />
        <main className="py-3">
          <Container>
            <AppRoutes />
          </Container>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
