import React from "react";
import { books } from "../../../../data/data";
import { Book } from "./book/Book";

export const Books = () => {
  return (
    <div className="books-container">
      <h2>Available Books</h2>
      <ul className="books">
        {books.map((book, index) => (
          <li key={index}>
            <Book {...book} />
          </li>
        ))}
      </ul>
    </div>
  );
};
