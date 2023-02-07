import React, { useState } from "react";
import { useBookContext } from "../hooks/useBookContext";
import BookEdit from "./BookEdit";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBookContext();
  const { id, title } = book;

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${id}/300/200`} alt="book" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBookById(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
