import SellerDashboardForm from "./SellerDashboardForm";
import SellerDashboardTable from "./SellerDashboardTable";
import { useQuery } from "@tanstack/react-query";
import SellerDashbordCard from "./SellerDashbordCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import SellerAnalytics from "./SellerAnalytics";

const SellerDashboard = () => {
  const { user } = useContext(AuthContext);
  const [advertise, setAdvertise] = useState(true);
  const { data: books, refetch } = useQuery({
    queryKey: ["book"],
    queryFn: async () => {
      const res = await fetch(
        `https://bookship-server-zamanxd.vercel.app/books`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAdvertise = (id: any) => {
    setAdvertise(!advertise);
    console.log(advertise)
    fetch(`https://bookship-server-zamanxd.vercel.app/advertise/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ advertice: advertise }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const sellerBooks = books?.filter((book: any) => {
    return user.email === book.authorEmail;
  });

  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 px-4 ">
      <div className="md:flex flex-row items-baseline gap-5">
        <div className="">
          <SellerDashboardForm refetch={refetch} />
        </div>
        <div>
          <div className="flex-1 flex flex-wrap justify-center mt-10 md:mt-0">
            <div className="shadow-lg px-5 py-10 text-center w-52">
              <h1 className="text-2xl font-semibold">{sellerBooks?.length}</h1>
              <p>Total Book</p>
            </div>
            <div className="shadow-lg px-5 py-10 text-center w-52">
              <h1 className="text-2xl font-semibold">00</h1>
              <p>Total Sell</p>
            </div>
            <div className="shadow-lg px-5 py-10 text-center w-52">
              <h1 className="text-2xl font-semibold">00</h1>
              <p>Today Sell</p>
            </div>
          </div>
          <SellerAnalytics />
        </div>
      </div>

      <SellerDashboardTable
        handleAdvertise={handleAdvertise}
        books={sellerBooks}
        refetch={refetch}
      />
      <SellerDashbordCard
        handleAdvertise={handleAdvertise}
        books={sellerBooks}
        refetch={refetch}
      />
    </div>
  );
};

export default SellerDashboard;
