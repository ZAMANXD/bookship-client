import React from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto ">
      <div className="bg-gradient-to-bl from-violet-600 to-indigo-500 mt-10 py-14 custom-bg rounded-lg mx-2 flex flex-col items-center">
        <h1
          className="text-3xl md:text-4xl lg:text-4xl font-bold text-white text-center pt-6 mb-10 "
          data-aos="zoom-in"
        >
          Get in Touch
        </h1>
        {/* Comment by arghya  */}
        <div
          className="p-5 mx-auto flex rounded-xl overflow-hidden items-center justify-center w-full md:w-8/12 lg:w-6/12 "
          data-aos="slide-up"
        >
          <form
            action=""
            className="focus-within:ring-2 focus-within:ring-green-500 w-full flex justify-between rounded-full shadow-lg bg-white border"
          >
            <input
              type="email"
              className="flex-1 outline-none rounded-full p-4 text-lg"
              placeholder=" Enter your Email"
            />
            <button className="bg-rose-500 text-white m-1 font-medium px-6 py-3 rounded-full hover:bg-rose-600 hidden lg:block ">
              Subscribe
            </button>
          </form>
        </div>
        <button className="bg-yellow-400 text-black border border-gray-500 m-1 font-medium px-6 py-4 rounded-full hover:bg-yellow-500 w-4/12 block md:hidden custom-button" data-aos="slide-down">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
