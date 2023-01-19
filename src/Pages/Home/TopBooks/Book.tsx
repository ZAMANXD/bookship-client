import React from 'react';
import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';




const Book = ({ ...book }) => {
    const {
        _id,
        bookTitle,
        authorName,
        rating,
        originalPrice,
        discountedPrice,
        image,
        description
    } = book

    const { increaseCartQuantity } = useCart()
    return (
        <div className='bg-white rounded-lg hover:shadow-2xl hover:shadow-gray-500 shadow-lg shadow-gray-300 ease-in-out duration-200 p-5 mx-2'>
            <div className='relative'>
                <img className={`cont h-80 w-auto mx-auto rounded-lg hover:shadow-lg hover:shadow-gray-500 ease-in-out duration-200`} src={image} alt="" />
                <div className='hoverMe h-5 hover:h-14 w-7 bg-yellow-500 absolute top-0 right-24 ease-in-out duration-300'></div>
            </div>
            <div className='mt-10 h-52 relative'>
                <div className='flex items-center gap-x-2 my-2'>
                    <img className='w-8 h-8 rounded-full border' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU" alt="" />
                    <h4 className='text-md'>{authorName}</h4>
                </div>
                <div className='flex justify-between items-center'>
                    <Link to={`book/${_id}`}><h2 className='text-lg font-bold text-[#34315D] uppercase'>{bookTitle}</h2></Link>
                    <div className='flex justify-between items-center'>
                        {
                            [...Array(parseInt(rating))].map((star, i) => <AiOutlineStar key={i} className='text-lg text-yellow-500' />)
                        }
                    </div>
                </div>
                <p className='text-sm'>{description}</p>
                <div className='absolute bottom-0 my-3 w-full'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-sm font-semibold text-gray-500 '>$ <span className='line-through'>{originalPrice}</span></p>
                            <p className='text-2xl font-bold text-[#342D65]'>$ {discountedPrice}</p>
                        </div>

                        <button className='px-2 py-2 bg-[#3DB188] rounded-md text-white' onClick={() => increaseCartQuantity(_id)} >Add to cart</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Book;