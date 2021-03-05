import React, { useState, useContext } from "react";

import style from "./ProductPage.module.css";

import CloseButton from "../../components/CloseButton/CloseButton";
import Button from "../../components/ui/Button";

import preloader from "../../common/25.gif";

import { storage } from "../../firebase";
import { CartContext } from "../../context/CartContext";

import classnames from "classnames/bind";

const cn = classnames.bind(style);

const Product = ({ product, brandName, setProduct }) => {
  const { addToCart, isInCart } = useContext(CartContext);

  const [mainPicture, setMainPicture] = useState(preloader);
  const [inCart, setInCart] = useState(isInCart(product.id));

  const [{ id, name, price, pictures, description }] = product;

  storage
    .ref(pictures[0].name)
    .getDownloadURL()
    .then((url) => setMainPicture(url));

  return (
    <div>
      <CloseButton action={setProduct} type="x" />
      <div className={style["product-page"]}>
        <h1>
          {brandName} {name}
        </h1>
        <div>
          {
            <img
              style={
                mainPicture === preloader ? { width: 64, display: "block" } : {}
              }
              src={mainPicture}
              alt={name}
            />
          }
          <span className={style["product-page"]}>Цена: {price} uah</span>
        </div>
        <Button
          onClick={() => {
            addToCart(id, brandName, name, price);
            setInCart(isInCart(id));
          }}
          className={cn("cart-button")}
        >
          {!inCart ? "Add to the Cart" : "Add +1"}
        </Button>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Product;
