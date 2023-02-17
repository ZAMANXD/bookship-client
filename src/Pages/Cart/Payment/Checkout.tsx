import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import './Payment.css'

const Checkout = (props: {orders: { _id: string; id: string; quantity: number; price: number}[]}) => {
    const [cardError, setCardError] = useState<string | undefined>('');
    const [clientSecret, setClientSecret] = useState<string>('');
    const [processing, setProcessing] = useState<boolean>(false);
    const [success, setSuccess] = useState<string>('');
    const [transactionId, setTransactionId] = useState<string>('');
    const stripe = useStripe();
    const elements = useElements(); 
    const { orders } = props;

    // const appearance = {
    //   theme: 'stripe'
    // };

    interface StripeCardElementOptions {
      style: {
        base: {
          fontSize: string;
          color: string;
          '::placeholder': {
            color: string;
          };
        };
        invalid: {
          color: string;
        };
      };
      appearance: {
        theme: string;
      };
    }
    
    const options: StripeCardElementOptions = {
      style: {
        base: {
          fontSize: "16px",
          color: "#32325d",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#fa755a"
        }
      },
      appearance: {
        theme: "stripe",
      }
    };
   
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://bookship-server.vercel.app/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        //   authorization: `bearer ${localStorage.getItem(accessToken)}`,
        body: JSON.stringify({ price: orders.map(order => order.price) }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [orders]);

    const handleSubmit = async (event:any)=>{
        event.preventDefault();
        if( !stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        //to use the card element with other stripe.js apis
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if(error){
            // console.log('[error]', error);
            setCardError(error.message);
        }else{
            // console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        };

        setSuccess('');
        toast.success("The payment has been successfully completed");
        setProcessing(true);

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                //   name: user,
                //   email: email,
                //   

                },
              },
            },
          );
        
        if(confirmError){
            setCardError(confirmError.message);
            return;
        }if(paymentIntent.status === "succeeded"){
            console.log('card info', card);
            setSuccess('The payment has been successfully completed');
            setTransactionId(paymentIntent.id);
            // store payment info in the database
            const payment = {
                price: orders.map(order => order.price),
                transactionId: paymentIntent.id,
                // email,
                // orderId: _id,
            }
            fetch('https://bookship-server.vercel.app/payments', {
                method: 'POST',
                headers:{
                    'content-type':'application/json',
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
            .then(res =>res.json())
            .then(data => {
                console.log(data);
                if(data.insertId){
                    setSuccess('The payment has been successfully completed');
                    setTransactionId(paymentIntent.id);
                    
                }
            })
        }
        setProcessing(false);
    }
    return (
        <div className='mx-auto'>
        <div className="bs-box-shadow p-6 bg-white">
        <form onSubmit={handleSubmit}>
       
       <CardElement className='bs-payment-inputs pt-6 px-6' options={options} />

       <button className='btn btn-sm bs-button bs-payment-button bs-text-primary pt-6 mb-6 mt-16' type="submit" disabled={!stripe || !clientSecret || processing}>
         Pay
       </button>
     </form>
        </div>
      <div className='mt-20'>
      <p className="text-red-500 mt-10">
        {cardError}
      </p>
      {
        success && <div>
            <h3 className=" text-start text-xl font-semibold">
                {success}. Your order will be shipped soon.
            </h3>
            <p className='mt-6 text-start font-semibold'>
                Your transection Id: <span className='font font-normal'>{transactionId}</span>
            </p>

        </div>
      }
      </div>
        </div>
    );
};

export default Checkout;