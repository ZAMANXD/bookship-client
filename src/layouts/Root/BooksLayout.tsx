import React from 'react';
import AllBooks from '../../Pages/AllBooks/AllBooks';
import NavBar from '../../Pages/Home/NavBar/NavBar';

const BooksLayout = () => {
    return (
        <div>
            <NavBar />
            <AllBooks />
        </div>
    );
};

export default BooksLayout;