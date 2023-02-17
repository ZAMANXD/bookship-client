import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { FaTimes } from "react-icons/fa";

const SellerDashboardForm = ({ refetch }: any) => {
  const { user } = useContext(AuthContext);
  const [previewImage, setPreviewImage0] = useState<any>();

  const handleSellerBookImage = (e: any) => {
    // const image = e.target.files[0];
    setPreviewImage0(URL.createObjectURL(e.target.files[0]));
    // Image Upload imgbb server
  };
  const handleSellerBookForm = (e: any) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const discountPrice = e.target.discountPrice.value;
    const detailes = e.target.detailes.value;
    const publication = e.target.publication.value;
    const inputImage = e.target.inputImage.files[0];
    console.log(inputImage);
    // Image uplode imgbb server
    const formData = new FormData();
    formData.append("image", inputImage);
    fetch(
      "https://api.imgbb.com/1/upload?key=6f54997c6d2fa4998c950d62aaf1c8a1",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          console.log("under Condation");
          const bookDetailes = {
            bookTitle: title,
            bookCover: imageData.data.display_url,
            bookRating: 4.5,
            originalPrice: parseInt(price),
            discountedPrice: parseInt(discountPrice),
            description: detailes,
            authorName: user.displayName,
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
              refetch();
              e.target.reset();
              setPreviewImage0("");
            })
            .catch((err) => {});

          // Uplode categories
          fetch(`https://bookship-server-zamanxd.vercel.app/categories`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ category }),
          })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }
      });
  };
  const handleClearImageInputPreview = () => {
    setPreviewImage0("");
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
          <div className="mt-5">
            <input
              type="text"
              name="publication"
              placeholder="Publication"
              className="border-b border-b-gray-700 h-10 px-2  w-full outline-none"
            />
          </div>
          <textarea
            name="detailes"
            placeholder="Details"
            className="border-b border-b-gray-700  h-32 w-full py-2 mt-5 px-2 outline-none"
          ></textarea>
          {/* <div className="grid grid-cols-1 mt-5">
            <label className="text-sm font-bold text-black tracking-wide">
              Image
            </label>
            <div className="flex items-center justify-center w-full h-full relative">
              <div
                onClick={handleClearImageInputPreview}
                className="absolute top-2 left-2 bg-slate-400 rounded-full w-10 h-10 flex justify-center items-center"
              >
                <FaTimes/>
              </div>
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60  group text-center">
                {previewImage ? (
                  <img
                    className=" h-full w-full object-contain"
                    src={previewImage}
                    alt=""
                  />
                ) : (
                  <div className="flex justify-center items-center h-full w-full">
                    <div className="h-full w-full text-center flex flex-col justify-center items-center  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="pointer-none text-gray-500 ">
                        select a file from your computer
                      </p>
                    </div>
                    <input
                      type="file"
                      name="inputImage"
                      accept="image/*"
                      className="hidden"
                      multiple
                      onChange={handleSellerBookImage}
                    />
                  </div>
                )}
              </label>
            </div>
          </div> */}

          <div className="relative">
            <div className="flex items-center justify-center w-full h-full relative">
              <div
                onClick={handleClearImageInputPreview}
                className="absolute top-2 left-2 bg-slate-400 rounded-full w-10 h-10 flex justify-center items-center"
              >
                <FaTimes />
              </div>
            </div>
            <label htmlFor="inputImg">
              <div className="w-full min-h-[250px] max-h-[250px] flex justify-center items-center rounded-lg border-4 border-dashed cursor-pointer">
                {previewImage ? (
                  <img src={previewImage} alt="" className="h-[250px] w-full" />
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="pointer-none text-gray-500 ">
                      select a file from your computer
                    </p>
                  </div>
                )}
              </div>

              <input
                type="file"
                name="inputImage"
                id="inputImg"
                onChange={handleSellerBookImage}
                hidden
              />
            </label>
          </div>
          <button type="submit" className="btn bg-green-500 mt-5">
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default SellerDashboardForm;
