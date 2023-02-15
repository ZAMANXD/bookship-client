import { loadStripe} from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout';
import './Payment.css'

const stripePromise = loadStripe('pk_test_51HLlbcEAY8E8Wcd6LzSK0c1L77l76K09uROjR1cnfH4QNjHuLmvbsWTIYZeUN6FLetNdxqoZKX2aKG79woMp7LFg00MZxlcnMD');

// const appearance: { theme: string } = { theme: 'stripe' };

const Payment = () => {
    let orders = useLoaderData() as { _id: string, id: string, quantity: number; price: number }[];
    return (
        <div className="px-4 py-16 mx-auto flex justify-center flex-col items-center gradient-bg-3">
            <div className='text-center bs-payment-card '>
            <Elements stripe={stripePromise}>
                <Checkout orders={orders}></Checkout>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;