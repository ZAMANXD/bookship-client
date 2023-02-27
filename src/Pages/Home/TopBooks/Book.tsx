import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { useCart } from "../../../context/CartContext";
import "./Book.css";

const Book = ({ ...book }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    bookTitle,
    authorName,
    authorEmail,
    authorImg,
    authorRating,
    bookRating,
    originalPrice,
    discountedPrice,
    bookCover,
    description,
    category,
    publication,
  } = book;
  const { increaseCartQuantity } = useCart();

  // Add to favourite
  const favouritehandler = ( userEmail: string) => {

    const favouriteItem = { 
      productId:_id,
      bookTitle,
      authorName,
      authorEmail,
      authorImg,
      authorRating,
      bookRating,
      originalPrice,
      discountedPrice,
      bookCover,
      description,
      category,
      publication, 
      userEmail };
    console.log(favouriteItem);
    fetch("https://bookship-server-zamanxd.vercel.app/favorurite", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(favouriteItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          toast.error(data.message);
          // console.log(data);
        } else {
          toast.success("Added Favorite Section");
        }
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <div className="book-card bs-box-shadow-3 bg-gray-50">
      <div className="card-img">
        <Link to={`/book/${_id}`}>
          <img className=" w-full h-full rounded-lg" src={bookCover} alt="" />
        </Link>
      </div>
      <div className="card-info">
        <p className="text-title text-gray-800">
          {bookTitle.length > 15 ? bookTitle.slice(0, 15) : bookTitle}...
        </p>
        <div className="flex justify-start gap-x-2 my-2">
          <img className="w-6 h-6 rounded-full border" src={authorImg} alt="" />
          <p className="text-body text-center text-gray-900">
            {authorName.length > 20 ? authorName.slice(0, 15) : authorName}
          </p>
        </div>
      </div>
      <div className="card-footer">
        <div className="flex gap-x-2 items-center">
          <span className="text-title text-gray-900">${discountedPrice}</span>
          <span className="line-through text-sm text-gray-900">${originalPrice}</span>
        </div>
        <div className="flex justify-end text-lg">
          <div
            className="card-button"
            onClick={() => increaseCartQuantity(_id)}
          >
            <HiOutlineShoppingCart />
          </div>
          <div
            className="card-button2 ml-3"
            onClick={() => favouritehandler(user.email)}
          >
            <BsSuitHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
