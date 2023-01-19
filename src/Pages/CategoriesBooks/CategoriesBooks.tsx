import React from 'react';
import CategoryBook from './CategoryBook';

const CategoriesBooks = () => {
    return (
        <div className='p-3 bg-gray-100'>
            {
                [...Array(5)].map((book, i) => <CategoryBook />)
            }
        </div>
    );
};

export default CategoriesBooks;