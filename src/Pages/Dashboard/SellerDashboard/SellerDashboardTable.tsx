import SellerDashboard from "./SellerDashboard";

const SellerDashboardTable = ({ books }: any) => {
  return (
    <div className="mt-8">
      <div className="">
        {/* -----------Heading------------ */}
        <h1 className="text-4xl font-bold">Book List</h1>
        {/* -----------div------------ */}
        <div className=" mt-7">
          <div className="w-full text-xs text-left ">
            <div>
              <div className="bg-gray-300 hidden  lg:grid grid-cols-[15%_20%_15%_15%_25%_10%]">
                <div className="p-3">Image</div>
                <div className="p-3">Book Title</div>
                <div className="p-3">Price</div>
                <div className="p-3">Discount Price</div>
                <div className="p-3">Detailes</div>
                <div className="p-3">Acction</div>
              </div>
            </div>
            <div>
              {books?.map((book: any) => {
                const {
                  bookTitle,
                  originalPrice,
                  discountedPrice,
                  description,
                  bookCover,
                } = book;
                return (
                  <>
                    <div className="hidden lg:grid lg:grid-cols-[15%_20%_15%_15%_25%_10%] md:grid-cols-[1fr_1fr_1fr_1fr] break-words lg:border-0 border-b lg:border-b-0 border-b-gray-900">
                      <div className="px-3 py-2">
                        <img src={bookCover} alt="" className="w-16" />
                      </div>
                      <div className="px-3 py-2">
                        <p className="lg:hidden font-semibold text-base">
                          Book Title:{" "}
                        </p>
                        <p>{bookTitle}</p>
                      </div>
                      <div className="px-3 py-2">
                        <p className="lg:hidden font-semibold text-base">
                          Price:{" "}
                        </p>
                        <p>{originalPrice}</p>
                      </div>
                      <div className="px-3 py-2">
                        <p className="lg:hidden font-semibold text-base">
                          Discount Price:{" "}
                        </p>
                        <p>{discountedPrice}</p>
                      </div>
                      <div className="px-3 py-2">
                        <p className="lg:hidden font-semibold text-base">
                          Details:{" "}
                        </p>
                        <p>{description}</p>
                      </div>
                      <div className="px-3 py-2 ">
                        <p className="lg:hidden font-semibold text-base">
                          Action:{" "}
                        </p>
                        <button className="btn bg-green-600 px-5 py-2 text-white">
                          Delete
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="md:hidden block"><SellerDashboard /></div> */}
    </div>
  );
};

export default SellerDashboardTable;
