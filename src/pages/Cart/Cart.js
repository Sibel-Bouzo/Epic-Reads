import React, { useState } from "react";
import { useGlobalContext } from "../../contexts/context";
import { CartItem } from "./components/CartItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, clearAll } = useGlobalContext();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="cart px-16">
      {cart.length > 0 ? (
        <>
          <div className="flex flex-row justify-between cart-container">
            <h2>
              {cart.length === 1
                ? "1 Borrowed Book"
                : cart.length > 1
                ? `${cart.length} Borrowed Books`
                : ""}
            </h2>
            {cart.length > 0 ? (
              <button onClick={clearAll}>Clear All</button>
            ) : (
              ""
            )}
          </div>
          <ul>
            {cart.map((book, index) => (
              <li key={index} className="cart-item">
                <CartItem {...book} index={index} />
              </li>
            ))}
          </ul>
          <div className="cart-checkout">
            <FormControlLabel
              required
              control={
                <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
              }
              label="To proceed, please confirm your agreement to our Terms and Privacy Policy."
            />
            <Link to="/checkout">
              <button disabled={!isChecked}>Check Out</button>
            </Link>
          </div>
        </>
      ) : (
        <div className="no-history">
          <p>Looks like you haven't borrowed any books.</p>
          <p>Why not find something interesting today? 🕵️‍♂️📚</p>
          <Link to="/Epic-Reads">
            <button>Explore Books</button>
          </Link>
        </div>
      )}
    </div>
  );
};
