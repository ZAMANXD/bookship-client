const AdminDashboardCard = ({ title, newUsers, handleSellerDelete }: any) => {
  return (
    <>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 ">
        {newUsers?.map((book: any) => {
          const { _id, email, isVerified, name } = book;
          return (
            <div key={_id} className=" mt-10">
              <div className="rounded-lg shadow-lg bg-white">
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    {name}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Verified: {isVerified ? "Verified" : "Unverified"}
                  </p>
                  <p className="text-gray-700 text-base mb-4 break-words">Email:{email}</p>
                  <button
                    type="button"
                    className="btn bg-green-600 px-5 py-2 text-white"
                    onClick={() => handleSellerDelete(email)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AdminDashboardCard;
