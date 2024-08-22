import React from "react";
import { useGlobalContext } from "../../../contexts/context";
import ClearIcon from "@mui/icons-material/Clear";

export const CartItem = ({ image, title, author, index }) => {
  const { removeFromCart, handlePeriodChange, cart } = useGlobalContext();
  const { borrowPeriod, returnDate } = cart[index];

  return (
    <div className="cart-item-info">
      <img src={image} alt={title} />
      <div className="cart-item-selection">
        <div className="cart-info-flex">
          <div>
            <h3>{title}</h3>
            <h4>by {author}</h4>
          </div>

          <div>
            <label htmlFor={`borrow-period-select-${index}`}>
              Borrow Period:{" "}
            </label>
            <select
              id={`borrow-period-select-${index}`}
              value={borrowPeriod}
              onChange={(event) => handlePeriodChange(index, event)}
              className="styled-select"
            >
              <option value={7}>1 Week</option>
              <option value={14}>2 Weeks</option>
              <option value={21}>3 Weeks</option>
              <option value={30}>1 Month</option>
            </select>
            <p>Return by: {returnDate}</p>
          </div>
        </div>
        <button onClick={() => removeFromCart(index)}>
          <ClearIcon />
        </button>
      </div>
    </div>
  );
};
