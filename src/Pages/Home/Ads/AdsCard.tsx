import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "./AdsCard.css";
const AdsCard = ({ book }: any) => {
  const { authorName, authorImg, bookCover, bookTitle, discountedPrice } = book;
  return (
    <div className="py-11">
      <div className="bg-white sm:h-56 rounded shadow-md sm:flex">
        <div className="relative sm:w-96">
          <img
            className=" w-full  h-full rounded-l-sm bg-slate-300 "
            src={bookCover}
            alt=""
          />
          <p className="absolute top-0 left-0 text-left  bg-white px-7">Ads</p>
        </div>
        <div className="w-full flex flex-col">
          <div className="p-4 pb-0 flex-1">
            <p className="text-title text-gray-800">
              {bookTitle.length > 15 ? bookTitle.slice(0, 15) : bookTitle}
            </p>
            <div className="flex justify-start gap-x-2 my-2">
              <img
                className="w-6 h-6 rounded-full border"
                src={authorImg}
                alt=""
              />
              <p className="text-body text-center text-gray-900">
                {authorName.length > 20 ? authorName.slice(0, 15) : authorName}
              </p>
            </div>

            <span className="text-2xl ">${discountedPrice}</span>
          </div>
          <div className="bg-gray-200  p-3 flex items-center justify-between transition hover:bg-grey-300">
            Add To Cart
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsCard;
