import React, { useContext }from "react";
import { ShopContext } from "./ShopContext";


export const CartItem = (props) => {
  
    const { id, title, price, image } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
 
    return (
      <div className="CartItem">
        <img src={image} alt="product_image"/>
        <div className="Description">
          <p> <b>{title}</b></p>
          <p> Price: ${price.toLocaleString()}</p>
          <div className="Counter">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            style={{color: 'purple'}} />
            <button onClick={() => addToCart(id)}> + </button>
          </div>
        </div>
      </div>
    );
  };
