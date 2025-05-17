import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

// Dummy data for testing
const dummyProducts = [
  {
    product_id: 1,
    name: "Banana",
    price: 0.99,
    calories: 89,
    allergens: "None",
    type: "unit",
    stock: 24,
  },
  {
    product_id: 2,
    name: "Almond Milk",
    price: 2.49,
    calories: 45,
    allergens: "Nuts",
    type: "liter",
    stock: 10,
  },
  {
    product_id: 3,
    name: "Broccoli",
    price: 1.29,
    calories: 55,
    allergens: "None",
    type: "kg",
    stock: 17,
  },
  {
    product_id: 4,
    name: "Strawberries",
    price: 3.99,
    calories: 32,
    allergens: "None",
    type: "kg",
    stock: 5,
  },
  {
    product_id: 5,
    name: "Eggs (12-pack)",
    price: 2.99,
    calories: 155,
    allergens: "Egg",
    type: "pack",
    stock: 14,
  },
  {
    product_id: 6,
    name: "Whole Wheat Bread",
    price: 1.49,
    calories: 247,
    allergens: "Gluten",
    type: "unit",
    stock: 9,
  },
  {
    product_id: 7,
    name: "Tomato Sauce",
    price: 1.99,
    calories: 29,
    allergens: "None",
    type: "jar",
    stock: 21,
  },
  {
    product_id: 8,
    name: "Spinach",
    price: 0.89,
    calories: 23,
    allergens: "None",
    type: "bunch",
    stock: 18,
  },
  {
    product_id: 9,
    name: "Greek Yogurt",
    price: 1.39,
    calories: 59,
    allergens: "Milk",
    type: "cup",
    stock: 12,
  },
  {
    product_id: 10,
    name: "Peanut Butter",
    price: 2.79,
    calories: 588,
    allergens: "Peanuts",
    type: "jar",
    stock: 7,
  },
];

const Products = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     getAllProducts()
    //     .then((res) => setProducts(res.data))
    //     .catch((err) => console.error("Failed to fetch products:", err));
    // }, []);

    return (
        <Container className="py-4">
        <h2 className="mb-4">All Products</h2>
        <Row>
            {dummyProducts.map((product) => (
            <Col key={product.product_id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <ProductCard product={product} />
            </Col>
            ))}
        </Row>
        </Container>
    );
};

export default Products;