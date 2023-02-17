import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import SingleBook from '../../Shared/SingleBook/SingleBook';
import Spinner from '../../Shared/Spinner/Spinner';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Skeletons from '../../Shared/Skeletons/Skeletons';
import Book from '../Home/TopBooks/Book';

const BooksByPrice = () => {
    const [value, setValue] = useState(1)
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    useTitle(`- Books`)
    useEffect(() => {
        setLoading(true)
        fetch(`https://bookship-server-zamanxd.vercel.app/booksprice?value=${value}`)
            .then((res) => res.json())
            .then((data) => {
                setBooks(data)
                setLoading(false)
            });
    }, [value])

    const handleChange = (e: any) => {
        setValue(e.target.value);
    }

    if (loading) {
        return <Skeletons />
    }

    return (
        <div className='bg-sky-50 rounded-lg'>
            {/* <span className='lg:text-2xl font-semibold text-center block'>Books: <span>{books?.length}</span></span> */}
            <div>
                <select defaultValue={value} name="price" id="" onChange={handleChange} className='select select-bordered m-[10px] ml-[20px] mt-3'>
                    <option value={1}>Filter by Price</option>
                    <option value="1">Low to High</option>
                    <option value="-1">High to Low</option>
                </select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-3 gap-5 pb-10'>
                {
                    books.map((book: any, i: number) => <Book key={i} {...book} />)
                }
            </div>

        </div>
    );
};

export default BooksByPrice;