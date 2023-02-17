import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Spinner from '../../Shared/Spinner/Spinner';
import CategoryBook from './CategoryBook';

const CategoriesBooks = () => {
    useTitle(`- Categories`)
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState<any[]>([])
    useEffect(() => {
        setLoading(true)
        fetch(`https://bookship-server-zamanxd.vercel.app/categories`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setLoading(false)
            })
            .catch(err => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='bg-gray-200 rounded-lg'>
            {
                categories?.map((category, i) => <CategoryBook key={i} {...category} />)
            }
        </div>
    );
};

export default CategoriesBooks;