import AdminDashboardCard from "./AdminDashboardCard";
import AdminDashboardTable from "./AdminDashboardTable";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { deleteUser } from "firebase/auth";

const AdminSellerList = () => {
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
  const sellerList = users?.filter((buyer: any) => {
    return buyer.role === "seller";
  });
  return (
    <>
      <div className="lg:block hidden">
        <AdminDashboardTable
          title={"Seller List"}
          newUsers={sellerList}
          handleSellerDelete={handleSellerDelete}
        />
      </div>
      <div className="lg:hidden block">
        <AdminDashboardCard
          title={"Seller List"}
          newUsers={sellerList}
          handleSellerDelete={handleSellerDelete}
        />
      </div>
    </>
  );
};

export default AdminSellerList;
