import React from 'react';
import { useCart } from '../../../context/CartContext';
import ProductDetails from '../ProductDetails/ProductDetails';
import Summary from '../Summary/Summary';

const AddToCart = () => {
    const { cartQuantity, cartItems } = useCart()

    return (
        <section className='lg:grid lg:grid-cols-8 flex md:flex-col flex-col-reverse'>
            <div className='col-span-6'>
                <h1 className='text-2xl text-gray-700 font-semibold text-center md:py-4 py-10'>Your Items <span>{cartQuantity}</span></h1>
                {
                    cartItems.map((item) => <ProductDetails key={item.id} {...item}></ProductDetails>)
                }
            </div>
            <Summary />
        </section>
    );
};

export default AddToCart;