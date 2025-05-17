import React from "react";
import { Container, Card } from "react-bootstrap";

const Profile = ({ user }) => {
  if (!user) {
    return (
      <Container className="py-4 text-center">
        <h4>Please log in to view your profile.</h4>
      </Container>
    );
  }

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card style={{ width: '22rem' }} className="shadow">
        <Card.Body>
          <Card.Title className="mb-4 text-center">👤 Your Profile</Card.Title>
          <Card.Text><strong>Name:</strong> {user.name}</Card.Text>
          <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
          <Card.Text><strong>User ID:</strong> {user.userId}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;