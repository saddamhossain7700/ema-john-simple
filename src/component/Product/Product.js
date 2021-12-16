import React from "react";
import "./Product.css";
const Product = (props) => {
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>
        <p>by:{seller}</p>
        <h1>${price}</h1>
        <p>only{stock} left in stock-order soon</p>
        <button
          className="main-btn"
          onClick={() => props.handelAddProduct(props.product)}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
