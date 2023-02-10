import React from 'react';

const SingleBlog = () => {
    return (
        <div className='flex w-2/3 mx-auto mb-4 border rounded-md'>
            <img className='h-80 rounded-l-md' src="https://cdn.dribbble.com/users/33073/screenshots/15238065/media/5df5a84f3ed908ad7bad36fa645e3d4a.png?compress=1&resize=1000x750&vertical=top" alt="" />
            <div className='px-10 py-4 space-y-4 bg-gray-100 flex flex-col'>
            <small>February 09,2023</small>
            <h1 className='text-xl font-bold'>Single Blog</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima cumque tenetur quaerat quasi tempora mollitia labore quidem illo assumenda asperiores, totam in, quibusdam odio accusantium ad iure. Tenetur nemo perferendis dolor harum tempora inventore libero vitae exercitationem. Molestias hic voluptate eos sed odio quo, rerum asperiores officia beatae ipsam animi.</p>
            <button className='hover:bg-white hover:border-[#3DB188] border-2 hover:text-[#3DB188]  px-5 py-2 bg-[#3DB188] font-semibold rounded-full text-white w-1/4 mt-2 ml-auto'>Read more</button>
            </div>
        </div>
    );
};

export default SingleBlog;