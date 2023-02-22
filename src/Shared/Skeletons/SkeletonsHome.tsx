import React from 'react';
import Skeleton from './Skeleton';

const SkeletonsHome = () => {
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 m-5 lg:p-5'>
            {
                [...Array(4)].map(skltn => <Skeleton />)
            }
        </div>
    );
};

export default SkeletonsHome;