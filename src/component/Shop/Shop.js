import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  const handelAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {product.map((prod) => (
          <Product handelAddProduct={handelAddProduct} product={prod}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
