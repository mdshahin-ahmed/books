import { useContext } from "react";
import { BooksContext } from "../context/books";

export const useBookContext = () => {
  return useContext(BooksContext);
};
