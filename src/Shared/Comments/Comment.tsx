import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import { AuthContext } from '../../context/AuthProvider';
import { BsStar, BsStarFill } from 'react-icons/bs';

const Comment = (props: any) => {
    const { user } = useContext(AuthContext)
    const { _id, comment, userName, userImg, commentDate, rating, setCommentId, refetch, decision, setDecision } = props;
    console.log(decision);

    const handleDelete = (id: any) => {
        if (decision) {
            fetch(`https://bookship-server-zamanxd.vercel.app/delete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Review Deleted.')
                    setDecision(true)
                    refetch()
                })
                .catch((err) => {
                    console.log(err.code || err.message);
                    refetch()
                })
        }
    }

    return (
        <div className='border rounded-lg p-5 my-2'>
            <div className='flex justify-between flex-wrap my-2'>
                <div className='flex gap-x-2 items-center'>
                    <img className='w-6 h-6 lg:w-8 lg:h-8 rounded-full' src={userImg} alt="" />
                    <div>
                        <h3 className='font-semibold'>{userName}</h3>
                        <p className='text-xs'>{commentDate || "23th, Jan 2023"}</p>
                    </div>
                </div>
                {
                    user?.email === props?.userEmail &&
                    <div className='flex gap-x-2 items-center'>
                        <button onClick={() => setCommentId(props)}>
                            <label htmlFor="comment-modal" className="font-semibold cursor-pointer text-xl"><FiEdit2 /></label>
                        </button>
                        <span className='text-xl'>|</span>
                        <button className='font-semibold text-2xl' onClick={() => handleDelete(_id)}><label htmlFor="my-modal-6" className="cursor-pointer">
                            <AiFillDelete />
                        </label>
                        </button>
                    </div>
                }
                <div className='flex gap-x-2 items-center mt-3 lg:mt-0'>
                    <span className='font-semibold hidden lg:block'>Ratings:</span>
                    <div className='flex items-center gap-x-1'>
                        <span className='flex gap-x-1'>
                            {
                                [...Array(parseInt(rating || 'No ratings'))].map((star, i) => <BsStarFill key={i} className='text-xl text-yellow-500' />)
                            }
                        </span>
                        <span className='flex gap-x-1'>
                            {
                                [...Array(5 - rating)].map((star, i) => <BsStar key={i} className='text-lg text-yellow-500' />)
                            }
                        </span>
                    </div>
                </div>
            </div>
            <p className='lg:ml-11 text-justify'>{comment}</p>
        </div>
    );
};

export default Comment;