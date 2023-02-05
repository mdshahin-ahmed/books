import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
  const renderBooks = books.map((book) => {
    return (
      <BookShow book={book} key={book.id} onEdit={onEdit} onDelete={onDelete} />
    );
  });

  return <div className="book-list">{renderBooks}</div>;
};

export default BookList;
