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
              sx={{
                marginBottom: 2,
                "& .MuiInputLabel-root": {
                  color: "white",
                  "&.Mui-focused": {
                    color: "white",
                  },
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: "white",
                },
                "& > :not(style)": {
                  color: "white",
                },
              }}
            />
            <TableContainer
              component={Paper}
              sx={{ backgroundColor: "transparent", border: "1px solid white" }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "white" }}>Date</TableCell>
                    <TableCell sx={{ color: "white" }}>Total Books</TableCell>
                    <TableCell sx={{ color: "white" }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredHistory.length > 0 ? (
                    filteredHistory.map((record, recordIndex) => (
                      <TableRow key={recordIndex}>
                        <TableCell sx={{ color: "white" }}>
                          {record.date}
                        </TableCell>
                        <TableCell sx={{ color: "white" }}>
                          {record.books.length}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            onClick={() => handleOpen(record)}
                            sx={{
                              border: "1px solid #d4a373 !important",
                              background:
                                "linear-gradient(to right, #ff6f61, #d4a373, #6b4226) !important",
                              WebkitBackgroundClip: "text !important",
                              WebkitTextFillColor: "transparent !important",
                              backgroundClip: "text !important",
                              textFillColor: "transparent !important",
                            }}
                          >
                            View Books
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={3}
                        sx={{
                          color: "white",
                        }}
                      >
                        No borrowing history found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            <Dialog
              open={open}
              onClose={handleClose}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#0f0f10", // Your desired color
                  color: "white", // Optional: text color
                },
              }}
            >
              <DialogTitle sx={{ color: "white" }}>Borrowed Books</DialogTitle>
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
                <Button
                  onClick={handleClose}
                  color="primary"
                  sx={{
                    background:
                      "linear-gradient(to right, #ff6f61, #d4a373, #6b4226) !important",
                    WebkitBackgroundClip: "text !important",
                    WebkitTextFillColor: "transparent !important",
                    backgroundClip: "text !important",
                    textFillColor: "transparent !important",
                  }}
                >
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
