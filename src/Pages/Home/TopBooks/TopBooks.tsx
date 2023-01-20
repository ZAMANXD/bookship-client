// import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from '../../../Shared/Spinner/Spinner';
import Book from './Book';


const TopBooks = () => {
    const [loading, setLoading] = useState(false)

    const [bookData, setBookData] = useState<any[]>([])

    useEffect(() => {
        setLoading(true)
        fetch("https://bookship-server-zamanxd.vercel.app/books")
            .then((res) => res.json())
            .then((data) => {
                setBookData(data)
                setLoading(false)
            });
    }, [])

    if (loading) {
        return <Spinner />
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <div className='max-w-7xl mx-auto px-5 py-5 mt-20'>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#34315D] ml-5">Our Top Books</h2>
            <div>
                <Carousel responsive={responsive} className={'py-10'}>
                    {
                        bookData.map((book) => <Book key={book._id} {...book} ></Book>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default TopBooks;