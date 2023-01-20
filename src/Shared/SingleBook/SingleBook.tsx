import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'
import { useCart } from '../../context/CartContext';

const SingleBook = ({ ...book }) => {
    const { increaseCartQuantity } = useCart()

    const { _id, bookTitle, authorName, authorEmail, authorImg, authorRating, bookRating, originalPrice, discountedPrice, bookCover, description, category, publication } = book
    return (
        <div className='bg-white rounded-md hover:shadow-2xl hover:shadow-gray-300 shadow-sm shadow-gray-300  transition duration-150 ease-in-out p-2'>
            <img className='h-80 lg:h-48 w-full mx-auto rounded-lg' src={bookCover} alt="" />
            <div className='p-2'>
                <div className='flex items-center gap-x-2 my-2'>
                    <img className='w-8 h-8 rounded-full border' src={authorImg} alt="" />
                    <h4 className='text-md'>{authorName}</h4>
                </div>
                <Link to={`/book/${_id}`} className='flex justify-between items-center'>
                    <h2 className='text-lg font-bold text-[#34315D] uppercase'>{bookTitle}</h2>
                    <BsArrowRight className='text-2xl' />
                </Link>
                <div className='flex gap-x-2 items-center my-2'>
                    Ratings: {
                        [...Array(parseInt(bookRating || 4))].map(star => <AiOutlineStar className='text-lg text-yellow-500' />)
                    }
                </div>
                <p className='text-sm text-justify'>{description}...</p>
                <div className=''>
                    <div className='flex justify-between items-end '>
                        <div>
                            <p className='text-sm font-semibold text-gray-500 '>$ <span className='line-through'>{originalPrice}</span></p>
                            <p className='text-2xl font-bold text-[#342D65]'>$ {discountedPrice}</p>
                        </div>
                        <div>
                            <button onClick={() => increaseCartQuantity(_id)} className='px-2 py-1 bg-[#3DB188] rounded-md text-white text-sm'>Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default SingleBook;