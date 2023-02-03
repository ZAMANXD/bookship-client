import React, { useState, useEffect } from 'react';
import { HiMinusSm, HiOutlineXCircle, HiPlusSm } from "react-icons/hi";
import { useCart } from '../../../context/CartContext';



const ProductDetails = ({ ...item }) => {

    const [bookData, setBookData] = useState<any[]>([])

    useEffect(() => {
        fetch("https://bookship-server-zamanxd.vercel.app/books")
            .then((res) => res.json())
            .then((data) => setBookData(data));
    }, [])

    const { id, quantity } = item

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useCart();
    const quantityOfBook = getItemQuantity(id);

    const book = bookData.find(i => i._id === id)
    // console.log(book.bookTitle);


    return (
        <section className='grid grid-cols-5 p-2 lg:mr-8 mx-8  bg-gradient-to-r from-gray-100 to-white hover:from-gray-50 hover:to-gray-100 rounded-lg shadow-lg hover:shadow-2xl mb-2'>
            <img className='h-20 w-16 lg:ml-8 shadow-md m-4 hover:shadow-2xl' src={book?.bookCover} alt="" />
            <div className='col-span-3 grid grid-cols-3 space-x-2 place-items-center'>
                <h4 className='md:text-lg text-center font-semibold text-gray-700'>{book?.bookTitle}</h4>
                <div className='flex items-center'>
                    <button className='border rounded-l-full hover:border-red-600  hover:text-red-600 md:text-2xl font-bold' onClick={() => decreaseCartQuantity(id)}><HiMinusSm /></button>
                    <input className='md:h-7 h-5 w-10 border hover:border-gray-500 md:text-lg font-semibold text-center' type="text" value={quantityOfBook} defaultValue={0} readOnly />
                    <button className='border rounded-r-full  hover:border-green-600 hover:text-green-600 md:text-2xl font-bold' onClick={() => increaseCartQuantity(id)} ><HiPlusSm /></button>
                </div>
                <h4 className='text-gray-700 md:font-semibold'>${book?.discountedPrice * quantityOfBook}</h4>

            </div>
            <button className='col-span-1 ml-auto text-2xl md:mr-5 hover:text-red-600 rounded-full ' onClick={() => removeFromCart(id)} ><HiOutlineXCircle /></button>
        </section>
    );
};

export default ProductDetails;