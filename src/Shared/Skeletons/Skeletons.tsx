import React from 'react';
import Skeleton from './Skeleton';

const Skeletons = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
            {
                [...Array(3)].map(skltn => <Skeleton />)
            }
        </div>
    );
};

export default Skeletons;