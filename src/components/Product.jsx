import React from "react";
import { useDispatch } from "react-redux";

import { addTocart } from "../rdx/slices/Cart";

function Product({ product }) {
  const dispatch = useDispatch();

  return (
    <article className="product">
      <div className="product_ctg">{product.category}</div>
      <div className="img-conatiner">
        <img src={product.image} alt="productimage" />
      </div>
      <div className="product_price flex">
        <h2>{product.title.slice(0, 10)}</h2>
        <big>{product.price} $</big>
      </div>
      <p>{product.description.slice(0, 100)} </p>
      <button
        onClick={() => {
          dispatch(addTocart(product));
        }}
        className="btn moreBtn"
      >
        Add To Favorite
      </button>
    </article>
  );
}

export default Product;
