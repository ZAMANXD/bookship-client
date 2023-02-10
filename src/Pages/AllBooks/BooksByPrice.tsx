import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import SingleBook from '../../Shared/SingleBook/SingleBook';
import Spinner from '../../Shared/Spinner/Spinner';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const BooksByPrice = () => {
    const [value, setValue] = useState(1)
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    useTitle(`- Price`)
    useEffect(() => {
        setLoading(true)
        fetch(`https://bookship-server-zamanxd.vercel.app/booksprice?value=${value}`)
            .then((res) => res.json())
            .then((data) => {
                setBooks(data)
                setLoading(false)
            });
    }, [value])
    
    if (loading) {
        return <Spinner />
    }

    return (
        <div className='max-w-7xl mx-auto bg-gray-200 rounded-md'>
            {/* <span className='lg:text-2xl font-semibold text-center block'>Books: <span>{books?.length}</span></span> */}
            <div className='flex justify-between items-center p-5'>
                <button onClick={() => setValue(1)} className='border border-gray-400 rounded-md p-2 flex items-center text-sm gap-x-2 text-gray-600'>Low <BsArrowRight /> High</button>

                <button onClick={() => setValue(-1)} className='border border-gray-400 rounded-md p-2 flex items-center text-sm gap-x-2 text-gray-600'>High <BsArrowLeft /> Low</button>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-3 gap-5 pb-10'>
                {
                    books.map((book: any, i: number) => <SingleBook key={i} {...book} />)
                }
            </div>

        </div>
    );
};

export default BooksByPrice;