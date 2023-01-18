import React from 'react';
import AuthorBook from './AuthorBook';

const AuthorBooks = () => {
    const img: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU'
    const authors: any[] = [
        { name: 'William Shakespeare', img },
        { name: 'Charles Dickens', img },
        { name: 'Jane Austen', img },
        { name: 'George Orwell', img }
    ]
    return (
        <div className='p-3 bg-gray-100'>
            {
                authors.map((author, i) => <AuthorBook key={i} {...author} />)
            }
        </div>
    );
};

export default AuthorBooks;