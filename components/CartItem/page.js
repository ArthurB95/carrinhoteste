"use client";

import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import "./style.css";
import formatCurrency from "@/utils/formatCurrency";
import AppContext from "@/context/AppContext";

const CartItem = ({ data }) => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { thumbnail, title, price, id } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };

  return (
    <section className="cart-item">
      <img
        src={thumbnail}
        alt="Imagem do produto"
        className="cart-item-image"
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>

        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        >
          <FaTrash />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
