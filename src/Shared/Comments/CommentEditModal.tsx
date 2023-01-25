import React from 'react';

const CommentEditModal = (book: any) => {
    console.log(book);
    return (
        <>
            <div>
                <input type="checkbox" id="comment-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{book.bookTitle}</h3>
                        <textarea className='w-full border rounded-md h-24 p-2' name="" id="" placeholder='Comment Here...'></textarea>
                        <div className="modal-action">
                            <label htmlFor="comment-modal" className="btn">Update</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommentEditModal;