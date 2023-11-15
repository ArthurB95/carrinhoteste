"use client";

import React, { useContext } from "react";

import "./style.css";
import CartItem from "../CartItem/page";
import AppContext from "@/context/AppContext";
import formatCurrency from "@/utils/formatCurrency";

const Cart = () => {
  const { cartItems, isCartVisible, setCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <section className={`cart ${isCartVisible ? "cart--active" : ""}`}>
      <div className="cart__header">
        <h1 className="cart-header-title">
          Carrinho <br></br>de compras
        </h1>
        <button className="cart-header-close" onClick={() => setCartVisible(!isCartVisible)}>X</button>
      </div>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>

      <div className="cart-resume">
        Total: <p className="cart-price">{formatCurrency(totalPrice, "BRL")}</p>
      </div>
      <div className="cart__footer">
        <button className="cart-button-finalizar">Finalizar Compra</button>
      </div>
    </section>
  );
};

export default Cart;
