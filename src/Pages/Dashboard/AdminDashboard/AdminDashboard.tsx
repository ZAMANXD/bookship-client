import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import BookPostForm from "../../../Shared/Comments/BookPostForm";

const AdminDashboard = () => {
  const { data: books, refetch } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await fetch(
        `https://bookship-server-zamanxd.vercel.app/books`
      );
      const data = await res.json();
      return data;
    },
  });
  const ordersBooks: any = JSON.parse(localStorage.getItem("cart") as any);

  const initialValue = 0;
  const totalOrderBooks = ordersBooks.reduce(
    (accumulator: any, book: any) => accumulator + book.quantity,
    initialValue
  );

  return (
    <ResponsiveContainer width="100%" height="100%"> 
    <>
      <div className="">
        <div className="text-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <div className="shadow-lg py-10">
            <h3 className="text-lg">Total Order</h3>
            <p className="text-2xl">
              {totalOrderBooks ? totalOrderBooks : "00"}
            </p>
          </div>
          <div className="shadow-lg py-10">
            <h3 className="text-lg">Total Books</h3>
            <p className="text-2xl">{books?.length ? books?.length : "00"}</p>
          </div>
          <div className="shadow-lg py-10">
            <h3 className="text-lg">Total Books</h3>
            <p className="text-2xl">{books?.length ? books?.length : "00"}</p>
          </div>
        </div>
      </div>

      <h3
        className="text-2xl font-bold mt-10">
        Monthlay Order
      </h3>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <BarChart
        width={700}
        height={500}
        data={ordersBooks}
        margin={{
          top: 5,
          // right: 30,
          // left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="quantity" fill="#8884d8" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
      {/* </ResponsiveContainer> */}
    </>
    </ResponsiveContainer> 
  );
};

export default AdminDashboard;
