import React, { useEffect, useState } from 'react';
import Comment from './Comment';

const Comments = (book: any) => {

    const [comments, setComments] = useState<[] | any>([])
    useEffect(() => {
        fetch(`https://bookship-server-zamanxd.vercel.app/reviews/${book?._id}`)
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })
    }, [book?._id])

    return (
        <div>
            <h2 className='text-2xl font-semibold my-5'>Comments: {comments.length}</h2>
            {!comments.length ? <p className='text-2xl'>No reviews</p> :
                comments.map((comment: any, i: number) => <Comment key={i} {...comment} />)
            }
        </div>
    );
};

export default Comments;