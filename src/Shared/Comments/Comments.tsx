import React from 'react';
import Comment from './Comment';

const Comments = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold my-5'>Comments: {3}</h2>
            {
                [...Array(5)].map((comment, i) => <Comment key={i} />)
            }
        </div>
    );
};

export default Comments;