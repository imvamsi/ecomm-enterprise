import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { toast, ToastContainer } from "react-toastify";

import Loader from "../components/Loader";
import { useLoginMutation } from "../slices/usersSlice";
import { setCredentials } from "../slices/authSlice";
import { getQueryParams } from "../utils/queryParams.util";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state: RootState) => state.login);
  //console.log("🚀 ~ Login ~ state:", state);
  const [login, { isLoading }] = useLoginMutation();

  const { search } = useLocation();
  const redirect = getQueryParams("redirect", search);

  useEffect(() => {
    if (userInfo !== null) {
      navigate(redirect);
    }
  }, [redirect, userInfo, navigate]);

  const submitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      console.log("🚀 ~ Login ~ err:", err);
      toast.error(err?.data?.message);
    }
  };

  return (
    <FormContainer>
      <h1>Login</h1>
      {/* <ToastContainer /> */}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="primary" style={{ width: "100%" }}>
          Sign In
        </Button>
      </Form>
    </FormContainer>
  );
}

export default Login;
