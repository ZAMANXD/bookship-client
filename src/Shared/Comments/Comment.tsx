import React from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineStar } from 'react-icons/ai';

const Comment = (commentData: any) => {
    const { _id, comment, userName, userImg, commentDate, rating } = commentData;
    console.log(_id);

    const handleDelete = (id: any) => {
        fetch(`https://bookship-server-zamanxd.vercel.app/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Review Deleted.')
            })
            .catch((err) => {
                console.log(err.code || err.message);
            })
    }

    return (
        <div className='border rounded-lg p-5 my-2'>
            <div className='flex justify-between flex-wrap my-2'>
                <div className='flex gap-x-3 items-center'>
                    <img className='w-8 h-8' src={userImg} alt="" />
                    <div>
                        <h3 className='font-semibold'>{userName}</h3>
                        <p className='text-xs'>{commentDate || "23th, Jan 2023"}</p>
                    </div>
                </div>
                <div className='flex gap-x-2 items-center'>
                    <span className='font-semibold hidden lg:block'>Ratings:</span> {
                        [...Array(parseInt(rating || 'No ratings'))].map((star, i) => <AiOutlineStar key={i} className='text-lg text-yellow-500' />)
                    }
                </div>
                <div className='flex gap-x-2 items-center'>
                    <button className='font-semibold' onClick={handleDelete}>Edit</button>
                    <span>|</span>
                    <button className='font-semibold' onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>
            <p className='lg:ml-11 text-justify'>{comment}</p>
        </div>
    );
};

export default Comment;