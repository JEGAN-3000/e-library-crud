//NAME:JEGADHEESWARAN B
//DATE:7/12/23

// Import necessary dependencies
import React, { useState } from "react";
import "./AddBookForm.css";

// Create functional component for adding books

const AddBookForm = (props) => {
  // Define initial state for new book

  const initialState = { id: null, bookName: "", bookAuthor: "" };

  // State hook for managing new book details

  const [newBooks, setNewBooks] = useState(initialState);

  // Function to handle input change events

  const handleChange = (e) => {
    // Extract name and value from event target

    const { name, value } = e.target;

    // Update state with new values (converting to uppercase)

    setNewBooks({ ...newBooks, [name]: value.toUpperCase() });
  };
  // Function to handle form submission

  const handleSubmit = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Check if both fields are not empty
    if (newBooks.bookName === "" && newBooks.bookAuthor === "") return;

    // Call parent function to add new book
    props.addBooks(newBooks);

    // Reset new book details to initial state
    setNewBooks(initialState);
  };

  return (
    <div className="addBookFormContainer">
      {/* Add form */}

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="addFormControl flex flex-col md:flex-row w-full "
      >
        {/* Add form group for book name */}
        <div className="AddFormGroup">
          <input
            type="text"
            name="bookName"
            onChange={handleChange}
            value={newBooks.bookName}
            placeholder="BOOK NAME"
          />
        </div>
        {/* Add form group for book author */}
        <div className="AddFormGroup">
          <input
            type="text"
            name="bookAuthor"
            onChange={handleChange}
            value={newBooks.bookAuthor}
            placeholder="BOOK AUTHOR"
          />
        </div>
        {/* Add button for submitting form */}
        <button className="addButton md:w-[50px] md:h-[50px]" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
// Export component for use in other modules
export default AddBookForm;
