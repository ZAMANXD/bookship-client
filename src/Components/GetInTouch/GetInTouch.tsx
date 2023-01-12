import React from 'react';

const GetInTouch = () => {
    return (
        <div className='bg-gradient-to-bl from-violet-600 to-indigo-500'>
            <div className='md:block flex justify-center w-3/4 mx-auto p-20'>
                <input className=' bg-slate-300 p-3 rounded-l' placeholder='Email' type="text" />
                <input className='bg-orange-600 rounded-r p-3 text-white font-semibold' type="submit" value="Subscribe" />
            </div>
        </div>
    );
};

export default GetInTouch;