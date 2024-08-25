import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useGlobalContext } from "../../../contexts/context";
import CheckIcon from "@mui/icons-material/Check";

export const StepTwo = ({
  personalInfo,
  libraryCardInfo,
  cart,
  handlePreviousStep,
  handleCheckout,
  isChecked,
  handleCheckboxChange,
}) => {
  const { returnDate } = useGlobalContext();
  return (
    <div className="step-two-checkout">
      <h3>Summary and Confirmation</h3>
      <p>
        <strong>Name: </strong> {personalInfo.name}
      </p>
      <p>
        <strong>Email: </strong> {personalInfo.email}
      </p>
      <p>
        <strong>Phone Number: </strong> {personalInfo.phonenumber}
      </p>
      <p>
        <strong>Library Card Name: </strong> {libraryCardInfo.fullName}
      </p>
      <p>
        <strong>Library Card Number: </strong> {libraryCardInfo.cardNumber}
      </p>
      <ul>
        <strong>Borrowed Books: </strong>
        {cart.map((book, index) => (
          <li key={index}>
            <CheckIcon sx={{ color: "#d4a373" }} /> {book.title} by{" "}
            {book.author}, <span>Due: {book.returnDate}</span>
          </li>
        ))}
      </ul>
      <p>
        <strong>Total Books:</strong> {cart.length}
      </p>
      <div className="cart-checkout">
        <FormControlLabel
          required
          control={
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxChange}
              sx={{
                color: "white",
              }}
            />
          }
          label="By checking this box, I agree to return the book by the selected due date."
        />
        <div className="checkout-control">
          <button onClick={handlePreviousStep} className="back">
            Back
          </button>
          <button disabled={!isChecked} onClick={handleCheckout}>
            Confirm & Borrow
          </button>
        </div>
      </div>
    </div>
  );
};
