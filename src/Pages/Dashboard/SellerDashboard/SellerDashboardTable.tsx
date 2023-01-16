const SellerDashboardTable = () => {
    return (
        <div className='mt-8'>
            <div className="">
                {/* -----------Heading------------ */}
                <h1 className='text-4xl font-bold'>Book List</h1>
                {/* -----------div------------ */}
                <div className=" mt-7">
                    <div className="w-full text-xs text-left ">
                        <div>
                            <div className="bg-gray-300 hidden  lg:grid grid-cols-[20%_10%_15%_20%_15%_20%]">
                                <div className="p-3">Product Name</div>
                                <div className="p-3">Price</div>
                                <div className="p-3">Date</div>
                                <div className="p-3">Email</div>
                                <div className="p-3">Phone</div>
                                <div className="p-3">Acction</div>
                            </div>
                        </div>
                        <div className="border-b  border-gray-700 ">
                            <div className="grid lg:grid-cols-[20%_10%_15%_20%_15%_20%] md:grid-cols-[1fr_1fr_1fr] break-words">
                                <div className="px-3 py-2">
                                    <p className='lg:hidden font-semibold text-base'>Product Name: </p>
                                    <p>{'name'}</p>
                                </div>
                                <div className="px-3 py-2">
                                    <p className='lg:hidden font-semibold text-base'>Price: </p>
                                    <p>{'sellarPrice'}</p>
                                </div>
                                <div className="px-3 py-2">
                                    <p className='lg:hidden font-semibold text-base'>Buyer Name: </p>
                                    <p>{'date'}</p>
                                </div>
                                <div className="px-3 py-2">
                                    <p className='lg:hidden font-semibold text-base'>Email: </p>
                                    <p>{'userEmail'}</p>
                                </div>
                                <div className="px-3 py-2">
                                    <p className='lg:hidden font-semibold text-base'>Phone: </p>
                                    <p>{'phoneNumber'}</p>
                                </div>
                                <div className="px-3 py-2 ">
                                    <p className='lg:hidden font-semibold text-base'>Action: </p>
                                    <button className="btn bg-green-600">Delet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerDashboardTable