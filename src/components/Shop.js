import React, {useEffect, useState, useMemo} from "react";
import { PRODUCTS } from "../data";
import { Product } from "./Product";


export const Shop = () => {

  const [productsList, setProductsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  useEffect(()=>{ setProductsList(PRODUCTS); }, [] );

  function getFilteredList(){
    if(!selectedCategory){
      return productsList;
    }
    return productsList.filter((product)=>product.category === selectedCategory);
  }

  const filteredList = useMemo(getFilteredList, [selectedCategory, productsList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

    return (

        <div className="ShopDiv">
        <div className="ShopTitle">
        <h1>Our recent designs</h1>
        </div>
    <div className="CategoryFilter">
    <div className="FilterText">Filter by category:</div>
    <select onChange={handleCategoryChange}>
    <option value="">all categories</option>
    <option value="fundraiser">fundraiser</option>
    <option value="animal resque">animal resque</option>
    <option value="small business">small business</option>
    </select>
    </div>
  <div className="ProductList">
    {filteredList.map((category)=>(
    <Product data={category}/>
    ))}
  </div>  
    </div>
    );
  };


