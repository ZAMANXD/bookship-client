import React, { useState } from 'react';
import { FaArrowRight, FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface BlogCardProps {
    _id: string;
    title: string;
    author: string;
    content: string;
    picture: string;
    likes: number;
    comments: { name: string, text: string }[];
  }

const BlogCard: React.FC<BlogCardProps> = ({_id,title, author, content, picture, likes}) => {
    
    return (
        <div className='flex my-6 mx-14 bs-box-shadow-3'>
            <div className='px-10 py-4'>
                <img className='h-52 min-w-[140px]' src={picture} alt="" />
            </div>
            <div className='pr-10'>
                <span className='text-xs'>February 23,2023</span>
                <h1 className='text-2xl font-bold mt-2'>{title}</h1>
                <h4 className='text-sm text-gray-700 my-2'>By {author}</h4>
                <p className='text-justify mb-2 text-gray-500'>{content.slice(0, 300)+'...'}</p>
                <div className='flex justify-between py-2'>
                    <p>{likes} likes</p>
                    <Link className='flex items-center text-green-500' to={`/blogs/${_id}`}>Read more <FaArrowRight className='pl-2 text-xl'/></Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;