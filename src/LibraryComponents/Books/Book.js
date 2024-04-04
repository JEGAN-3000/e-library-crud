//NAME:JEGADHEESWARAN B
//DATE:7/12/23
// Create functional component for adding books
import React, { useState } from "react";
import "./Book.css";
import AddBooks from "./AddBooks";
import AddBookForm from "./AddBookForm";
import EditBookForm from "./EditBookForm";
import SearchBooks from "./SearchBooks";

// Importing Framer motion library for smooth scroll on routing pages

// AdminBooks functional component
const Book = (props) => {
  // initialize book data and state variables

  const bookData = [
    { id: 1, bookName: "MAHABHARATAM", bookAuthor: "VYASAR" },
    { id: 2, bookName: "BIBLE", bookAuthor: "MOSES" },
    { id: 3, bookName: "QURAN", bookAuthor: "MOHAMMED" },
  ];

  const [books, setBooks] = useState(bookData);
  const [search, setSearch] = useState("");

  // add book function

  const addBooks = (book) => {
    book.id = books.length + 1;
    setBooks([...books, book]);
  };
  // delete book function

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // edit book functions and state variables

  const [edit, setEdit] = useState(false);

  const initialState = { id: null, bookName: "", bookAuthor: "" };
  const [editBook, setEditBook] = useState(initialState);

  const editRow = (editBook) => {
    setEdit(true);
    setEditBook({
      id: editBook.id,
      bookName: editBook.bookName,
      bookAuthor: editBook.bookAuthor,
    });
  };

  const updateBook = (id, updatedBook) => {
    setEdit(true);
    setBooks(books.map((book) => (book.id === id ? updatedBook : book)));
    setEdit(false);
  };

  return (
    <div className="AdminBooksContainer ">
      <div className="AdminBookContentContainer flex flex-col md:flex-row ">
        <div className="rowContainer flex flex-col md:flex-row">
          {/* Conditional rendering of either AddBookForm or EditBookForm based on the 'edit' state variable */}

          {edit ? (
            <div>
              <EditBookForm
                editBook={editBook}
                updateBook={updateBook}
                setEdit={setEdit}
              />
            </div>
          ) : (
            <div className="addBookDisplay">
              <AddBookForm addBooks={addBooks} />
            </div>
          )}
          <div>

          <SearchBooks search={search} setSearch={setSearch} />
          </div>
        </div>

        <AddBooks
          books={books.filter((item) => item.bookName.includes(search))}
          deleteBook={deleteBook}
          editRow={editRow}
        />
      </div>
    </div>
  );
};
// export the AdminBooks component
export default Book;
