import React from "react";
import img1 from "./img/books-carousel.jpg";
import "./css/TopBanner.css";

import lottie2 from "../../../Lottie/lottie2.json";
import Lottie from "lottie-react";
import MainButton from "../../../components/MainButton/MainButton";

const TopBanner = () => {
  return (
    <div className="custom_Css">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 ">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0 " data-aos="flip-up">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-green-400">
                Brand new
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-[#34315D] sm:text-4xl sm:leading-none">
              Browse our selection now
              <br className="hidden md:block " />
              and start your{" "}
              <span className="inline-block text-4xl">
                journey towards success today!
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Are you looking to improve your career, relationships, or overall
              well-being? Look no further than our extensive collection of
              books, written by experts in their respective fields.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-center md:flex-row">
           <MainButton></MainButton>
          </div>
        </div>

        <div className="relative lg:w-1/2" data-aos="flip-down">
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
