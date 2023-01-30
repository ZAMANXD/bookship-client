import React, { useEffect, useState } from 'react';
import CategoryBook from './CategoryBook';

const CategoriesBooks = () => {
    const categories: any[] = [
        { "name": "Fantasy" },
        { "name": "Science Fiction" }
    ]
    // const [categories, setCategories] = useState<any[]>([])
    // useEffect(() => {
    //     fetch(`http://localhost:5000/specific-categories`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setCategories(data)
    //         })
    // }, [])

    return (
        <div className='p-3 bg-gray-100'>
            {
                categories.map((category, i) => <CategoryBook key={i} {...category} />)
            }
        </div>
    );
};

export default CategoriesBooks;