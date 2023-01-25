import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../src/context/AuthProvider'
import format from 'date-fns/format'

const CommentBox = (props: any) => {
    const { user } = React.useContext(AuthContext)
    const [processing, setProcessing] = useState(false)

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
            commentDate: format(new Date(), 'PP')
        }

        setProcessing(true)

        if (comment) {
            fetch(`https://bookship-server-zamanxd.vercel.app/addreview`, {
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
                    toast.success('Your Review Uploaded.')
                    setProcessing(false)
                })
                .catch((err) => {
                    toast.error('Sorry, You have a problem.', err.code || err.message)
                    setProcessing(false)
                })
        }
    }

    return (
        <div className='mt-40'>
            <h5 className='tex-2xl font-semibold my-3'>Please, Share your opinion for this Book.</h5>
            <form onSubmit={handleSubmit}>
                <textarea name="comment" id="" className='w-1/2 h-24 py-3 px-5 rounded-md block mb-3' placeholder='Write Your Comment'></textarea>
                <button type='submit' className={`bg-[#3DB188] p-2 text-white rounded-sm lg:mt-0 block ${processing && 'bg-[#6ab99e]'}`} disabled={processing}>Comment</button>
            </form>

        </div>
    );
};

export default CommentBox;