import React, { useState } from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  let [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count++);
  };
  const reduceCount = () => {
    if (count > 0) setCount(count--);
  };
  return (
    <li className={classes["cart-list__item"]}>
      <div className={classes["cart-list__item1"]}>
        <div className={classes["cart-list__item-name"]}>{props.cart.name}</div>
        <div>{props.cart.price}</div>
        <div>*{count}</div>
      </div>
      <div className={classes["cart-list__actions"]}>
        <button onClick={reduceCount}>-</button>
        <button onClick={addCount}>+</button>
      </div>
    </li>
  );
};
export default CartItem;
