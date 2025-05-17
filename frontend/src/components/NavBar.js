import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = ({ user, onLogout }) => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          QuickPantry
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto gap-3">
            <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
            <Nav.Link as={Link} to="/products">Ingredients</Nav.Link>
            {user && (
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            )}
          </Nav>
          <Nav className="align-items-center gap-2">
            <Button
              as={Link}
              to="/cart"
              variant="outline-primary"
              style={{ fontWeight: "bold", fontSize: "1.1rem", padding: "0.3rem 0.9rem" }}
            >
              🛒
            </Button>
            {user ? (
              <Button variant="outline-danger" onClick={onLogout}>
                Logout
              </Button>
            ) : (
              <Button as={Link} to="/login" variant="outline-success">
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;