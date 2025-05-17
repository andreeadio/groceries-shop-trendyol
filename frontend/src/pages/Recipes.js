import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RecipeCard from "../components/RecipeCard";

// Dummy recipe list for now
const dummyRecipes = [
  {
    recipe_id: 1,
    title: "Avocado Toast",
    description: "Simple and delicious avocado toast with chili flakes.",
    ingredients: [
      { product_id: 101, name: "Bread", price: 1.5 },
      { product_id: 102, name: "Avocado", price: 1.8 },
      { product_id: 103, name: "Chili Flakes", price: 0.9 },
    ],
    allergens: ["Gluten"],
  },
  {
    recipe_id: 2,
    title: "Greek Salad",
    description: "Crisp veggies with feta cheese and olive oil.",
    ingredients: [
      { product_id: 201, name: "Tomatoes", price: 2.2 },
      { product_id: 202, name: "Cucumber", price: 1.1 },
      { product_id: 203, name: "Feta Cheese", price: 2.3 },
      { product_id: 204, name: "Olive Oil", price: 3.5 },
    ],
    allergens: ["Milk"],
  },
  {
    recipe_id: 3,
    title: "Fruit Smoothie",
    description: "Banana, strawberries, and almond milk blended to perfection.",
    ingredients: [
      { product_id: 301, name: "Banana", price: 0.8 },
      { product_id: 302, name: "Strawberries", price: 2.0 },
      { product_id: 303, name: "Almond Milk", price: 1.9 },
    ],
    allergens: ["Nuts"],
  },
  {
    recipe_id: 4,
    title: "Omelette",
    description: "Classic egg omelette with cheese and herbs.",
    ingredients: [
      { product_id: 401, name: "Eggs", price: 2.0 },
      { product_id: 402, name: "Cheese", price: 1.5 },
      { product_id: 403, name: "Parsley", price: 0.5 },
    ],
    allergens: ["Egg", "Milk"],
  },
  {
    recipe_id: 5,
    title: "Peanut Butter Banana Sandwich",
    description: "Nutty and sweet, packed with energy.",
    ingredients: [
      { product_id: 501, name: "Peanut Butter", price: 2.8 },
      { product_id: 502, name: "Banana", price: 0.8 },
      { product_id: 503, name: "Whole Wheat Bread", price: 1.5 },
    ],
    allergens: ["Peanuts", "Gluten"],
  },
  {
    recipe_id: 6,
    title: "Vegetable Stir-Fry",
    description: "Quick-fried seasonal vegetables in soy sauce.",
    ingredients: [
      { product_id: 601, name: "Bell Peppers", price: 2.0 },
      { product_id: 602, name: "Carrots", price: 1.0 },
      { product_id: 603, name: "Soy Sauce", price: 1.2 },
    ],
    allergens: ["Soy"],
  },
  {
    recipe_id: 7,
    title: "Pasta Primavera",
    description: "Colorful vegetables with pasta and herbs.",
    ingredients: [
      { product_id: 701, name: "Pasta", price: 1.6 },
      { product_id: 702, name: "Zucchini", price: 1.2 },
      { product_id: 703, name: "Cherry Tomatoes", price: 2.3 },
    ],
    allergens: ["Gluten"],
  },
  {
    recipe_id: 8,
    title: "Caprese Salad",
    description: "Mozzarella, tomatoes, and basil with olive oil.",
    ingredients: [
      { product_id: 801, name: "Mozzarella", price: 2.5 },
      { product_id: 802, name: "Tomatoes", price: 2.0 },
      { product_id: 803, name: "Basil", price: 0.9 },
    ],
    allergens: ["Milk"],
  },
  {
    recipe_id: 9,
    title: "Classic Pancakes",
    description: "Fluffy pancakes with syrup.",
    ingredients: [
      { product_id: 901, name: "Flour", price: 1.1 },
      { product_id: 902, name: "Eggs", price: 2.0 },
      { product_id: 903, name: "Milk", price: 1.5 },
      { product_id: 904, name: "Maple Syrup", price: 3.0 },
    ],
    allergens: ["Gluten", "Egg", "Milk"],
  },
  {
    recipe_id: 10,
    title: "Lentil Soup",
    description: "Hearty lentils simmered with spices and vegetables.",
    ingredients: [
      { product_id: 1001, name: "Lentils", price: 1.4 },
      { product_id: 1002, name: "Carrots", price: 1.0 },
      { product_id: 1003, name: "Onions", price: 0.7 },
      { product_id: 1004, name: "Garlic", price: 0.5 },
    ],
    allergens: [],
  },
];

const Recipes = () => {
  const addToCartBulk = (items) => {
    console.log("Adding to cart:", items);
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">All Recipes</h2>
      <Row>
        {dummyRecipes.map((recipe) => (
          <Col key={recipe.recipe_id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <RecipeCard recipe={recipe} addToCartBulk={addToCartBulk} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Recipes;