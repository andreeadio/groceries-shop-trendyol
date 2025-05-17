import React from "react";
import { Card, Button, ListGroup, Badge } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const RecipeCard = ({ recipe }) => {
  const { addManyToCart } = useCart();

  const handleBuy = () => {
    if (recipe.ingredients) {
      addManyToCart(recipe.ingredients);
    }
  };

  return (
    <Card className="h-100 d-flex flex-column" style={{ width: "14rem", marginBottom: "1rem" }}>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{recipe.title}</Card.Title>

        <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>
          {recipe.description}
        </Card.Text>

        <h6 className="mt-3 mb-2">Ingredients:</h6>
        <ListGroup variant="flush" className="mb-3">
          {recipe.ingredients.map((ingredient) => (
            <ListGroup.Item
              key={ingredient.product_id}
              style={{ padding: "0.4rem 0.75rem" }}
            >
              {ingredient.name} – <span className="text-success">${ingredient.price}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {recipe.allergens?.length > 0 && (
          <>
            <h6 className="mt-2">Allergens:</h6>
            <div className="mb-3">
              {recipe.allergens.map((allergen, idx) => (
                <Badge bg="danger" key={idx} className="me-1">
                  {allergen}
                </Badge>
              ))}
            </div>
          </>
        )}

        <div className="mt-auto">
          <Button variant="success" className="w-100" onClick={handleBuy}>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;