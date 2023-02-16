
import React, { useState } from 'react';
import Comment from './Comment';
import CommentEditModal from './CommentEditModal';
import ModalDelete from './ModalDelete';

const Comments = (props: any) => {
    const { comments, refetch } = props;
    const [commentId, setCommentId] = useState<{} | any>({})
    const [decision, setDecision] = useState(false)

    return (
        <div>
            <h2 className='text-2xl font-semibold my-5'>Reviews: {comments?.length}</h2>
            {!comments?.length ? <p className='text-2xl'>No reviews</p> :
                comments?.map((comment: any, i: number) => <Comment key={i} {...comment} commentId={commentId} setCommentId={setCommentId} decision={decision} refetch={refetch} />)
            }
            <CommentEditModal {...props} commentId={commentId} refetch={refetch} />
            <ModalDelete setDecision={setDecision} />
        </div>
    );
};

export default Comments;