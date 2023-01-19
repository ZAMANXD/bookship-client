import React from 'react';
import PublicationBook from './PublicationBook';

const PublicationBooks = () => {
    const publications: any[] = [
        { "name": "Mental Floss" },
        { "name": "Fast Company" },
        { "name": "Reader's Digest" },
        { "name": "TIME and TIME For Kids" }
    ]
    return (
        <div className='p-3 bg-gray-100'>
            {
                publications.map((publication, i) => <PublicationBook key={i} {...publication} />)
            }
        </div>
    );
};

export default PublicationBooks;