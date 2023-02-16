import { HiOutlineTrash } from "react-icons/hi";

const AdminDashboardTable = ({ title, newUsers, handleSellerDelete }: any) => {
  return (
    <div className="px-12 w-full">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className=" mt-3">
        <div className="text-base text-left ">
          <div className="bg-gray-300 flex items-center h-10 pl-5">
            <div className="w-[30%]">Name</div>
            <div className="w-[50%]">Email</div>
            <div className="w-[10%]">Verified</div>
            <div className="w-[10%] text-center">Delete</div>
          </div>
          <div>
            {newUsers?.map((seller: any) => {
              const { _id, email, isVerified, name } = seller;
              return (
                <div
                  key={_id}
                  className="w-full flex items-center break-words my-5 pl-5"
                >
                  <div className="w-[30%]">
                    <p>{name}</p>
                  </div>
                  <div className="w-[50%]">
                    <p>{email}</p>
                  </div>
                  <div className="w-[10%]">
                    <p>{isVerified ? "Verified" : "Unverified"}</p>
                  </div>
                  <div className=" w-[10%] mx-auto">
                    <HiOutlineTrash onClick={() => handleSellerDelete(email)} className="text-2xl mx-auto font-bold cursor-pointer hover:text-red-500 text-center"/>
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
