import React from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';

const CartItems = ({...item}) => {
    // console.log(item.items);
    
    return (
        <div>
            {/* {(item.items as any[]).map((i: any) => <ProductDetails key={i.id} {...i} />)} */}
        </div>
    );
};

export default CartItems;