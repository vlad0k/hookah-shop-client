import React, { useContext, useState, useCallback } from "react";
import style from "./Cart.module.css";
import { CartContext } from "../../context/CartContext";
import CloseButton from "../CloseButton/CloseButton";
import { useDispatch } from "react-redux";
import { setCartDisplay } from "../../redux/app-reducer";
import Button from "../ui/Button";
import classnames from "classnames/bind";
import { MdAdd, MdRemove } from "react-icons/md";
import Form from "./components/Form";

const cn = classnames.bind(style);

const Cart = () => {
  const [displayOrderForm, setDisplayOrderForm] = useState(false);
  const { getCart, deleteItem } = useContext(CartContext);
  const dispatch = useDispatch();

  const [cart, setCart] = useState(getCart());

  const mapCart = useCallback(() => {
    const res = [];
    for (let id in cart) {
      let { name, brandName, count, price } = cart[id];
      res.push(
        <li key={id} className={cn("cart-item")}>
          <div className={cn("item-name")}>{`${brandName} ${name}`}</div>
          <div className={cn("count")}>
            Колличество:
            <Button type="text" icon={MdRemove} size="small" />
            <span>{count}</span>
            <Button type="text" icon={MdAdd} size="small" />
          </div>
          <div className={cn("price")}>
            Цена: <span>{price}</span>
          </div>
          <Button
            onClick={() => {
              deleteItem(id);
              setCart(getCart());
            }}
            size="small"
          >
            Удалить из корзины
          </Button>
        </li>
      );
    }
    return res;
  }, [cart, deleteItem, getCart]);

  return (
    <div className={style.cartWrapper}>
      <div className={style.cart}>
        <CloseButton type="x" action={() => dispatch(setCartDisplay(false))} />
        <h1>Корзина</h1>
        <ul>{mapCart()}</ul>
        <Button
          type={displayOrderForm ? "text" : "default"}
          onClick={() => setDisplayOrderForm(!displayOrderForm)}
        >
          {displayOrderForm ? "Отмена" : "Оформить заказ"}
        </Button>
        {displayOrderForm && (
          <Form closeModal={() => dispatch(setCartDisplay(false))} />
        )}
      </div>
    </div>
  );
};

export default Cart;
