import React, { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState(new Set());

  const [borrowPeriod, setBorrowPeriod] = useState(7);
  const [returnDate, setReturnDate] = useState(calculateReturnDate(7));

  const [borrowHistory, setBorrowHistory] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("borrowedBooks");
    const savedHistory = localStorage.getItem("borrowHistory");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCart(parsedCart);
      setBorrowedBooks(new Set(parsedCart.map((book) => book.title)));
    }
    if (savedHistory) {
      const parsedHistory = JSON.parse(savedHistory);
      setBorrowHistory(parsedHistory);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("borrowedBooks", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("borrowHistory", JSON.stringify(borrowHistory));
  }, [borrowHistory]);

  const addToCart = (book) => {
    if (!borrowedBooks.has(book.title)) {
      setCart((prevCart) => {
        const updatedCart = [
          ...prevCart,
          {
            ...book,
            borrowPeriod: 7,
            returnDate: calculateReturnDate(7),
          },
        ];
        setBorrowedBooks(new Set(updatedCart.map((b) => b.title)));
        toast(`${book.title} added to your cart! 📚`);
        return updatedCart;
      });
    }
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((_, i) => i !== index);
      setBorrowedBooks(new Set(updatedCart.map((b) => b.title)));
      toast("Book removed from your cart! ❌");
      return updatedCart;
    });
  };

  const clearAll = () => {
    if (cart.length > 0) {
      const newRecord = {
        date: new Date().toLocaleDateString(),
        books: cart.map((book) => ({ ...book, status: "Not Returned" })),
        returnDate: calculateReturnDate(borrowPeriod),
      };
      setBorrowHistory((prevHistory) => {
        const updatedHistory = [...prevHistory, newRecord];
        return updatedHistory;
      });
    }
    setCart([]);
    setBorrowedBooks(new Set());
    toast("Cart is clean and ready for new reads! 📚");
  };

  const handlePeriodChange = (index, event) => {
    const period = parseInt(event.target.value);
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index].borrowPeriod = period;
      updatedCart[index].returnDate = calculateReturnDate(period);
      return updatedCart;
    });
  };

  function calculateReturnDate(days) {
    const today = new Date();
    const returnDate = new Date(today);
    returnDate.setDate(today.getDate() + days);
    const formattedDate = `${
      returnDate.getMonth() + 1
    }/${returnDate.getDate()}/${returnDate.getFullYear()}`;

    return formattedDate;
  }

  const updateBookStatus = (recordIndex, bookIndex, status) => {
    setBorrowHistory((prevHistory) => {
      const updatedHistory = [...prevHistory];
      updatedHistory[recordIndex].books[bookIndex].status = status;
      return updatedHistory;
    });
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearAll,
        borrowedBooks,
        borrowPeriod,
        handlePeriodChange,
        returnDate,
        borrowHistory,
        updateBookStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
