package com.example.grocerystore.model;

import java.math.BigDecimal;
import java.util.List;

public class Product {

    private Long productId;
    private String productName;
    private BigDecimal productPrice;
    private List<String> productAllergens;
    private Integer calories;
    private String productType;           // "vrac" or "la bucata"
    private BigDecimal pricePerKg;        // optional, can be null
    private Integer quantity;
    private String category;              // e.g., vegetables, fruits, dairy products, etc.
    private List<String> suitableFor;    // vegans, vegetarians, pescatarians, others
    private Integer quantityLeftInStock; // for vrac products
    private Integer nrLeftInStock;       // for la bucata products
    private String description;

    // Constructors
    public Product() {}

    public Product(Long productId, String productName, BigDecimal productPrice, List<String> productAllergens,
                   Integer calories, String productType, BigDecimal pricePerKg, Integer quantity,
                   String category, List<String> suitableFor, Integer quantityLeftInStock,
                   Integer nrLeftInStock, String description) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productAllergens = productAllergens;
        this.calories = calories;
        this.productType = productType;
        this.pricePerKg = pricePerKg;
        this.quantity = quantity;
        this.category = category;
        this.suitableFor = suitableFor;
        this.quantityLeftInStock = quantityLeftInStock;
        this.nrLeftInStock = nrLeftInStock;
        this.description = description;
    }

    // Getters and setters

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public BigDecimal getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(BigDecimal productPrice) {
        this.productPrice = productPrice;
    }

    public List<String> getProductAllergens() {
        return productAllergens;
    }

    public void setProductAllergens(List<String> productAllergens) {
        this.productAllergens = productAllergens;
    }

    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public BigDecimal getPricePerKg() {
        return pricePerKg;
    }

    public void setPricePerKg(BigDecimal pricePerKg) {
        this.pricePerKg = pricePerKg;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<String> getSuitableFor() {
        return suitableFor;
    }

    public void setSuitableFor(List<String> suitableFor) {
        this.suitableFor = suitableFor;
    }

    public Integer getQuantityLeftInStock() {
        return quantityLeftInStock;
    }

    public void setQuantityLeftInStock(Integer quantityLeftInStock) {
        this.quantityLeftInStock = quantityLeftInStock;
    }

    public Integer getNrLeftInStock() {
        return nrLeftInStock;
    }

    public void setNrLeftInStock(Integer nrLeftInStock) {
        this.nrLeftInStock = nrLeftInStock;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
