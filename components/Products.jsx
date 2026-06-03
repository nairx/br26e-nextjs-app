"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  const fetchProducts = () => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const handleAdd = async () => {
    await axios.post("/api/products", product);
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete("/api/products/" + id);
    fetchProducts();
  };

  return (
    <div>
      <p>
        <input
          type="text"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="number"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          placeholder="Price"
        />
        <button onClick={handleAdd}>Add</button>
      </p>
      {products &&
        products.map((product) => (
          <li key={product.id}>-{product.id}-
            {product.name}-{product.price}-
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
    </div>
  );
}
