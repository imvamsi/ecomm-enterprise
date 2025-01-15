import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

function Login() {
  return (
    <FormContainer>
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={"abc@gmail.com"}
            onChange={(e) => console.log(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={""}
            onChange={(e) => console.log(e)}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
    </FormContainer>
  );
}

export default Login;
