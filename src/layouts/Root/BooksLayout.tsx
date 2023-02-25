import React from 'react';
import AllBooks from '../../Pages/AllBooks/AllBooks';
import AllBooks2 from '../../Pages/AllBooks/AllBooks2';
import NavBar from '../../Pages/Home/NavBar/NavBar';

const BooksLayout = () => {
    return (
        <div>
            <NavBar />
            <AllBooks2 />
        </div>
    );
};

export default BooksLayout;