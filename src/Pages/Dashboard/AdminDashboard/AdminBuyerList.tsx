import React from "react";
import AdminDashboardCard from "./AdminDashboardCard";
import AdminDashboardTable from "./AdminDashboardTable";

const AdminBuyerList = ({ users, handleSellerDelete }: any) => {
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
