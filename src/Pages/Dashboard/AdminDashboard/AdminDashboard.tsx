import { useQuery } from "@tanstack/react-query";
import { deleteUser } from "firebase/auth";
import { AuthContext } from "../../../context/AuthProvider";
import { useContext } from "react";
import AdminBuyerList from "./AdminBuyerList";
import AdminSellerList from "./AdminSellerList";

const AdminDashboard = () => {
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

  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl w-full md:px-24 lg:px-8 px-4 ">
      <AdminBuyerList users={users} handleSellerDelete={handleSellerDelete} />
      <AdminSellerList users={users} handleSellerDelete={handleSellerDelete} />
    </div>
  );
};

export default AdminDashboard;
