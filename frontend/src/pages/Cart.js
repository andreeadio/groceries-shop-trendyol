import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <Container className="py-4">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ListGroup className="mb-3">
            {cartItems.map((item, idx) => (
              <ListGroup.Item key={idx}>
                {item.name} — ${item.price}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h5>Total: ${total}</h5>
          <Button variant="danger" onClick={clearCart}>
            Clear Cart
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;