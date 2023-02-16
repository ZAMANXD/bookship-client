import React, { useContext, useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { AuthContext } from '../../../context/AuthProvider';
import Spinner from '../../../Shared/Spinner/Spinner';
import Book from '../../Home/TopBooks/Book';



const MyFavourite = () => {
    const {user}= useContext(AuthContext)
    const [loading, setLoading] = useState<Boolean>(false)

    const [bookData, setBookData] = useState<any[]>([])

    useEffect(() => {
        setLoading(true)
        fetch(`https://bookship-server-zamanxd.vercel.app/favorurite/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setBookData(data)
                setLoading(false)
            });
    }, [])

    if (loading) {
        return <Spinner />
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
            <div className='px-5 py-5'>
                {
                    bookData.length?<h2 className="text-2xl text-center md:text-3xl lg:text-4xl font-bold text-[#34315D] ml-5">My Favourite Books</h2>
                    :<h2 className="text-2xl text-center md:text-3xl lg:text-4xl font-bold text-[#34315D] ml-5">You Have No Favourite Books</h2>
                }
                
                <div>
                    <Carousel responsive={responsive}className={'py-10'}>
                        {
                            bookData.map((book) => <Book key={book._id} {...book} />)
                        }
                    </Carousel>
                </div>
            </div>
    );
};

export default MyFavourite;