import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Book from "../../Pages/Home/TopBooks/Book";

const SearchResult = () => {
  const location = useLocation();
  const getSearchInput = location.state.searchInput;

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
    return e.bookTitle.toLowerCase().includes(getSearchInput);
  });

  return (
    <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
      <h1>Search By: {getSearchInput}</h1>
      <div className="grid grid-cols-5 gap-5 mt-5">
        {filteredBooks?.map((book: any) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
