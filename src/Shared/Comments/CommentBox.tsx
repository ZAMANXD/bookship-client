import React from 'react';
import { AuthContext } from '../../../src/context/AuthProvider'

const CommentBox = (props: any) => {
    const { user } = React.useContext(AuthContext)
    console.log(props._id);
    const handleSubmit = (event: any) => {
        event.preventDefault()
        const form = event.target;
        const comment = form.comment.value;

        const commentData = {
            bookId: props?._id,
            userName: user?.displayName || 'User',
            userEmail: user?.email,
            userImg: user?.photoURL || "https://www.pngmart.com/files/21/Account-User-PNG-Clipart.png",
            comment,
            rating: 4,
        }

        fetch(`http://localhost:5000/postcomment`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(commentData)
        })
            .then(res => res.json())
            .then(data => {
                form.reset()
                console.log(data);
            })
    }

    return (
        <div className='mt-40'>
            <h5 className='tex-2xl font-semibold my-3'>Please, Share your opinion for this Book.</h5>
            <form onSubmit={handleSubmit}>
                <textarea name="comment" id="" className='w-1/2 h-24 py-3 px-5 rounded-md block mb-3' placeholder='Write Your Comment'></textarea>
                <button type='submit' className='bg-[#3DB188] p-2 text-white rounded-sm lg:mt-0 block'>Comment</button>
            </form>

        </div>
    );
};

export default CommentBox;