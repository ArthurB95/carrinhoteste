"use client";

import React, { useContext, useEffect, useState } from "react";

import "./style.css";
import fetchProducts from "@/api/fetchProducts";
import ProductCard from "../ProductCard/page";
import Loading from "../Loading/page";
import AppContext from "@/context/AppContext";

const Products = () => {

  const {products, setProducts, loading, setLoading} = useContext(AppContext)
  

  useEffect(() => {
    fetchProducts("iphone").then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading ? <Loading /> : 
      <section className="products container">
        {products.map((product) => 
          <ProductCard key={products.id} data={product} />
        )}
      </section>
    )
  );
};

export default Products;
