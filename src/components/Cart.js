import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { PRODUCTS } from "../data";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  
  const { cartItems,  getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
  
    <div className="CartPage">
      <div className="CartText">
        What's in your bag:
      </div>

      <div className="Cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return  <CartItem data={product} />;
          }
        })}
      </div> 

      {totalAmount > 0 ? (
        <div className="Checkout">
          <div className="Total">
          <h2>Total price: ${totalAmount.toLocaleString()}</h2>
          </div>
          <div className="Buttons">
            <button onClick={() => navigate("/Shop")}>Continue Shopping</button>
            <button onClick={() => {checkout(); navigate("/checkout");}}>Checkout</button>
          </div>
        </div>
      ) : (
        <div className="CartTextt"><h1>Your Shopping Bag is Empty</h1></div>
      )}
    </div>
  );
};