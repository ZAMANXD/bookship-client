import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const BookDetails = () => {
    const book = {
        "_id": "7",
        "bookTitle": "Lessons in Chemistry",
        "authorName": "Bonnie Garmus",
        "rating": "4.5",
        "originalPrice": "29",
        "discountedPrice": "24",
        "image": "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9780385549400_p0_v12%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        "description": "Also available as Large print, audio CD"
    }
    return (
        <div className='p-10 bg-gray-100'>
            <h2 className='text-5xl font-semibold text-[#34315D]'>Book Details</h2>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 py-5'>
                <div>
                    <img className='w-full' src={book.image} alt="" />
                </div>
                <div>
                    <h3 className='text-[#34315D] text-4xl font-semibold'>{book?.bookTitle}</h3>
                    <p className='my-5'>Description: {book.description}</p>
                    <p className='my-5'>Author: {book.authorName}</p>
                    <div className='flex gap-x-2 items-center'>
                        Author Ratings: {
                            [...Array((5))].map(star => <AiOutlineStar className='text-lg text-yellow-500' />)
                        }
                    </div>
                    <div className='flex items-end gap-x-10 my-10'>
                        <div>
                            <p className='text-sm font-semibold text-gray-500 '>$ <span className='line-through text-xl'>{book.originalPrice}</span></p>
                            <p className='text-4xl font-bold text-[#342D65]'>$ {book.discountedPrice}</p>
                        </div>

                        <button className='px-3 h-10 bg-[#3DB188] rounded-md text-white'>Buy Now</button>
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