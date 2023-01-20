import React from 'react';

const GetInTouch = () => {
    return (
        <div className='bg-gradient-to-bl from-violet-600 to-indigo-500 mt-10 py-8'>
            <h1 className='text-3xl md:text-4xl lg:text-4xl font-bold text-white text-center pt-6 mb-10'>Get in Touch</h1>
            {/* Comment by arghya  */}
            <div
        className="p-5 mx-auto flex rounded-xl overflow-hidden items-center justify-center w-12/12 md:w-6/12 lg:w-4/12"
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
          <button
            className="bg-rose-500 text-white m-1 font-medium px-6 py-3 rounded-full hover:bg-rose-600"
          >
            Subscribe
          </button>
        </form>
      </div>
        </div>
    );
};

export default GetInTouch;