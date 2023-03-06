import React, { useEffect, useState } from 'react';

type Props = {
  bookList: Book[];
};
type Book = {
  _id: number;
  bookTitle: string;
};

const BookList: React.FC<Props> = ({ bookList }) => {
    const [state, setState] = useState({ bookList: [] as Book[] });


  useEffect(() => {
    fetch('https://bookship-server-zamanxd.vercel.app/books')
      .then((res) => res.json())
      .then((data: Book[]) => {
        setState({ bookList: data });
      });
  }, []);

  return (
    <div>
      Book List
      <ol>
        {state.bookList.map((book) => (
          <li key={book._id}>{book.bookTitle}</li>
        ))}
      </ol>
    </div>
  );
  
};

export default BookList;
