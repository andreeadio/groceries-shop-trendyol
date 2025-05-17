import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5 text-center">
      <h1 className="mb-3 fw-bold">Shop Smarter. Cook Faster. Waste Less.</h1>
      <h4 className="mb-4 text-muted">Discover meals you’ll love and get everything you need — with one click.</h4>

      <Button
        variant="success"
        size="lg"
        className="mb-5"
        onClick={() => navigate("/recipes")}
      >
        Start Cooking → Explore Recipes
      </Button>

      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>🧑‍🍳 Pick a Recipe</Card.Title>
              <Card.Text>Browse curated meals from seasonal favorites to diet-friendly picks.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>🛒 One-Click Shopping</Card.Title>
              <Card.Text>We bundle all ingredients for you. No more forgotten items.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>🥗 Fresh and Personalized</Card.Title>
              <Card.Text>We suggest what fits your taste, allergies, and lifestyle.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;