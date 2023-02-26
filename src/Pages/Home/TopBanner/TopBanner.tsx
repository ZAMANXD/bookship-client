import React, { useState } from "react";

import img1 from "./img/books-carousel.jpg";
import "./css/TopBanner.css";

import lottie2 from "../../../Lottie/lottie2.json";
import Lottie from "lottie-react";
import MainButton from "../../../components/MainButton/MainButton";
import { useNavigate } from "react-router-dom";

const TopBanner = () => {
  const navigate = useNavigate();

  const [searchInput, SetSearhInput] = useState("");

  const handleGetSeachInput = (e: any) => {
    SetSearhInput(e.target.value.toLowerCase());
    if (e.key === "Enter") {
      navigate("/searchResult", { state: { searchInput } });
    }
  };
  const handleSearchBtnSubmitClick = () => {
    navigate("/searchResult", { state: { searchInput } });
  };

  return (
    <div className="custom_Css">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 ">
        <div className="flex border rounded-full lg:hidden mb-8 -mt-10">
          <input
            type="text"
            name="search"
            className="px-6 py-2 rounded-l-full w-full"
            placeholder="Search a book..."
            onKeyUp={handleGetSeachInput}
          />
          <button
            type="submit"
            className="flex items-center justify-center px-4 border-l"
            onClick={handleSearchBtnSubmitClick}
          >
            <svg
              className="h-4 w-4 text-grey-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div
            className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 "
            data-aos="slide-right"
          >
            <div className="max-w-xl mb-6">
              {/* <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-green-400 bs-text-primary">
                Brand new
              </p>
            </div> */}
              <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-[#34315D] sm:text-4xl sm:leading-none">
                Browse our selection now
                <br className="hidden md:block " />
                and start your{" "}
                <span className="inline-block text-4xl">
                  journey towards success today!
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Are you looking to improve your career, relationships, or
                overall well-being? Look no further than our extensive
                collection of books, written by experts in their respective
                fields.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-center md:flex-row">
              <MainButton></MainButton>
            </div>
          </div>

          <div className="relative lg:w-1/2" data-aos="slide-left">
            {/* <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src={img1}
            alt=""
          /> */}

            <Lottie animationData={lottie2} loop={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
