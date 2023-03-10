import { useState } from "react";
import { useBookContext } from "../hooks/useBookContext";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBookContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };
  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
