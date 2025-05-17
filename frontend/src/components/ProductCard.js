import React from "react";
import { Card, Button } from "react-bootstrap";
import Product from "./Product";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card style={{ width: "14rem", marginBottom: "1rem" }}>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text style={{ fontWeight: "bold", color: "#28a745" }}>
          ${product.price}
        </Card.Text>
        <Button variant="success" className="me-2" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>

        <div className="mt-3">
          <Product product={product} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;