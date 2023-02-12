import React, { useEffect, useState } from "react";
import ReactModal from "../Shared/ReactModal/ReactModal";

const SearchBar = ({ inputValue, modalIsOpen, setIsOpen }: any) => {
  interface book {
    authorEmail: string;
    authorImg: string;
    authorName: string;
    authorRating: number;
    bookCover: string;
    bookRating: number;
    bookTitle: string;
    category: string;
    description: string;
    discountedPrice: string;
    originalPrice: string;
    publication: string;
    _id: string | number;
  }
  const [books, setBooks] = useState<Array<book>>([]);

  useEffect(() => {
    fetch("https://bookship-server-zamanxd.vercel.app/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const filteredBooks = books?.filter((e: book) => {
    return e.bookTitle.toLowerCase().includes(inputValue);
  });

  return (
    <>
      <ReactModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        books={filteredBooks}
      ></ReactModal>
    </>
  );
};

export default SearchBar;
