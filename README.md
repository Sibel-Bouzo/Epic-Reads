# Epic-Reads
The Epic Reads is a user-friendly platform designed to streamline the process of borrowing, returning, and managing books in a library. With features like personalized borrowing periods, real-time borrowing history, and automated return date calculations, this app simplifies library operations for both users and administrators.

# Features
- Home Page: Browse a collection of books with detailed information (title, author, description) and the ability to add them to the cart for borrowing.
- Cart Page: Review selected books, set the borrowing period, and view the calculated return date.
- Checkout Page: Complete a multi-step checkout process with personal information and library card details, followed by a summary and confirmation step.
- Borrowing History Page: Track all past borrowings, filter records by date, and update the status of books as returned.

# Pages Overview
## Home Page
- Displays a list of book cards, each containing an image, title, author, and description.
- Users can select multiple books and add them to the cart using the "Borrow Book" button.
  
## Cart Page
- Shows the list of selected books with their details.
- Users can set a borrowing period for all selected books (e.g., 1 week, 2 weeks, 1 month).
- Displays the return date based on the selected borrowing period.
- Shows the total number of borrowed books.
- Includes a checkbox to agree to terms and conditions before proceeding to checkout.
  
## Checkout Page
A multi-step form with the following steps:
- Step 1: Personal Information and Library Card Information (Full Name, Library Card Number)
- Step 2: Summary and Confirmation
Displays a summary of the entered data and the list of borrowed books with due dates.
Displays the total number of borrowed books.
Includes a confirmation button to finalize the borrowing process.
On successful confirmation, a success message is shown, the borrowed books list is cleared, and the user is redirected to the home page.

## Borrowing History Page
- Displays a table of all previous borrowings with columns for Date, Total Books, and an action button to view details.
- Allows users to filter borrowing records by date.
- Shows the status of each book (Returned or Not Returned).
- Includes an action button to change the status to "Returned" after the return date has passed.

# Technologies Used
- React.js: For building the user interface.
- MUI (Material-UI): For styling and UI components.
- React Router: For navigation between pages.
- React Context API: For managing global state across the app.
- LocalStorage: For persisting data like borrowed books and borrowing history.
- React-Hot-Toast: For notifications.

# Usage
- Home Page: Browse books and add them to your cart.
- Cart Page: Review your selections, set the borrowing period, and agree to the terms before proceeding to checkout.
- Checkout Page: Enter your personal and library card details, review your order, and confirm your borrowing.
- Borrowing History Page: Track and manage your past borrowings.
