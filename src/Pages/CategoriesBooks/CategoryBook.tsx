import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleBook from '../../Shared/SingleBook/SingleBook';
import Spinner from '../../Shared/Spinner/Spinner';

const CategoryBook = ({ ...category }) => {
    const [loading, setLoading] = useState(false)

    const [books, setBooks] = useState<any[]>([])
    useEffect(() => {
        setLoading(true)
        fetch('https://bookship-server-zamanxd.vercel.app/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='my-5 border p-3'>
            <Link to={`/category/${category?.name}`} className='flex justify-between items-center mb-3'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='font-bold text-xl'>{category?.name}</h2>
                </div>
                <Link to={`/category/${category?.name}`} className='text-blue-400'>View All</Link>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    books.filter(book => book?.category === category?.name).slice(0, 3).map(book => <SingleBook key={book?._id} {...book} />)
                }
            </div>
        </div>
    );
};

export default CategoryBook;