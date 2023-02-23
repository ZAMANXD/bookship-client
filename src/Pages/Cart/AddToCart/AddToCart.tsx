import {useContext} from 'react';
import { useCart } from '../../../context/CartContext';
import ProductDetails from '../ProductDetails/ProductDetails';
import Summary from '../Summary/Summary';
import EmptyCartLotte from '../../../Lottie/EmptyCartLotte.json';
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../context/AuthProvider';

const AddToCart = () => {
    const { cartQuantity, cartItems } = useCart();
    const {user}=useContext(AuthContext);

    // const { } = useQuery({
    //     queryKey:['cart'], 
    // queryFn: async () => {
    //     const response = await fetch('/cart');
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
        
    //     const data = await response.json();
    //     return data;
    //   });

      const { data, isLoading, isError } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart/achintyakumartalukdar@gmail.com`);
            const data = await res.json();
            return data;
        }
    })
    
      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error fetching cart data</div>;
      }

      console.log(data.items);
      
    

    return (
        <>
             {
                    cartQuantity === 0 ?
                    <div className='mx-auto max-w-screen-sm text-center'>
                        <h1 className='mt-4 lg:text-4xl md:text-xl text-lg font-bold text-gray-900'>Your cart is empty</h1>
                        <Lottie className='lg:h-[30rem] md:h-[20rem]  h-32 my-4' animationData={EmptyCartLotte} loop={true} />
                        <Link
                            to="/"
                            className="px-3 py-3 lg:text-xl md:text-lg text-xs rounded-md bg-[#3DB188] text-white"
                            >
                            <button className="font-bold">Add books to cart</button>
                        </Link> 
                    </div>
                    :
                    <section className='lg:grid lg:grid-cols-8 flex md:flex-col flex-col-reverse sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:h-screen mx-auto'>
                        <div className='col-span-6'>
                
                            <h1 className='text-2xl text-gray-700 font-semibold text-center md:py-4 py-10'>Your Items <span>{cartQuantity}</span></h1>
                            <div>
                            {
                                data?.items?.map((item:any) => <ProductDetails key={item.id} {...item}></ProductDetails>)
                            }
                            </div>
                        </div>
                            <Summary />
                    </section>

                }
            
            
        </>
    );
};

export default AddToCart;