import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { id, title } = book;

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, title) => {
    onEdit(id, title);
    setShowEdit(false);
  };

  let content = <h3>{title}</h3>;
  if (showEdit) {
    content = <BookEdit onEdit={onEdit} onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${id}/300/200`} alt="book" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
