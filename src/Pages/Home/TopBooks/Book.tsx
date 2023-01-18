import { AiOutlineStar } from 'react-icons/ai'

const Book = ({ ...book }) => {
    const {
        // _id,
        bookTitle,
        authorName,
        rating,
        originalPrice,
        discountedPrice,
        image,
        description
    } = book
    return (
        <div className='bg-white rounded-lg hover:shadow-2xl hover:shadow-gray-500 shadow-lg shadow-gray-300  transition duration-150 ease-in-out p-5 mx-2'>
            <img className='h-80 w-auto mx-auto rounded-lg hover:shadow-lg hover:shadow-gray-500' src={image} alt="" />
            <div className='mt-10 h-52 relative'>
                <div className='flex items-center gap-x-2 my-2'>
                    <img className='w-8 h-8 rounded-full border' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCXNh9OsJ5FQZPljU_-rLiND2_9XogYnyxQ&usqp=CAU" alt="" />
                    <h4 className='text-md'>{authorName}</h4>
                </div>
                <div className='flex justify-between items-center'>
                    <h2 className='text-lg font-bold text-[#34315D]'>{bookTitle}</h2>
                    <div className='flex justify-between items-center'>
                        {
                            [...Array(parseInt(rating))].map((star, i) => <AiOutlineStar key={i} className='text-lg text-yellow-500' />)
                        }
                    </div>
                </div>
                <p className='text-sm'>{description}</p>
                <div className='absolute bottom-0 my-3 w-full'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-sm font-semibold text-gray-500 '>$ <span className='line-through'>{originalPrice}</span></p>
                            <p className='text-2xl font-bold text-[#342D65]'>$ {discountedPrice}</p>
                        </div>

                        <button className='px-2 py-2 bg-[#3DB188] rounded-md text-white'>Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Book;