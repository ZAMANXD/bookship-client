import { log } from 'console';
import { updateProfile } from 'firebase/auth';
import React, { useContext, useState,useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { FaRegEdit, FaTimes } from 'react-icons/fa';
import { HiPlusSm } from 'react-icons/hi';
import { AuthContext } from '../../../context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';
import avatar from "../../../imgFile/avatar.png"
import MyFavourite from './MyFavourite';

const MyAccount = () => {
    const {user,nameUpdate}=useContext(AuthContext)
    const [isAdmin, adminLoading] = useAdmin(user?.email);
    const [isSeller, sellerLoading] = useSeller(user?.email);
    const [imgfile,setImgfile]=useState<any>()
    const [editNow,setEditNow]=useState<boolean>(false)
    const [reloade,setReloade]=useState<boolean>(false)
    const [dbuser,setDbuser]=useState<any>({})
    
    let userRole:string =''
    if(isAdmin){
        userRole='admin'
    }else if(isSeller) {
        userRole='seller'
    }else{
        userRole='buyer'
    }

    useEffect(()=>{
        fetch(`https://bookship-server-zamanxd.vercel.app/user?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setDbuser(data)
        })
    },[user.email,reloade])
// console.log(dbuser);

    const imghandle =(e:any)=>{
        e.preventDefault()
        setImgfile(URL.createObjectURL(e.target.files[0]))
    }

    const editProfile=(e:any)=>{
        e.preventDefault()
        const form=e.target
        const name= form.name.value
        const email= form.email.value
        const phone= form.phone.value
        const address= form.address.value
        const role= form.role.value
        const photo=form.uplodeImg.files[0]
        // console.log(name,email,phone,role,photo,address)

    // uploade image in imgbb
    
    const formData = new FormData();
    formData.append("image", photo);
    const url = `https://api.imgbb.com/1/upload?key=ee585cd4cab65c5ee7cdaf32b9e5b84e`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        if(imgdata.success){
            
            // console.log(imgdata.data.display_url);
            
            nameUpdate(name,imgdata.data.display_url)
            .then(()=>{})
            let updateProfile={
                email,
                name,
                phone,
                address,
                role
            }

            // Update profile in database

            fetch("https://bookship-server-zamanxd.vercel.app/user",{
                method:"PATCH",
                headers:{
                    "content-type": "application/json"
                },
                body:JSON.stringify(updateProfile)
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data)
                toast.success('Thank you for Login')
                form.reset();
                setImgfile('')
                setEditNow(false)
                setReloade(true)
                // console.log(user);
            })    
        }
      })
      .catch(e=>toast.error(e.message)) 
    }

    return (
    <div className='block lg:flex justify-between'>
        <div className='md:w-1/2 mx-auto bg-gray-50 rounded-lg md:p-20 p-10 md:my-8 shadow-md hover:shadow-2xl'>
            <h1 className='text-xl text-center font-semibold mb-4'>{editNow? "Edit Profile":"My Profile"}</h1>
            
            <div className='flex flex-col justify-center space-y-6 p-3'>
                <div className={editNow?'hidden':''}>
                    <div className='relative'>

                        <button className={editNow?'hidden':'absolute bg-gray-50 rounded  bottom-[-2px] right-[102px] lg:bottom-[-2px] lg:right-[158px] text-3xl text-green-500'}
                        onClick={()=>setEditNow(true)}><FaRegEdit/>
                        </button>

                        <img className='w-40 h-40 mx-auto border-[#3DB188] border-2 rounded-xl hover:shadow-lg' src=
                        {user?.photoURL?user.photoURL:avatar} alt="" />

                    </div>
                    
                        <h1 className='mt-5 text-lg text-center font-mono'>{user?.displayName}</h1>
                        <h1 className='text-lg text-center'>{user?.email}
                        </h1>
                        <h1 className='text-lg text-center'>Phone number : {dbuser?.phone}
                        </h1>
                        {dbuser.address&&<h1 className='text-lg text-center'>Address : {dbuser?.address}
                        </h1>}
                        <h1 className='text-lg text-center'>Role : {userRole}
                        </h1>
                    
                </div>
                <div className={editNow?"block":"hidden"}>
                    <form onSubmit={editProfile} action="">
                    <div className='relative'>
                    <div className="flex items-center justify-center w-full h-full relative">
                        <div
                            onClick={()=>setImgfile("")}
                            className="absolute top-2 left-2 bg-slate-400 rounded-full w-10 h-10 flex justify-center items-center">
                            <FaTimes />
                        </div>
                        </div>

                        <label htmlFor="uplodeImg">
                            <div className="w-full min-h-[250px] max-h-[250px] flex         justify-center items-center rounded-lg border-4 border-dashed cursor-pointer">
                                {
                                imgfile ? (
                                    <img src={imgfile} alt="" className="h-[250px] w-full rounded-md" />
                                        ) : (
                                        <div className="flex flex-col justify-center items-center">
                                            
                                            <svg 
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                            />
                                            </svg>
                                            <p className="pointer-none text-gray-500 ">
                                            select a photo from your computer
                                            </p>
                                        </div>
                                    )
                                }
                            </div>
                                <input className='hidden' name='uplodeImg' id='uplodeImg' type="file" onChange={imghandle} />
                        </label>
                    </div>
                    <div>
                        <div className='w-auto mx-auto'>
                            <label htmlFor='name' className='label label-text'>Name</label>
                            <input 
                            name='name' 
                            id='name' 
                            defaultValue={user?.displayName} 
                            required
                            type="text" 
                            className='input input-bordered input-success w-full text-lg font-medium'/> 
                        </div>
                    </div>
                    <div>
                        <label htmlFor='email' className='label label-text'>Email</label>
                        <input className='input input-bordered input-success w-full text-lg font-medium'
                        value={user?.email}
                        readOnly
                        id='email'
                        name='email'
                        type="email" />
                    </div>
                    <div>
                        <label htmlFor='phone' className='label label-text'>Phone Number</label>
                        <input className='input input-bordered input-success w-full text-lg font-medium'id='phone'name='phone' type="text" />
                    </div>

                    <div>
                        <label htmlFor='address' className='label label-text'>Address</label>
                        <input className='input input-bordered input-success w-full text-lg font-medium'id='address'name='address' type="text" />
                    </div>

                    <div>
					    <label htmlFor="role" className="label label-text">
						Select user role
					    </label>
					    <select id="role" name='role'
                        className='input input-bordered input-success w-full text-lg font-medium'
						defaultValue="Select user role">
						<option>buyer</option>
						<option>seller</option>
					    </select>
				</div>

                    <div className='flex justify-between my-5'>
                        <input className='bs-button-2 py-2 px-3 w-[45%] font-semibold ' type="submit" value="Update" />
                        <button
                        onClick={()=>setEditNow(false)}
                        className='bs-button-2 py-2 px-3 w-[45%] font-semibold '>Cancel</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <div className='w-full lg:w-[50%] lg:mt-2'>
            <MyFavourite/>
        </div>
    </div>
    );
};

export default MyAccount;