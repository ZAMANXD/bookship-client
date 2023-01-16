import React from 'react';

const MyAccount = () => {
    return (
        <div className='md:w-1/2 mx-auto bg-gray-50 md:p-20 p-10 md:my-8 shadow-md hover:shadow-2xl'>
            <h1 className='text-xl font-semibold mb-4'>Edit Profile</h1>
            <div className='flex flex-col justify-center space-y-6'>
                <img className='h-20 mx-auto rounded-full hover:shadow-lg' src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png" alt="" />
                <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-6 justify-between'>
                    <div className='flex flex-col'>
                        <label className='font-semibold pb-4'>First Name</label>
                        <input className='border hover:shadow-lg' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-semibold pb-4'>Last Name</label>
                        <input className='border hover:shadow-lg' type="text" />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='font-semibold pb-4'>Email</label>
                    <input className='border hover:shadow-lg' type="email" />
                </div>
                <div className='flex flex-col'>
                    <label className='font-semibold pb-4'>Address</label>
                    <input className='border hover:shadow-lg' type="text" />
                </div>
                <div className='flex flex-col'>
                    <label className='font-semibold pb-4'>Password</label>
                    <input className='border hover:shadow-lg' type="password" />
                </div>
                <input className='bg-[#3DB188] border hover:border-[#3DB188] hover:bg-white hover:text-[#3DB188] py-2 px-20 text-white font-semibold rounded-full mx-auto' type="submit" value="Save" />
            </div>
        </div>
    );
};

export default MyAccount;