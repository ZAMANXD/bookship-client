import { format } from 'date-fns';
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'

const CommentEditModal = (props: any) => {
    const { bookTitle, commentId, refetch } = props;

    const handleEdit = (event: any) => {
        event.preventDefault()
        const form = event.target;
        const comment = form.comment.value;
        const commentDate = format(new Date(), 'PP')
        const updateComment = {
            comment,
            commentDate
        }

        if (comment) {
            fetch(`http://localhost:5000/reviews/edit/${commentId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateComment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged && data.matchedCount > 0) {
                        form.reset()
                        refetch()
                    }
                })
        }
    }

    return (
        <>
            <div>
                <input type="checkbox" id="comment-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <div className='flex justify-between items-center'>
                            <h3 className="font-bold text-lg my-2">{bookTitle}</h3>
                            <label htmlFor="comment-modal" className=""><AiFillCloseCircle className='text-2xl cursor-pointer' /></label>
                        </div>
                        <form onSubmit={handleEdit}>
                            <textarea className='w-full border rounded-md h-24 p-2' name="comment" id="" placeholder='Comment Here...'></textarea>
                            <button type='submit'>
                                <div className="modal-action mt-0">
                                    <label htmlFor="comment-modal" className="uppercase px-2 py-2 rounded-md bg-[#3DB188] text-white cursor-pointer">Update Review</label>
                                </div></button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommentEditModal;