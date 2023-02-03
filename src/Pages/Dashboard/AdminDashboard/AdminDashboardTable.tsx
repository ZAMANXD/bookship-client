import React from "react";

const AdminDashboardTable = ({ title, newUsers, handleSellerDelete }: any) => {
  return (
    <div className="mt-8 w-auto">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className=" mt-7">
        <div className=" text-xs text-left ">
          <div className="bg-gray-300 lg:grid grid-cols-[15%_20%_15%_15%]">
            <div className="p-3">Name</div>
            <div className="p-3">Email</div>
            <div className="p-3">Verified</div>
            <div className="p-3">Delete</div>
          </div>
          <div>
            {newUsers?.map((seller: any) => {
              const { _id, email, isVerified, name } = seller;
              return (
                <div
                  key={_id}
                  className=" lg:grid lg:grid-cols-[15%_20%_15%_15%] md:grid-cols-[1fr_1fr_1fr_1fr] break-words lg:border-0 border-b lg:border-b-0 border-b-gray-900"
                >
                  <div className="px-3 py-2">
                    <p>{name}</p>
                  </div>
                  <div className="px-3 py-2">
                    <p>{email}</p>
                  </div>
                  <div className="px-3 py-2">
                    <p>{isVerified ? "Verified" : "Unverified"}</p>
                  </div>
                  <div className="px-3 py-2 ">
                    <button
                      onClick={() => handleSellerDelete(email)}
                      className="btn bg-green-600 px-5 py-2 text-white"
                    >
                      Delete
                    </button>
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
