import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleBook from '../../Shared/SingleBook/SingleBook';
import Skeletons from '../../Shared/Skeletons/Skeletons';
import Spinner from '../../Shared/Spinner/Spinner';

const PublicationBook = ({ ...publication }) => {
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
        return <Skeletons />
    }

    return (
        <div className='p-3 lg:p-5'>
            <Link to={`/books/publication/${publication?.name}`} className='flex justify-between items-center mb-3'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='font-bold text-xl'>{publication?.name}</h2>
                </div>
                <Link to={`/books/publication/${publication?.name}`} className='text-blue-400'>View All</Link>
            </Link>
            {
                !books.length ? <p className='text-center text-xl'>No Books Available in this Publication. Coming Soon...</p> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        books.filter(book => book?.publication === publication?.name).slice(0, 3).map(book => <SingleBook key={book?._id} {...book} />)
                    }
                </div>
            }

        </div>
    );
};

export default PublicationBook;