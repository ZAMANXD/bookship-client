import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../src/context/AuthProvider'
import format from 'date-fns/format'

const CommentBox = (props: any) => {
    const { refetch } = props;
    const { user } = React.useContext(AuthContext)
    const [processing, setProcessing] = useState(false)
    let comment;
    let rating;

    const handleSubmit = (event: any) => {
        event.preventDefault()
        const form = event.target;
        comment = form.comment.value;
        rating = form.rating.value;

        const commentData = {
            bookId: props?._id,
            userName: user?.displayName || 'User',
            userEmail: user?.email,
            userImg: user?.photoURL || "https://www.pngmart.com/files/21/Account-User-PNG-Clipart.png",
            comment,
            rating,
            commentDate: format(new Date(), 'PP')
        }


        if (user && comment && rating) {
            setProcessing(true)
            fetch(`https://bookship-server-zamanxd.vercel.app/addreview`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(commentData)
            })
                .then(res => res.json())
                .then(data => {
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
        <div>
            <h5 className='text-xl lg:text-2xl font-semibold my-4'>Please, Share your opinion.</h5>
            <form onSubmit={handleSubmit}>
                <textarea name="comment" id="" className='w-full h-24 py-3 px-5 rounded-md block mb-3 border' placeholder='Write Your Review Here...' disabled={!user}></textarea>

                <div className='flex justify-between items-center w-full'>
                    <div className="rating rating-md">
                        <input type="radio" defaultValue={1} name="rating" className="mask mask-star-2 bg-orange-400 mx-1" />
                        <input type="radio" defaultValue={2} name="rating" className="mask mask-star-2 bg-orange-400 mx-1" />
                        <input type="radio" defaultValue={3} name="rating" className="mask mask-star-2 bg-orange-400 mx-1" />
                        <input type="radio" defaultValue={4} name="rating" className="mask mask-star-2 bg-orange-400 mx-1" />
                        <input type="radio" defaultValue={5} name="rating" className="mask mask-star-2 bg-orange-400 mx-1" />
                    </div>

                    <button type='submit' className={ `bs-button-2 py-2 px-3 ${processing && 'bg-[#709286]'}`} disabled={processing && !comment && !rating}>Comment</button>
                    {/* <button type='submit' className={`bg-[#3DB188] px-3 py-2 text-white rounded-full lg:mt-0 block ${processing && 'bg-[#709286]'}`} disabled={processing && !comment && !rating}>Comment</button> */}
                </div>
            </form>
            <span>
                {
                    !user && <><p className='text-sm lg:text-md font-bold my-5 text-red-600 bg-red-50  border text-center p-1 rounded-full'>* Please, Login to add your Valuable Review.</p></>
                }
            </span>
        </div>
    );
};

export default CommentBox;