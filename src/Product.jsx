import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";


function Product({ id, title, image, price, rating }) {
  
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const addToBasket =() =>{
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id,
        title,
        image,
        price,  
        rating
      }
    })
  };
  return (
    <div className="product">
      <p>{title}</p>
      <p className="product__price">
        <small>Shs</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
          {
              Array(rating)
              .fill()
              .map((_)=>(
                  <p>*</p>
              ))
          }
      </div>
      <img src={image} 
      alt="" 
      srcset=""
      />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
