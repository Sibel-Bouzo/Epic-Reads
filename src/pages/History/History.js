import React, { useState } from "react";
import { useGlobalContext } from "../../contexts/context";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import toast from "react-hot-toast";

export const History = () => {
  const { borrowHistory, updateBookStatus } = useGlobalContext();
  const [selectedBorrowing, setSelectedBorrowing] = useState(null);
  const [open, setOpen] = useState(false);
  const [filterDate, setFilterDate] = useState("");

  const handleOpen = (borrowing) => {
    setSelectedBorrowing(borrowing);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBorrowing(null);
  };

  const handleStatusUpdate = (recordIndex, bookIndex) => {
    updateBookStatus(recordIndex, bookIndex, "Returned");
    toast.success("Book marked as returned!");
  };

  const formatDateToMMDDYYYY = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;
  };

  const filteredHistory = borrowHistory.filter((record) => {
    if (!filterDate) return true;

    const formattedFilterDate = formatDateToMMDDYYYY(filterDate);
    return record.date === formattedFilterDate;
  });

  return (
    <div className="history px-16">
      {borrowHistory.length > 0 ? (
        <>
          <h2>History</h2>
          <div>
            <TextField
              label="Filter by Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Total Books</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredHistory.length > 0 ? (
                    filteredHistory.map((record, recordIndex) => (
                      <TableRow key={recordIndex}>
                        <TableCell>{record.date}</TableCell>
                        <TableCell>{record.books.length}</TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            onClick={() => handleOpen(record)}
                          >
                            View Books
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3}>
                        No borrowing history found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Borrowed Books</DialogTitle>
              <DialogContent>
                {selectedBorrowing && (
                  <ul>
                    {selectedBorrowing.books.map((book, bookIndex) => {
                      const isOverdue = new Date() > new Date(book.returnDate);
                      return (
                        <li key={bookIndex} style={{ marginBottom: "15px" }}>
                          <strong>{book.title}</strong> by {book.author} - Due
                          Date: {book.returnDate}
                          <br />
                          {/* Debugging: Log book status */}
                          <span>Status: {book.status}</span>
                          {isOverdue && book.status === "Not Returned" && (
                            <Button
                              variant="contained"
                              color="secondary"
                              onClick={() =>
                                handleStatusUpdate(
                                  borrowHistory.indexOf(selectedBorrowing),
                                  bookIndex
                                )
                              }
                              style={{ marginLeft: "10px" }}
                            >
                              Mark as Returned
                            </Button>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </>
      ) : (
        <>
          <div className="no-history">
            <p>Looks like you haven't borrowed any books.</p>
            <p>Why not find something interesting today? 🕵️‍♂️📚</p>
            <Link to="/Epic-Reads">
              <button>Start Borrowing</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
