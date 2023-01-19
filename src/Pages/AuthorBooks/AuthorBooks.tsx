import React from 'react';
import AuthorBook from './AuthorBook';

const AuthorBooks = () => {
    const img: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU'
    const authors: any[] = [
        { "name": "William Shakespeare", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU" },
        { "name": "Charles Dickens", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU" },
        { "name": "Jane Austen", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU" },
        { "name": "George Orwell", "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU" },
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