import React from 'react';
import { HiMinusSm, HiOutlineXCircle, HiPlusSm } from "react-icons/hi";

const ProductDetails = () => {
    return (
        <section className='grid grid-cols-4 p-2 mr-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl'>
            <img className='h-20 w-16 ml-8 shadow-md m-4 hover:shadow-2xl' src="https://m.media-amazon.com/images/I/71gdp7VZO2L.jpg" alt="" />
            <div className='col-span-3 flex justify-between items-center'>
                <h4 className='text-lg font-semibold text-gray-700'>Title of book</h4>
                <div className='flex items-center'>
                    <button className='border rounded-l-full hover:border-green-600 hover:text-green-600 text-2xl font-bold'><HiPlusSm /></button>
                    <input className='h-7 w-10 border hover:border-gray-500 text-lg font-semibold text-center' type="text" defaultValue={0} readOnly />
                    <button className='border rounded-r-full hover:border-red-600  hover:text-red-600 text-2xl font-bold'><HiMinusSm /></button>
                </div>
                <p className='text-gray-700 font-semibold'>$Price</p>
                <button className='text-2xl mr-5  hover:text-red-600 rounded-full'><HiOutlineXCircle /></button>
            </div>
        </section>
    );
};

export default ProductDetails;