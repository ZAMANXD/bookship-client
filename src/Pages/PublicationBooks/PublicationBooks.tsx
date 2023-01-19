import React from 'react';
import PublicationBook from './PublicationBook';

const PublicationBooks = () => {
    return (
        <div className='p-3 bg-gray-100'>
            {
                [...Array(5)].map((book, i) => <PublicationBook key={i} />)
            }
        </div>
    );
};

export default PublicationBooks;