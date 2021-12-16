import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, prd) => total + prd.price, 0);
  let shipping = 0;
  if (total > 350) {
    shipping = 0;
  } else if (total > 150) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }
  const tex = (total / 10).toFixed(2);
  const grandTotal = total + shipping + Number(tex);
  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return Number(precision);
  };

  return (
    <div>
      <h2>Order Summery</h2>
      <p>Items Order:{cart.length}</p>
      <p>product price:{formatNumber(total)}</p>
      <p>shipping cost:{shipping}</p>
      <p>tex+vat:{tex}</p>
      <h3>total price:{formatNumber(grandTotal)}</h3>
    </div>
  );
};

export default Cart;
