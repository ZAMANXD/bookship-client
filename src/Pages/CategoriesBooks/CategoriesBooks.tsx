import React from 'react';
import CategoryBook from './CategoryBook';

const CategoriesBooks = () => {
    const categories: any[] = [
        { "name": "Fantasy" },
        { "name": "Science Fiction" }
    ]
    return (
        <div className='p-3 bg-gray-100'>
            {
                categories.map((category, i) => <CategoryBook key={i} {...category} />)
            }
        </div>
    );
};

export default CategoriesBooks;