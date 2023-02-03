import AdminDashboardCard from "./AdminDashboardCard";
import AdminDashboardTable from "./AdminDashboardTable";

const AdminSellerList = ({ users, handleSellerDelete }: any) => {
  const sellerList = users?.filter((buyer: any) => {
    return buyer.role === "seller";
  });
  console.log(sellerList);
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
