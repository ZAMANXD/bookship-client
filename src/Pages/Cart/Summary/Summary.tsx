import React, { useState, useEffect } from 'react';
import { useCart } from '../../../context/CartContext';

const Summary = () => {
    const [bookData, setBookData] = useState<any[]>([])

    useEffect(() => {
        fetch("books.json")
            .then((res) => res.json())
            .then((data) => setBookData(data));
    }, [])

    const { cartQuantity, cartItems } = useCart()

    const subTotal = cartItems.reduce((total, cartItem) => {
        const book = bookData.find(i => i?._id === cartItem.id)

        return total + (book?.discountedPrice || 0) * cartItem?.quantity
    }, 0);

    const shipping = 10 * cartQuantity

    const tax = subTotal * 10 / 100;

    const grandTotal = subTotal + shipping + tax;



    return (
        <aside className='col-span-2 lg:w-full w-5/6 lg:mx-0 mx-auto mt-4 bg-gray-50 shadow-md hover:shadow-2xl'>
            <div className='bg-gray-100 py-5'>
                <h1 className='text-xl font-semibold text-gray-700 text-center'>Summary</h1>
            </div>
            <section className='space-y-3 py-10 px-4 flex flex-col'>
                <div className='flex justify-between'>
                    <h4 className='text-lg font-semibold text-gray-700'>Subtotal:</h4>
                    <p className='font-semibold text-gray-700'>$
                        {
                            subTotal.toFixed(2)
                        }
                    </p>
                </div>
                <div className='flex justify-between'>
                    <h4 className='text-lg font-semibold text-gray-700'>Shipping cost:</h4>
                    <p className='font-semibold text-gray-700'>$ {shipping.toFixed(2)}</p>
                </div>
                <div className='flex justify-between'>
                    <h4 className='text-lg font-semibold text-gray-700'>Tax:</h4>
                    <p className='font-semibold text-gray-700'>$ {tax.toFixed(2)}</p>
                </div>
                <hr />
                <div className='flex justify-between pb-10'>
                    <h4 className='text-lg font-semibold text-gray-700'>Grand total:</h4>
                    <p className='font-semibold text-gray-700'>$ {grandTotal.toFixed(2)}</p>
                </div>
                <button className='hover:bg-white hover:border-[#3DB188] border-2 hover:text-[#3DB188] px-3 py-2 bg-[#3DB188] font-semibold rounded-full text-white w-3/4 mx-auto'>Checkout</button>
            </section>
        </aside>
    );
};

export default Summary;