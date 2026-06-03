"use client";
import React from "react";
import { useState, useEffect } from "react";
export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err => console.log(err)));
  }, []);
  return (
    <div>
      {products &&
        products.map((product) => <li key={product.id}>{product.name}</li>)}
    </div>
  );
}
