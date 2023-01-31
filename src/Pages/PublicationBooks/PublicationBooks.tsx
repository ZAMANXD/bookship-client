import React, { useState, useEffect } from 'react';
import PublicationBook from './PublicationBook';

const PublicationBooks = () => {
    const [publications, setPublications] = useState<any[]>([])
    useEffect(() => {
        fetch(`https://bookship-server-zamanxd.vercel.app/publications`)
            .then(res => res.json())
            .then(data => {
                setPublications(data)
            })
    }, [])
    
    return (
        <div className='p-3 bg-gray-100'>
            {
                publications.map((publication, i) => <PublicationBook key={i} {...publication} />)
            }
        </div>
    );
};

export default PublicationBooks;