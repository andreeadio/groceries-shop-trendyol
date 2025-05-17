import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dummy credentials
    const dummyUser = {
      email: "mihneazamfir04@gmail.com",
      password: "testtest",
      userId: 1,
      name: "Jane Doe"
    };

    // Simulate backend check
    if (email === dummyUser.email && password === dummyUser.password) {
      onLogin(dummyUser); // Log in with dummy user
      navigate("/profile");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Container className="py-4" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" variant="success" className="w-100">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;