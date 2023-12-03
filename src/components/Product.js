import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopContext";


export const Product = (props) => {
  
  const { id, title, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="Product">
      <Link to={`/product/${id}`} className="ProductLink">
        <img src={image} alt="product_image"/>
        <div className="Description"> {title}, ${price} </div>
      </Link>
       <button className="AddToCartBtn" 
        onClick={() => addToCart(id)}>
        Add To Your Bag {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};