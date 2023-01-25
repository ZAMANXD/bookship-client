import React from 'react';

const CommentEditModal = (book: any) => {
    console.log(book);
    return (
        <>
            <div>
                <input type="checkbox" id="comment-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg my-2">{book.bookTitle}</h3>
                        <form>
                            <textarea className='w-full border rounded-md h-24 p-2' name="" id="" placeholder='Comment Here...'></textarea>
                            <div className="modal-action mt-0">
                                <label htmlFor="comment-modal" className="uppercase px-2 py-2 rounded-sm bg-[#3DB188]">Update</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommentEditModal;