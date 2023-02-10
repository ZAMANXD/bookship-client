import { HiOutlineTrash } from "react-icons/hi";

const AdminDashboardTable = ({ title, newUsers, handleSellerDelete }: any) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className=" mt-3">
        <div className=" text-xs text-left ">
          <div className="bg-gray-300 w-full flex items-center h-10 pl-5">
            <div className="w-[150px]">Name</div>
            <div className="w-[250px]">Email</div>
            <div className="w-[120px]">Verified</div>
            <div className="w-[80px]">Delete</div>
          </div>
          <div>
            {newUsers?.map((seller: any) => {
              const { _id, email, isVerified, name } = seller;
              return (
                <div
                  key={_id}
                  className="w-full flex items-center break-words my-5 pl-5"
                >
                  <div className="w-[150px]">
                    <p>{name}</p>
                  </div>
                  <div className="w-[250px]">
                    <p>{email}</p>
                  </div>
                  <div className="w-[120px]">
                    <p>{isVerified ? "Verified" : "Unverified"}</p>
                  </div>
                  <div className=" w-[80px]">
                    <HiOutlineTrash onClick={() => handleSellerDelete(email)} className="text-2xl font-bold cursor-pointer hover:text-red-500"/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardTable;
