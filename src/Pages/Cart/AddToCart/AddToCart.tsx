import React from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';

const AddToCart = () => {
    return (
        <section className='lg:grid lg:grid-cols-8 flex md:flex-col flex-col-reverse'>
            <div className='col-span-6'>
                <h1 className='text-2xl text-gray-700 font-semibold text-center md:py-4 py-10'>Your Items <span>(0)</span></h1>
                <ProductDetails></ProductDetails>
            </div>
            <aside className='col-span-2 lg:w-full w-5/6 lg:mx-0 mx-auto mt-4 bg-gray-50 shadow-md hover:shadow-2xl'>
                <div className='bg-gray-100 py-5'>
                    <h1 className='text-xl font-semibold text-gray-700 text-center'>Summary</h1>
                </div>
                <section className='space-y-3 py-10 px-4 flex flex-col'>
                    <div className='flex justify-between'>
                        <h4 className='text-lg font-semibold text-gray-700'>Subtotal:</h4>
                        <p className='font-semibold text-gray-700'>$ 0.00</p>
                    </div>
                    <div className='flex justify-between'>
                        <h4 className='text-lg font-semibold text-gray-700'>Shipping cost:</h4>
                        <p className='font-semibold text-gray-700'>$ 0.00</p>
                    </div>
                    <div className='flex justify-between'>
                        <h4 className='text-lg font-semibold text-gray-700'>Tax:</h4>
                        <p className='font-semibold text-gray-700'>$ 0.00</p>
                    </div>
                    <hr />
                    <div className='flex justify-between pb-10'>
                        <h4 className='text-lg font-semibold text-gray-700'>Grand total:</h4>
                        <p className='font-semibold text-gray-700'>$ 0.00</p>
                    </div>
                    <button className='hover:bg-white hover:border-[#3DB188] border-2 hover:text-[#3DB188] px-3 py-2 bg-[#3DB188] font-semibold rounded-full text-white w-3/4 mx-auto'>Checkout</button>
                </section>
            </aside>
        </section>
    );
};

export default AddToCart;