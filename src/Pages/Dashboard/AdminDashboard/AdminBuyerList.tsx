import { useQuery } from "@tanstack/react-query";
import { deleteUser } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import AdminDashboardCard from "./AdminDashboardCard";
import AdminDashboardTable from "./AdminDashboardTable";

const AdminBuyerList = () => {
  const { user } = useContext(AuthContext);
  const { data: users, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        `https://bookship-server-zamanxd.vercel.app/users`
      );
      const data = await res.json();
      return data;
    },
  });
  const handleSellerDelete = (email: any) => {
    fetch(`https://bookship-server-zamanxd.vercel.app/users?email=${email}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
        }
      });
    deleteUser(user)
      .then(() => {})
      .catch(() => {});
  };

  const buyerList = users?.filter((buyer: any) => {
    return buyer.role === "buyer";
  });

  return (
    <>
      <div className="lg:block hidden">
        <AdminDashboardTable
          title={"Buyer List"}
          newUsers={buyerList}
          handleSellerDelete={handleSellerDelete}
        />
      </div>
      <div className="lg:hidden block">
        <AdminDashboardCard
          title={"Buyer List"}
          newUsers={buyerList}
          handleSellerDelete={handleSellerDelete}
        />
      </div>
    </>
  );
};

export default AdminBuyerList;
