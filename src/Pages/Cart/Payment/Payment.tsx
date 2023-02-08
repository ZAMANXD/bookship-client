import { loadStripe} from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';

const stripePromise = loadStripe('pk_test_51HLlbcEAY8E8Wcd6LzSK0c1L77l76K09uROjR1cnfH4QNjHuLmvbsWTIYZeUN6FLetNdxqoZKX2aKG79woMp7LFg00MZxlcnMD');

// const appearance: { theme: string } = { theme: 'stripe' };

const Payment = () => {
    let orders = useLoaderData() as { _id: string, id: string, quantity: number; price: number }[];

    console.log(orders);

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h3 className="text-3xl">
                Let's setup a Payment gateway. Because we love money!!!

            </h3>
            <div className='w-96 my-12'>
            <Elements stripe={stripePromise}>
                <Checkout orders={orders}></Checkout>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;