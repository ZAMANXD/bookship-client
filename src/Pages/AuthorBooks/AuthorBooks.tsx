import React from 'react';
import AuthorBook from './AuthorBook';

const AuthorBooks = () => {
    return (
        <div className='p-3 bg-gray-100'>
            {
                [...Array(5)].map((book, i) => <AuthorBook key={i} />)
            }
        </div>
    );
};

export default AuthorBooks;