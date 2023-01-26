
import React, { useState } from 'react';
import Comment from './Comment';
import CommentEditModal from './CommentEditModal';

const Comments = (props: any) => {
    const { comments, refetch } = props;
    const [commentId, setCommentId] = useState<string | any>('')

    return (
        <div>
            <h2 className='text-2xl font-semibold my-5'>Comments: {comments?.length}</h2>
            {!comments?.length ? <p className='text-2xl'>No reviews</p> :
                comments?.map((comment: any, i: number) => <Comment key={i} {...comment} commentId={commentId} setCommentId={setCommentId} refetch={refetch} />)
            }
            <CommentEditModal {...props} commentId={commentId} refetch={refetch} />
        </div>
    );
};

export default Comments;