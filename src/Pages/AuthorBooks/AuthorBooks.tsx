import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Skeletons from '../../Shared/Skeletons/Skeletons';
import Spinner from '../../Shared/Spinner/Spinner';
import AuthorBook from './AuthorBook';

const AuthorBooks = () => {
    useTitle(`- Authors`)
    const [loading, setLoading] = useState(false)
    const [authors, setAuthors] = useState<any[]>([])
    useEffect(() => {
        setLoading(true)
        fetch(`https://bookship-server-zamanxd.vercel.app/users`)
            .then(res => res.json())
            .then(data => {
                setAuthors(data)
                setLoading(false)
            })
            .catch(err => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='bg-sky-50 rounded-lg'>
            {
                authors.filter(author => author.role === 'seller').map((author, i) => <AuthorBook key={i} {...author} />)
            }
        </div>
    );
};

export default AuthorBooks;