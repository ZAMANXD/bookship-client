import React, { useContext } from 'react';
import { AiFillStar } from 'react-icons/ai'
import { BsSuitHeart } from 'react-icons/bs';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import "./Book.css"




const Book = ({ ...book }) => {
    const { _id, bookTitle, authorName, authorEmail, authorImg, authorRating, bookRating, originalPrice, discountedPrice, bookCover, description, category, publication } = book
    const { increaseCartQuantity } = useCart()
    return (
    <div className="card">
  <div className="card-img">
  <Link to={`book/${_id}`}>
    <img className=' w-full h-full rounded-lg' src={bookCover} alt="" />
    </Link>
  </div>
  <div className="card-info">
    <p className="text-title text-gray-900">{bookTitle.length > 15 ? bookTitle.slice(0, 15) : bookTitle}</p>
    <div className='flex justify-start gap-x-2 my-2'>
        <img className='w-6 h-6 rounded-full border' src={authorImg} alt="" />
        <p className="text-body text-center text-gray-900">{authorName.length> 20 ? authorName.slice(0,15):authorName}</p>
    </div>
  </div>
  <div className="card-footer">
  <span className="text-title text-gray-900">$ {discountedPrice}</span>
  <div className='flex justify-end text-lg'>
    <div className="card-button" onClick={() => increaseCartQuantity(_id)}>
        <HiOutlineShoppingCart/>
    </div>
    <div className="card-button2 ml-3">
        <BsSuitHeart/>
    </div>
  </div>
</div></div>
    );
};

export default Book;