import { useState } from "react";

const SellerDashboardForm = () => {
    const [previewImage, setPreviewImage] = useState<any>()
    const [image, setImage] = useState<any>()

    const handleSellerBookImage = (e: any) => {
        const image = e.target.files[0]
        setPreviewImage(image)
    }
    const handleSellerBookForm = (e:any) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('image', previewImage)
        fetch('https://api.imgbb.com/1/upload?key=6f54997c6d2fa4998c950d62aaf1c8a1', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                setImage(data.data.url)
            })
    }

    const removeSelectedImage = () => {
        setPreviewImage(undefined);
    };

    return (
        <form className='md:max-w-[500px] w-auto border px-4 py-7' onSubmit={handleSellerBookForm}>
            <h1 className='text-3xl font-bold mb-4'>Add A Book</h1>
            <div className='sm:flex justify-between gap-5'>
                <input type="text" name="title" placeholder='Title' className='border-b border-b-gray-700 h-10 px-2  w-full' />
                <input type="number" name="price" placeholder='Price' className='border-b border-b-gray-700 h-10 px-2  w-full sm:mt-0 mt-5' />
            </div>
            <input type="number" name="category" placeholder='Category' className='border-b border-b-gray-700 h-10 px-2  w-full mt-5' />
            <textarea name="discription" placeholder='Description' className='border-b border-b-gray-700  h-32 w-full py-2 mt-5 px-2'></textarea>
            <div className="grid grid-cols-1 space-y-2  mt-5 ">
                <div className="flex items-center justify-center w-full h-full">
                    <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                        {previewImage ? <div> <img className="has-mask h-36 object-contain" src={URL.createObjectURL(previewImage)} alt="" /> <button onClick={removeSelectedImage}>
                            Remove This Image
                        </button> </div> :
                            <div className='flex justify-center items-center h-full w-full'>
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
            <button type='submit' className='btn bg-green-500 text-white py-2 px-5 mt-6'>Add Book</button>
        </form>
    )
}

export default SellerDashboardForm