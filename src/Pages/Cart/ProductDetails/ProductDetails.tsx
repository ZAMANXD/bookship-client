import React from 'react';
import { HiMinusSm, HiOutlineXCircle, HiPlusSm } from "react-icons/hi";

const ProductDetails = () => {
    return (
        <section className='grid grid-cols-4 p-2 lg:mr-8 mx-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl'>
            <img className='h-20 w-16 lg:ml-8 shadow-md m-4 hover:shadow-2xl' src="https://m.media-amazon.com/images/I/71gdp7VZO2L.jpg" alt="" />
            <div className='col-span-3 flex flex-shrink justify-between space-x-2 items-center'>
                <h4 className='md:text-lg font-semibold text-gray-700'>Title of book</h4>
                <div className='flex items-center'>
                    <button className='border rounded-l-full hover:border-green-600 hover:text-green-600 md:text-2xl font-bold'><HiPlusSm /></button>
                    <input className='md:h-7 h-5 w-10 border hover:border-gray-500 md:text-lg font-semibold text-center' type="text" defaultValue={0} readOnly />
                    <button className='border rounded-r-full hover:border-red-600  hover:text-red-600 md:text-2xl font-bold'><HiMinusSm /></button>
                </div>
                <h4 className='text-gray-700 md:font-semibold'>$Price</h4>
                <button className='text-2xl md:mr-5  hover:text-red-600 rounded-full'><HiOutlineXCircle /></button>
            </div>
        </section>
    );
};

export default ProductDetails;