import React, { useEffect, useState } from 'react';
import Comment from './Comment';

const Comments = () => {
    const [comments, setComments] = useState<[] | any>([])
    useEffect(() => {
        fetch(`http://localhost:5000/comments`)
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })
    }, [])
    return (
        <div>
            <h2 className='text-2xl font-semibold my-5'>Comments: {comments.length}</h2>
            {
                comments.map((comment: any, i: number) => <Comment key={i} {...comment} />)
            }
        </div>
    );
};

export default Comments;