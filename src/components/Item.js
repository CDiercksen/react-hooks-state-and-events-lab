import React, {useState} from "react";

function Item({ name, category }) {
const [inCart, setInCart] = useState(false)

function toggleCart () {
  setInCart(!inCart);
}

const cartStatus = inCart ? "in-cart" : "";

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
