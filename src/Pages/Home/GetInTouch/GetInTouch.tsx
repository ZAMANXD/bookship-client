import React from 'react';

const GetInTouch = () => {
    return (
        <div className='bg-gradient-to-bl from-violet-600 to-indigo-500'>
            {/* get in touch 2 */}
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center pt-20'>Get in Touch</h1>
            <div className='flex justify-center p-20'>
                <input className=' bg-slate-300 p-3 -mr-6 rounded-l-full shadow-xl focus:outline-0' placeholder='Email' type="text" />
                <input className='bg-orange-600 rounded-full p-3 text-white font-semibold shadow-xl' type="submit" value="Subscribe" />
            </div>
        </div>
    );
};

export default GetInTouch;