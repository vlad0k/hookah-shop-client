import React, { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const localStorage = window.localStorage;

  const getCart = () => {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {};
  };

  const setCart = (data) => {
    let cart = { ...getCart(), ...data };
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
  };

  const addToCart = (id, brandName, name, price) => {
    const cart = getCart();

    cart[id] = {
      ...cart[id],
      brandName,
      name,
      price,
      count: cart[id] ? cart[id].count + 1 : 1,
    };
    console.log(cart);
    setCart(cart);
  };

  const isInCart = (id) => {
    const cart = getCart();
    return cart[id] ? true : false;
  };

  const deleteItem = (id) => {
    const cart = getCart();
    cart[id] = undefined;
    setCart(cart);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, isInCart, getCart, setCart, deleteItem, clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
