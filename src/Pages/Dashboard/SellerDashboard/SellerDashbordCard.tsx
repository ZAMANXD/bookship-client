import { useState } from "react";

const SellerDashbordCard = ({ books, refetch }: any) => {
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
    <div className="grid sm:grid-cols-2 gap-10">
      {books?.map((book: any) => {
        const {
          _id,
          bookTitle,
          originalPrice,
          discountedPrice,
          description,
          bookCover,
        } = book;
        return (
          <div key={_id} className="flex justify-center lg:hidden mt-10">
            <div className="rounded-lg shadow-lg bg-white">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  className="rounded-t-lg mx-auto max-h-64 h-full"
                  src={bookCover}
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="text-gray-900 text-xl font-medium mb-2">
                  {bookTitle}
                </h5>
                <p className="text-gray-700 text-base mb-4">{description}</p>
                <p className="text-gray-700 text-base mb-4">
                  Original Price: ${originalPrice}
                </p>
                <p className="text-gray-700 text-base mb-4">
                  Discounted Price: ${discountedPrice}
                </p>
                <button
                  type="button"
                  className="btn bg-green-600 px-5 py-2 text-white"
                  onClick={() => handleBookDelete(_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SellerDashbordCard;
