import React, { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import "./Book.css"




const Book = ({ ...book }) => {
    const { _id, bookTitle, authorName, authorEmail, authorImg, authorRating, bookRating, originalPrice, discountedPrice, bookCover, description, category, publication } = book
    const { increaseCartQuantity } = useCart()
    return (
        <div className='bookCont bg-[#ffffff49] rounded-lg hover:shadow-2xl hover:shadow-gray-400 shadow-lg shadow-gray-300 ease-in-out duration-200 p-5 mx-2'    data-aos="zoom-out"       data-aos-delay="10" >
            <div className='relative'    data-aos="flip-up"       data-aos-delay="100">
                <Link to={`book/${_id}`}><img className={`h-42 lg:h-52 w-auto mx-auto rounded-lg hover:shadow-lg hover:shadow-gray-500 ease-in-out duration-200`} src={bookCover} alt="" />
                </Link>
                <div className='tagCont rounded-sm h-5 hover:h-10 lg:hover:h-14 w-5 lg:w-7 bg-red-500 shadow-sm absolute top-0 right-3 lg:right-10 ease-in-out duration-[400ms]'></div>
            </div>
            <div className='mt-2 h-24 lg:h-32 relative'>

                <div className='flex items-center gap-x-2 my-2'>
                    <img className='w-5 h-5 rounded-full border' src={authorImg} alt="" />
                    <h4 className='text-xs lg:text-sm font-medium text-gray-600'>{authorName}</h4>
                </div>

                <h2 className='text-xs lg:text-md font-semibold text-[#34315D] uppercase'>{bookTitle.length > 15 ? bookTitle.slice(0, 15) : bookTitle}</h2>

                <div className='absolute bottom-0 w-full'>

                    <div className='flex justify-between items-center lg:my-2'>
                        <p className='text-md lg:text-lg font-semibold text-gray-500 '>$ <span className='line-through'>{originalPrice}</span></p>
                        <div className='flex justify-between items-center'>
                            {
                                [...Array(parseInt(bookRating || 4))].map((star, i) => <AiFillStar key={i} className='text-sm text-yellow-500' />)
                            }
                        </div>
                    </div>

                    <div className='flex justify-between items-center'>

                        <div>
                            <p className='text-md lg:text-lg font-bold text-[#342D65]'>$ {discountedPrice}</p>
                        </div>

                        <button className='h-5 lg:h-7 w-14 lg:w-24 flex items-center justify-center bg-green-400 hover:bg-[#3DB188] hover:text-white duration-[400ms] rounded-md text-gray-700 text-[9px] lg:text-sm' onClick={() => increaseCartQuantity(_id)} >Add to cart</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Book;