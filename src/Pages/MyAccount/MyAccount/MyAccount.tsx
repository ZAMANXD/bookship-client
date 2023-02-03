import React, { useContext } from 'react';
import { HiPlusSm } from 'react-icons/hi';
import { AuthContext } from '../../../context/AuthProvider';
import avatar from "../../../imgFile/avatar.png"

const MyAccount = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className='md:w-1/2 mx-auto bg-gray-50 md:p-20 p-10 md:my-8 shadow-md hover:shadow-2xl'>
            <h1 className='text-xl text-center font-semibold mb-4'>Edit Profile</h1>
            <div className='flex flex-col justify-center space-y-6 p-3'>
                <div>
                <label htmlFor="upload-button" className='relative ' >
                <img className='h-20 mx-auto border-[#3DB188] border-4 rounded-full hover:shadow-lg' src=
                {user?.photoURL?user.photoURL:avatar} alt="" />
                <div className='absolute bottom-0 ml-10 left-60 text-3xl text-white font-bold bg-[#3DB188] rounded-full hover:shadow-lg'><HiPlusSm /></div>
                </label>
                </div>
                <div className='flex lg:flex-row flex-col lg:space-y-0 space-y-6 justify-between'>
                    <div className='w-full flex justify-between items-center'>
                        <label className='font-semibold'>Name</label>
                        <input className='border-b-2 border-gray-500 w-[75%] ml-3 text-lg font-medium' defaultValue={user?.displayName} type="text" />
                    </div>
                </div>
                <div className='w-full flex justify-between items-center'>
                    <label className='font-semibold'>Email</label>
                    <input className='border-b-2 border-gray-500 w-[75%] ml-3 text-lg font-medium'
                     value={user?.email}
                     readOnly
                     type="email" />
                </div>
                <div className='w-full flex justify-between items-center'>
                    <label className='font-semibold'>Address</label>
                    <input className='border-b-2 border-gray-500 w-[75%] ml-3 text-lg font-medium' type="text" />
                </div>
                <div className='w-full flex justify-between items-center'>
                    <label className='font-semibold'>Password</label>
                    <input className='border-b-2 border-gray-500 w-[75%] ml-3 text-lg font-medium' type="password" />
                </div>
                <input className='bg-[#3DB188] border hover:border-[#3DB188] hover:bg-white hover:text-[#3DB188] py-2 px-20 text-white font-semibold rounded-full mx-auto' type="submit" value="Save" />
            </div>
        </div>
    );
};

export default MyAccount;