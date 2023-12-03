import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { About } from "./components/About";
import  shopLogo from "./sp_logo.png";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import { ProductDet } from "./components/ProductDet";
import { ShopContextProvider } from "./components/ShopContext";
import { Contact } from "./components/Contact";
import { Promo } from "./components/Promo";


function App() {

  return (
    <div className="OnlineShop">
    <header className="ShopHeader">
    <div className="ShopLogo">
    <img src={shopLogo} alt="shop_logo"/>
    </div>
    <div className="ShopSubtitle">*The most unusual online shop*</div>
    </header>
<ShopContextProvider>
<BrowserRouter>
<div className="NavDiv">
<NavLink to='/' style={({isActive}) => ({color:isActive ? 'white' : 'rgb(0, 255, 0)'})}>About</NavLink>
<NavLink to='/Shop' style={({isActive}) => ({color:isActive ? 'white':'rgb(0, 255, 0)'})}>Products</NavLink>
<NavLink to='/Cart' style={({isActive}) => ({color:isActive ? 'white':'rgb(0, 255, 0)'})}>Bag</NavLink>
<NavLink to='/Contact' style={({isActive}) => ({color:isActive ? 'white':'rgb(0, 255, 0)'})}>Contact</NavLink>
<NavLink to='/Promo' style={({isActive}) => ({color:isActive ? 'white':'rgb(0, 255, 0)'})}>Video</NavLink>
</div>
<Routes>
<Route exact path="/" element={<About/>}/>
<Route exact path="/Shop" element={<Shop/>}/>
<Route path="/product/:id" element={<ProductDet/>}/>
<Route exact path="/Cart" element={<Cart/>}/>
<Route exact path="/Contact" element={<Contact/>}/>
<Route exact path="/Promo" element={<Promo/>}></Route>
</Routes>
</BrowserRouter>
        <footer>
        <p>Created by Beton Glitch Desing, Belgrade</p>
        </footer>
        </ShopContextProvider>
    </div>
  );
}
export default App;