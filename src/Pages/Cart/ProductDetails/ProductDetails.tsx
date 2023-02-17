import React, { useState, useEffect } from 'react';
import { HiMinusSm, HiOutlineXCircle, HiPlusSm } from "react-icons/hi";
import { useCart } from '../../../context/CartContext';



const ProductDetails = ({ ...i }) => {

    // console.log(i.items);
    

    const [bookData, setBookData] = useState<any[]>([])

    useEffect(() => {
        fetch("https://bookship-server-zamanxd.vercel.app/books")
            .then((res) => res.json())
            .then((data) => setBookData(data));
    }, [])

    const { id,quantity } = i

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart , cartQuantity} = useCart();
    const quantityOfBook = getItemQuantity(id);

    const book = bookData.find(i => i._id === id);
    
    // console.log(book.bookTitle);


    return (
        <section className='grid grid-cols-5 p-2 lg:mr-8 mx-8 space-x-5  bg-gradient-to-r from-gray-100 to-white hover:from-gray-50 hover:to-gray-100 rounded-lg shadow-lg hover:shadow-2xl mb-2'>
            <img className='md:h-20 h-12 md:w-16 w-10 lg:ml-8 shadow-md m-4 hover:shadow-2xl col-span-1' src={book?.bookCover} alt="" />
            <div className='col-span-3 grid grid-cols-3 md:space-x-2 space-y-2 place-items-center'>
                <h4 className='md:text-lg text-xs md:col-auto col-span-3 text-center font-semibold text-gray-700'>{book?.bookTitle}</h4>
                <div className='flex items-center md:col-auto col-span-3'>
                    <button className='border rounded-l-full hover:border-red-600  hover:text-red-600 md:text-2xl text-sm font-bold' onClick={() => decreaseCartQuantity(id)}><HiMinusSm /></button>
                    <input className='md:h-7 h-5 w-10 border hover:border-gray-500 md:text-lg text-xs  font-semibold text-center' type="text" value={quantity} defaultValue={0} readOnly />
                    <button className='border rounded-r-full  hover:border-green-600 hover:text-green-600 md:text-2xl text-sm font-bold' onClick={() => increaseCartQuantity(id)} ><HiPlusSm /></button>
                </div>
                <h4 className='text-gray-700 md:text-lg text-center text-xs md:font-semibold md:col-auto col-span-3'>${book?.discountedPrice}</h4>

            </div>
            <button className='col-span-1 md:text-2xl lg:pl-24 md:pl-10 text-base md:mr-5 hover:text-red-600 rounded-full' onClick={() => removeFromCart(id)} ><HiOutlineXCircle /></button>
        </section>
    );
};

export default ProductDetails;