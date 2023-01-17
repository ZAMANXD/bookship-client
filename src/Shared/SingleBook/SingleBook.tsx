import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SingleBook = () => {
    return (
        <div className='bg-white rounded-md hover:shadow-2xl hover:shadow-gray-500 shadow-sm shadow-gray-300  transition duration-150 ease-in-out p-2'>
            <img className='h-72 lg:h-48 w-full mx-auto rounded-lg' src={"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781728281414_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D"} alt="" />
            <div className='p-2'>
                <div className='flex items-center gap-x-2 my-2'>
                    <img className='w-8 h-8 rounded-full border' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU" alt="" />
                    <h4 className='text-md'>{"authorName"}</h4>
                </div>
                <div className='flex justify-between items-center'>
                    <Link to={`/book/${"_id"}`}><h2 className='text-lg font-bold text-[#34315D] uppercase'>{"bookTitle"}</h2></Link>
                    <div className='flex justify-between items-center'>
                        {
                            [...Array(5)].map(star => <AiOutlineStar className='text-lg text-yellow-500' />)
                        }
                    </div>
                </div>
                <p className='text-sm text-justify'>{"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, totam!"}</p>
                <div className=''>
                    <div className='flex justify-between items-end'>
                        <div>
                            <p className='text-sm font-semibold text-gray-500 '>$ <span className='line-through'>{60}</span></p>
                            <p className='text-2xl font-bold text-[#342D65]'>$ {50}</p>
                        </div>
                        <button className='px-2 h-8 bg-[#3DB188] rounded-md text-white text-sm'>Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleBook;