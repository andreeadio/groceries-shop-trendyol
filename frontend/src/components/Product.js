import React from "react";
import { ListGroup } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item><strong>Calories:</strong> {product.calories || "N/A"}</ListGroup.Item>
      <ListGroup.Item><strong>Allergens:</strong> {product.allergens || "None"}</ListGroup.Item>
      <ListGroup.Item><strong>Type:</strong> {product.type || "Standard"}</ListGroup.Item>
      <ListGroup.Item><strong>Stock Left:</strong> {product.stock || "Unknown"}</ListGroup.Item>
    </ListGroup>
  );
};

export default Product;