import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const Comment = () => {
    return (
        <div className='border rounded-lg p-5 my-2'>
            <div className='flex justify-between flex-wrap my-2'>
                <div className='flex gap-x-3 items-center'>
                    <img className='w-8 h-8' src="https://www.pngmart.com/files/21/Account-User-PNG-Clipart.png" alt="" />
                    <div>
                        <h3 className='font-semibold'>Md Morshedul Islam</h3>
                        <p className='text-xs'>23th, Jan 2023</p>
                    </div>
                </div>
                <div className='flex gap-x-2 items-center'>
                    <span className='font-semibold hidden lg:block'>Ratings:</span> {
                        [...Array(4)].map((star, i) => <AiOutlineStar key={i} className='text-lg text-yellow-500' />)
                    }
                </div>
                <div className='flex gap-x-2 items-center'>
                    <button className='font-semibold'>Edit</button>
                    <span>|</span>
                    <button className='font-semibold'>Delete</button>
                </div>
            </div>
            <p className='lg:ml-11 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi voluptates similique quas quod magnam qui ea, impedit blanditiis alias?</p>
        </div>
    );
};

export default Comment;