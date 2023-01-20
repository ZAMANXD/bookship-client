import { useState, useContext } from "react";
import { HiOutlineX } from "react-icons/hi";
import { AuthContext } from "../../../context/AuthProvider";
import SellerDashboardTable from "./SellerDashboardTable";

const SellerDashboardForm = ({ refetch }: any) => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [previewImage, setPreviewImage] = useState<any>()
    const [image, setImage] = useState<any>()
    const [loading, setLoading] = useState(false)
    console.log(image)
    const handleSellerBookImage = (e: any) => {
        const image = e.target.files[0]
        setPreviewImage(image)
        // Image Upload imgbb server
        const formData = new FormData();
        formData.append('image', image)
        fetch('https://api.imgbb.com/1/upload?key=6f54997c6d2fa4998c950d62aaf1c8a1', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                setImage(data.data.url)
            })
    }
    const handleSellerBookForm = (e: any) => {
        e.preventDefault()
        setLoading(true)
        const title = e.target.title.value
        const category = e.target.category.value
        const price = e.target.price.value
        const discountPrice = e.target.discountPrice.value
        const detailes = e.target.detailes.value
        const publication = e.target.publication.value
        const bookDetailes = {
            bookTitle: title,
            bookCover: image,
            bookRating: 4.5,
            originalPrice: price,
            discountedPrice: discountPrice,
            description: detailes,
            authorName: user.displayName,
            authorEmail: user.email,
            authorImg: "https://userimg.png" || user.photoURL,
            authorRating: 4,
            category,
            publication
        } 

        // bookDetailes upload mongodb server

        console.log(bookDetailes)
        fetch(`https://bookship-server-zamanxd.vercel.app/book`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookDetailes)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoading(false)
                refetch()
                e.target.reset()
            })
            .catch(err => setLoading(false))


    }

    const removeSelectedImage = () => {
        setPreviewImage(undefined);
    };

    return (
        <>
            <div className="w-full">
                <form className=' md:max-w-[500px] w-auto border px-4 py-7 shadow-lg' onSubmit={handleSellerBookForm}>
                    <h1 className='text-3xl font-bold mb-4'>Add A Book</h1>
                    <div className='sm:flex justify-between gap-5'>
                        <input type="text" name="title" placeholder='Title' className='border-b border-b-gray-700 h-10 px-2  w-full' />
                        <input type="number" name="price" placeholder='Price' className='border-b border-b-gray-700 h-10 px-2  w-full sm:mt-0 mt-5' />
                    </div>
                    <div className='sm:flex justify-between gap-5  mt-5'>
                        <input type="text" name="category" placeholder='Category' className='border-b border-b-gray-700 h-10 px-2  w-full' />
                        <input type="number" name="discountPrice" placeholder='Discount Price' className='border-b border-b-gray-700 h-10 px-2  w-full sm:mt-0 mt-5' />
                    </div>
                    <input type="text" name="publication" placeholder='Publication' className='border-b border-b-gray-700 h-10 px-2  w-full mt-5' />
                    <textarea name="detailes" placeholder='Detailes' className='border-b border-b-gray-700  h-32 w-full py-2 mt-5 px-2'></textarea>
                    <div className="grid grid-cols-1 space-y-2  mt-5 ">
                        <div className="flex items-center justify-center w-full h-full relative">
                            <div onClick={removeSelectedImage} className="absolute top-2 cursor-pointer  left-3 bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
                                <HiOutlineX className="text-2xl font-bold" />
                            </div>
                            <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60  group text-center">
                                {previewImage ? <div className="w-full h-[230px] flex justify-center items-center"> <img className="object-contain h-full overflow-hidden" src={URL.createObjectURL(previewImage)} alt="" />
                                </div> :
                                    <div className='flex justify-center items-center h-full w-full '>
                                        <div className="h-full w-full text-center flex flex-col justify-center items-center  ">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <p className="pointer-none text-gray-500 ">select a file from your computer</p>
                                        </div>
                                        <input type="file" name='image' accept="image/*" className="hidden" multiple onChange={handleSellerBookImage} />
                                    </div>
                                }
                            </label>
                        </div>
                    </div>
                    <p className="text-sm text-gray-300">
                        <span>File type: doc,pdf,types of images</span>
                    </p>
                    <button disabled={!image} type='submit' className={`btn ${image ? 'bg-green-500' : 'bg-gray-50 text-gray-400'}  text-white py-2 px-5 mt-6`}>{loading ? 'loding...' : 'Add Book'}</button>
                </form>

            </div>
            <div className="w-full">
                {/* <SellerDashboardTable></SellerDashboardTable> */}
            </div>
        </>
    )
}

export default SellerDashboardForm