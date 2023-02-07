import { useBookContext } from "../hooks/useBookContext";
import BookShow from "./BookShow";

const BookList = () => {
  const { books } = useBookContext();

  const renderBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });

  return <div className="book-list">{renderBooks}</div>;
};

export default BookList;
