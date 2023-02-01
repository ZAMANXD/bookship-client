import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../src/context/AuthProvider'
import format from 'date-fns/format'

const CommentBox = (props: any) => {
    const { refetch } = props;
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


        if (user && comment) {
            setProcessing(true)
            fetch(`http://localhost:5000/addreview`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(commentData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged && data.insertedId) {
                        setProcessing(false)
                        refetch()
                        form.reset()
                        toast.success('Your Review Uploaded.')
                    }

                })
                .catch((err) => {
                    refetch()
                    form.reset()
                    setProcessing(false)
                    toast.error('Sorry. An error found.')
                })
        }
    }

    return (
        <div className='mt-40'>
            {
                !user && <><p className='text-2xl mb-5 text-yellow-500'>Login to add a Comment.</p></>
            }
            <h5 className='tex-2xl font-semibold my-3'>Please, Share your opinion for this Book.</h5>
            <form onSubmit={handleSubmit}>
                <textarea name="comment" id="" className='w-full lg:w-1/2 h-24 py-3 px-5 rounded-md block mb-3 border' placeholder='Write Your Comment' disabled={!user}></textarea>
                <button type='submit' className={`bg-[#3DB188] p-2 text-white rounded-sm lg:mt-0 block ${processing && 'bg-[#6ab99e]'}`} disabled={processing}>Comment</button>
            </form>


        </div>
    );
};

export default CommentBox;