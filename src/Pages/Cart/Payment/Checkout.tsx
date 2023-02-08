import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

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
        setProcessing(true);

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                //   name: user,
                //   email: email,

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
        <>
        <form onSubmit={handleSubmit}>
       
        <CardElement options={options} />

        <button className='btn btn-sm btn-primary mt-6' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <p className="text-red-500 mt-10">
        {cardError}
      </p>
      {
        success && <div>
            <p className="text-green-500">
                {success}
            </p>
            <p>
                Your transection Id: <span className='font-bold'>{transactionId}</span>
            </p>
        </div>
      }
        </>
    );
};

export default Checkout;