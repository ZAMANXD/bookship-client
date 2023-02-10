import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import BookPostForm from "../../../Shared/Comments/BookPostForm";

const AdminDashboard = () => {
  const { data: ordersCollection, refetch } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(
        `https://bookship-server-zamanxd.vercel.app/orders`
      );
      const data = await res.json();
      return data;
    },
  });
  const ordersBooks: any = JSON.parse(localStorage.getItem("cart") as any);
 
  const initialValue = 0;
  const totalOrderBooks = ordersBooks.reduce(
    (accumulator:any, book:any) => accumulator + book.quantity,
    initialValue
  );
  console.log(totalOrderBooks)

  const url = window.location.href
  console.log(url === "http://localhost:3000/")
  return (
    <div className="">
      <BookPostForm />
    </div>
  );
};

export default AdminDashboard;
