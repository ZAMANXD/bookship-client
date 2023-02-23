import { useState } from "react";

const SellerDashboardTable = ({ books, refetch }: any) => {
  console.log(books)
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
          <div className="w-full text-xs text-left ">
            <div>
              <div className="bg-gray-300 hidden  lg:grid grid-cols-[10%_20%_10%_10%_20%_10%_10%_10%]">
                <div className="p-3">Image</div>
                <div className="p-3">Book Title</div>
                <div className="p-3">Original Price</div>
                <div className="p-3">Discount Price</div>
                <div className="p-3">Details</div>
                <div className="p-3">Quantity</div>
                <div className="p-3">Sell</div>
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
                } = book;
                return (
                  <div key={_id} className="hidden lg:grid lg:grid-cols-[10%_20%_10%_10%_20%_10%_10%_10%] md:grid-cols-[1fr_1fr_1fr_1fr] break-words lg:border-0 border-b lg:border-b-0 border-b-gray-900">
                    <div className="px-3 py-2">
                      <img src={bookCover} alt="" className="w-16" />
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
