"use client";

import React, { useContext } from "react";
import "./style.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import formatCurrency from "@/utils/formatCurrency";
import AppContext from "@/context/AppContext";

export const ProductCard = ({ data }) => {
  const { thumbnail } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data]);
  };

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w.jpg/gi, "W.jpg")}
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        <h2 className="card__title">{data.title}</h2>
        <h2 className="card__price">{formatCurrency(data.price, "BRL")}</h2>
      </div>

      <div className="card__description">
        <p className="card__subtitle">Redesigned from scratch and completely revised.</p>
      </div>

      <div className="button__div">
        <button
          type="button"
          className="button__add-cart"
          onClick={handleAddCart}
        >
          <BsFillCartPlusFill />
          <p className="title">COMPRAR</p>
        </button>
      </div>
    </section>
  );
};

export default ProductCard;
