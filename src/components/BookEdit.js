import { useState } from "react";
import { useBookContext } from "../hooks/useBookContext";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBookContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label htmlFor="">Title</label>
      <input
        value={title}
        onChange={handleChange}
        type="text"
        className="input"
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
