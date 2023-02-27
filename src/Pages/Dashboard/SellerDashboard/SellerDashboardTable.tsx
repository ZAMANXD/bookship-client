import { useState } from "react";

const SellerDashboardTable = ({ books, refetch, handleAdvertise }: any) => {
  console.log(books);
  const [id, setId] = useState("");

  const handleBookDelete = (_id: any) => {
    fetch(`https://bookship-server-zamanxd.vercel.app/books/${_id}`, {
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
    setId(_id);
  };
  const newBooks = books?.filter((book: { _id: string }) => {
    return book._id !== id;
  });

  return (
    <div className="mt-8">
      <div className="">
        {/* -----------Heading------------ */}
        <h1 className="text-4xl font-bold">Book List</h1>
        {/* -----------div------------ */}
        <div className=" mt-7">
          <div className="w-full  text-left ">
            <div>
              <div className="bg-gray-300 hidden text-bold  lg:grid grid-cols-[10%_20%_7%_7%_26%_7%_7%_8%_8%]">
                <div className="p-3">Image</div>
                <div className="p-3">Book Title</div>
                <div className="p-3">Original Price</div>
                <div className="p-3">Discount Price</div>
                <div className="p-3">Details</div>
                <div className="p-3">Quantity</div>
                <div className="p-3">Sell</div>
                <div className="p-3">Advertise</div>
                <div className="p-3">Delete</div>
              </div>
            </div>
            <div>
              {newBooks?.map((book: any) => {
                const {
                  _id,
                  bookTitle,
                  originalPrice,
                  discountedPrice,
                  description,
                  bookCover,
                  advertice,
                } = book;
                return (
                  <div
                    key={_id}
                    className="hidden text-xs lg:grid lg:grid-cols-[10%_20%_7%_7%_26%_7%_7%_8%_8%]  break-words lg:border-0 border-b lg:border-b-0 border-b-gray-900"
                  >
                    <div className="px-3 py-2">
                      <img src={bookCover} alt="" className="w-full" />
                    </div>
                    <div className="px-3 py-2">
                      <p>{bookTitle}</p>
                    </div>
                    <div className="px-3 py-2">
                      <p>{originalPrice}</p>
                    </div>
                    <div className="px-3 py-2">
                      <p>{discountedPrice}</p>
                    </div>
                    <div className="px-3 py-2">
                      <p>{description}</p>
                    </div>
                    <div className="px-3 py-2">
                      <p>2</p>
                    </div>
                    <div className="px-3 py-2">
                      <p>1</p>
                    </div>
                    <div className="px-3 py-2">
                      <button
                        onClick={() => handleAdvertise(_id)}
                        className="bs-button-2 px-3 py-2"
                      >
                        {advertice? 'remove':'add'}
                        
                      </button>
                      {/* <div className="flex justify-center">
                        <div>
                          <input
                            className="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[rgba(0,0,0,0.25)] outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                            type="checkbox"
                            role="switch"
                            onChange={() => handleAdvertise(_id)}
                          />
                        </div>
                      </div> */}
                    </div>
                    <div className="px-3 py-2 ">
                      <button
                        onClick={() => handleBookDelete(_id)}
                        className="bs-button-2 px-3 py-2"
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
    </div>
  );
};

export default SellerDashboardTable;
