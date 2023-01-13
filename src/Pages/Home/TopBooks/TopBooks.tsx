import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import bookData from '../../../../public/books.json';
import Book from './Book';
import { useState, useEffect } from 'react'


const TopBooks = () => {
    const [items, setItems] = useState<any[]>([])

    useEffect(() => {
        fetch('books.json')
            .then((res) => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    console.log(items);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='max-w-7xl mx-auto px-5 py-5'>
            <h2 className="my-3 text-2xl md:text-3xl lg:text-5xl font-bold text-[#34315D] ml-5">Our Top Books</h2>
            <div className='my-5'>
                <Carousel responsive={responsive}>
                    {
                        items.map((book) => <Book key={book._id} {...book}></Book>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default TopBooks;