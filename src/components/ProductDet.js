import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./ShopContext";
import { PRODUCTS } from "../data"; 


export const ProductDet = () => {

  const { id } = useParams();
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  const product = PRODUCTS.find((p) => p.id === Number(id));
  const { title, description, image, price } = product;

  return (
    <div className="ProductContainer">
      <div className="ProductImgContainer">
      <img src={image} alt="product_image" className="Productimage"/></div>
      <div className="ProductDetContainer">
        <h1 className="ProductName">{title}</h1>
        <div className="ProductDet">
          <p><b>Price:</b> ${price}</p>
          <p><b>Description:</b></p>
          <p>{description}</p>
            <button className="AddToCartBtn" onClick={() => addToCart(id)}>
            Add To Your Bag {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
        </div>
      </div>
    </div>
  );
};