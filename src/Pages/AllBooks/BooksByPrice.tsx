import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import SingleBook from '../../Shared/SingleBook/SingleBook';
import Spinner from '../../Shared/Spinner/Spinner';

const BooksByPrice = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    useTitle(`- Low to High`)
    useEffect(() => {
        setLoading(true)
        fetch("https://bookship-server-zamanxd.vercel.app/books")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data)
                setLoading(false)
            });
    }, [])

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='py-10 max-w-7xl mx-auto'>
            <h2 className='text-center text-3xl my-5'> Low to High :<span className='uppercase'>{books.length}</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-3 gap-5 pb-10'>
                {
                    books.map((book: any, i: number) => <SingleBook key={i} {...book} />)
                }
            </div>
        </div>
    );
};

export default BooksByPrice;