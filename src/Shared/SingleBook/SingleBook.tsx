import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SingleBook = ({ ...book }) => {
    const { _id, title, sellerName, sellerPhoto, price, discountPrice, bookImage, detailes } = book
    return (
        <div className='bg-white rounded-md hover:shadow-2xl hover:shadow-gray-300 shadow-sm shadow-gray-300  transition duration-150 ease-in-out p-2'>
            <img className='h-80 lg:h-48 w-full mx-auto rounded-lg' src={book.bookImage} alt="" />
            <div className='p-2'>
                <div className='flex items-center gap-x-2 my-2'>
                    <img className='w-8 h-8 rounded-full border' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU'} alt="" />
                    <h4 className='text-md'>{sellerName}</h4>
                </div>
                <div className='flex justify-between items-center'>
                    <Link to={`/book/${_id}`}><h2 className='text-lg font-bold text-[#34315D] uppercase'>{title}</h2></Link>
                    <div className='flex justify-between items-center'>
                        {
                            [...Array(5)].map(star => <AiOutlineStar className='text-lg text-yellow-500' />)
                        }
                    </div>
                </div>
                <p className='text-sm text-justify'>{detailes}</p>
                <div className=''>
                    <div className='flex justify-between items-end'>
                        <div>
                            <p className='text-sm font-semibold text-gray-500 '>$ <span className='line-through'>{price}</span></p>
                            <p className='text-2xl font-bold text-[#342D65]'>$ {discountPrice}</p>
                        </div>
                        <Link to={'/addtocart'} className='px-2 h-8 bg-[#3DB188] rounded-md text-white text-sm'>Buy Now</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleBook;