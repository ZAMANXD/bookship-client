import React, { useState, useEffect } from 'react';
import useTitle from '../../hooks/useTitle';
import Spinner from '../../Shared/Spinner/Spinner';
import PublicationBook from './PublicationBook';

const PublicationBooks = () => {
    useTitle(`- Publications`)
    const [loading, setLoading] = useState(false)
    const [publications, setPublications] = useState<any[]>([])
    useEffect(() => {
        setLoading(true)
        fetch(`https://bookship-server-zamanxd.vercel.app/publications`)
            .then(res => res.json())
            .then(data => {
                setPublications(data)
                setLoading(false)
            })
            .catch(err => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner />
    }

    return (
        <div className='p-3 bg-gray-100'>
            {
                publications.map((publication, i) => <PublicationBook key={i} {...publication} />)
            }
        </div>
    );
};

export default PublicationBooks;