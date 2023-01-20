import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    let book: any = useLoaderData()
    const { _id, bookTitle, authorName, authorEmail, authorImg, authorRating, bookRating, originalPrice, discountedPrice, bookCover, description, category, publication } = book

    console.log(book.title);
    return (
        <div className='p-10 bg-gray-100'>
            <h2 className='text-5xl font-semibold text-[#34315D]'>Book Details</h2>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 py-5'>
                <div>
                    <img className='w-full' src={bookCover} alt="" />
                </div>
                <div>
                    <h3 className='text-[#34315D] text-4xl font-semibold'>{bookTitle}</h3>
                    <p className='my-3'>Description: {description}</p>
                    <p className='my-3'>Author: {authorName}</p>
                    <div className='flex gap-x-2 items-center'>
                        Author Ratings: {
                            [...Array((parseInt(authorRating || 4)))].map((star, i) => <AiOutlineStar key={i} className='text-lg text-yellow-500' />)
                        }
                    </div>
                    <p className='my-3'>Category: {category}</p>
                    <p className='my-3'>Publication: {publication}</p>
                    <div className='flex gap-x-2 items-center'>
                        Book Ratings: {
                            [...Array((parseInt(bookRating || 4)))].map((star, i) => <AiOutlineStar key={i} className='text-lg text-yellow-500' />)
                        }
                    </div>
                    <div className='flex items-end gap-x-10 my-10'>
                        <div>
                            <p className='text-sm font-semibold text-gray-500 '>$ <span className='line-through text-xl'>{originalPrice}</span></p>
                            <p className='text-4xl font-bold text-[#342D65]'>$ {discountedPrice}</p>
                        </div>

                        <button className='px-3 h-10 bg-[#3DB188] rounded-md text-white'>Add to Cart</button>
                    </div>
                    <div className='mt-40'>
                        <h5 className='tex-2xl font-semibold my-3'>Please, Share your opinion for this Book.</h5>
                        <textarea name="" id="" className='w-full h-24 py-3 px-5 rounded-md' placeholder='Write Your Comment'></textarea>
                        <button className='bg-[#3DB188] p-2 text-white rounded-sm'>Comment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;