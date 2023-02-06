import React, { PureComponent, useEffect, useState, useContext } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AuthContext } from '../../../context/AuthProvider';


const SellerAnalytics = () => {
    const { user } = React.useContext(AuthContext)
    const [books, setBooks] = useState<[] | any>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:5000/books`)
            .then((res) => res.json())
            .then((data) => {
                const authorBooks = data.filter((book: any) => {
                    return book.authorEmail === user?.email
                });
                setBooks(authorBooks)
                setLoading(false)
            });
    }, [user?.email])

    return (
        <div>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <BarChart
                width={700}
                height={500}
                data={books}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookTitle" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="originalPrice" stackId="a" fill="#8884d8" />
                <Bar dataKey="discountedPrice" stackId="a" fill="#82ca9d" />
                <Bar dataKey="bookRating" fill="#ffc658" />
            </BarChart>
            {/* </ResponsiveContainer> */}
        </div>
    );
};

export default SellerAnalytics;