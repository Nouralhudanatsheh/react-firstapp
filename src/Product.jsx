import React from "react";

function Product(props) {
  return (
    <div className="col-md-4 product">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Product;
