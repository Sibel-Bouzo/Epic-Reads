import React from "react";
import { useGlobalContext } from "../../../../../contexts/context";

export const Book = ({ image, title, author, description }) => {
  const { addToCart, borrowedBooks } = useGlobalContext();

  const handleBorrow = () => {
    const book = { image, title, author, description };
    addToCart(book);
  };

  const isBookBorrowed = borrowedBooks.has(title);

  return (
    <div className="flex flex-col book">
      <div className="w-full overflow-hidden h-14">
        <img src={image} alt={title} className="w-full h-[290px]" />
      </div>
      <div className="book-info">
        <h3>{title}</h3>
        <h4>by {author}</h4>
        <p>{description}</p>
      </div>
      <button
        onClick={handleBorrow}
        disabled={isBookBorrowed}
        className={`${isBookBorrowed ? "disabled" : "gradient-text"}`}
      >
        {isBookBorrowed ? "Already Borrowed" : "Borrow Book"}
      </button>
    </div>
  );
};
