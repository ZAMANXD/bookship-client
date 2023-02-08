import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const SellerDashboardForm = ({ refetch }: any) => {
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState<any>();
  const [loading, setLoading] = useState(false);

  const handleSellerBookImage = (e: any) => {
    const image = e.target.files[0];
    // Image Upload imgbb server
    const formData = new FormData();
    formData.append("image", image);
    fetch(
      "https://api.imgbb.com/1/upload?key=6f54997c6d2fa4998c950d62aaf1c8a1",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.data.url);
      });
  };
  const handleSellerBookForm = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const title = e.target.title.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const discountPrice = e.target.discountPrice.value;
    const detailes = e.target.detailes.value;
    const publication = e.target.publication.value;
    const author = e.target.author.value;
    const bookDetailes = {
      bookTitle: title,
      bookCover: image,
      bookRating: 4.5,
      originalPrice: parseInt(price),
      discountedPrice: parseInt(discountPrice),
      description: detailes,
      authorName: author,
      authorEmail: user.email,
      authorImg: "https://userimg.png" || user.photoURL,
      authorRating: 4,
      category,
      publication,
    };

    // bookDetailes upload mongodb server
    fetch(`https://bookship-server-zamanxd.vercel.app/book`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookDetailes),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        refetch();
        e.target.reset();
      })
      .catch((err) => setLoading(false));

    // Uplode categories
    fetch(`https://bookship-server-zamanxd.vercel.app/categories`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ category }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="w-full">
        <form
          className=" md:max-w-[500px] w-auto border px-4 py-7 shadow-lg"
          onSubmit={handleSellerBookForm}
        >
          <h1 className="text-3xl font-bold mb-4">Add A Book</h1>
          <div className="sm:flex justify-between gap-5">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="border-b border-b-gray-700 h-10 px-2  w-full outline-none"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="border-b border-b-gray-700 h-10 px-2  w-full sm:mt-0 mt-5 outline-none"
            />
          </div>
          <div className="sm:flex justify-between gap-5  mt-5">
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="border-b border-b-gray-700 h-10 px-2  w-full outline-none"
            />
            <input
              type="number"
              name="discountPrice"
              placeholder="Discount Price"
              className="border-b border-b-gray-700 h-10 px-2  w-full sm:mt-0 mt-5 outline-none"
            />
          </div>
          <div className="sm:flex justify-between gap-5  mt-5">
            <input
              type="text"
              name="publication"
              placeholder="Publication"
              className="border-b border-b-gray-700 h-10 px-2  w-full outline-none"
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              className="border-b border-b-gray-700 h-10 px-2  w-full outline-none"
            />
          </div>
          <label
            htmlFor="upload-file"
            className="border-b border-b-gray-700 h-10 px-2  w-full mt-5 block cursor-pointer text-gray-400 outline-none"
          >
            Upload Image
            <input type="file" onChange={handleSellerBookImage} id="upload-file" hidden />
          </label>
          <textarea
            name="detailes"
            placeholder="Details"
            className="border-b border-b-gray-700  h-32 w-full py-2 mt-5 px-2 outline-none"
          ></textarea>

          <button
            disabled={!image}
            type="submit"
            className={`btn ${image ? "bg-green-500" : "bg-gray-400 text-gray-100"
              }  text-white py-2 px-5 mt-6`}
          >
            {loading ? "Procesing..." : "Add Book"}
          </button>
        </form>
      </div>
    </>
  );
};

export default SellerDashboardForm;
