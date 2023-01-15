import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from './Book';


const TopBooks = () => {
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
        <div className='max-w-7xl mx-auto px-5 py-5 mt-20'>
            <h2 className="mb-12 text-2xl md:text-3xl lg:text-5xl font-bold text-[#34315D] ml-5">Our Top Books</h2>
            
            <div>
                <Carousel responsive={responsive} className={'py-10'}>
                    {
                        [...Array(6)].map((book, i) => <Book key={i}></Book>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default TopBooks;