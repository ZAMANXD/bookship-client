import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CommentBox from '../../Shared/Comments/CommentBox';
import Comments from '../../Shared/Comments/Comments';

const BookDetails = () => {
    const { increaseCartQuantity } = useCart()

    let book: any = useLoaderData()
    const { _id, bookTitle, authorName, authorRating, bookRating, originalPrice, discountedPrice, bookCover, description, category, publication } = book

    const { data: comments, refetch } = useQuery({
        queryKey: ['comments'],
        queryFn: () => {
            return fetch(`https://bookship-server-zamanxd.vercel.app/reviews/${book?._id}`)
                .then(res => res.json())
        }
    })

    return (
        <div className='max-w-7xl mx-auto p-5 lg:p-10'>
            <h2 className='text-3xl lg:text-5xl font-semibold text-[#34315D]'>Book Details</h2>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 py-5'>
                <div>
                    <img className='w-full' src={bookCover} alt="" />
                </div>
                <div>
                    <h3 className='text-[#34315D] text-2xl lg:text-4xl font-semibold'>{bookTitle}</h3>
                    <p className='my-3'><span className='font-semibold'>Description:</span> {description}</p>
                    <div className='flex gap-x-2 items-center'>
                        <span className='font-semibold'>Book Ratings:</span> {
                            [...Array((parseInt(bookRating || 4)))].map((star, i) => <AiOutlineStar key={i} className='text-lg text-yellow-500' />)
                        }
                    </div>
                    <div className='my-8'>
                        <p className='my-3'><span className='font-semibold'>Author:</span> {authorName}</p>
                        <div className='flex gap-x-2 items-center'>
                            <span className='font-semibold'>Author Ratings:</span> {
                                [...Array((parseInt(authorRating || 4)))].map((star, i) => <AiOutlineStar key={i} className='text-lg text-yellow-500' />)
                            }
                        </div>
                    </div>
                    <p className='my-3'><span className='font-semibold'>Category:</span> {category}</p>
                    <p className='my-3'><span className='font-semibold'>Publication:</span> {publication}</p>

                    <div className='flex items-end gap-x-10 my-10'>
                        <div>
                            <p className='text-sm font-semibold text-gray-500 '>$ <span className='line-through text-xl'>{originalPrice}</span></p>
                            <p className='text-4xl font-bold text-[#342D65]'>$ {discountedPrice}</p>
                        </div>

                        <button onClick={() => increaseCartQuantity(_id)} className='px-3 h-10 bg-[#3DB188] rounded-md text-white'>Add to Cart</button>
                    </div>
                    <CommentBox {...book} refetch={refetch} />
                    <Comments {...book} comments={comments} refetch={refetch} />
                </div>
            </div>
        </div>
    );
};

export default BookDetails;