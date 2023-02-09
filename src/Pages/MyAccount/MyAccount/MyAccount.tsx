import { log } from 'console';
import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaRegEdit } from 'react-icons/fa';
import { HiPlusSm } from 'react-icons/hi';
import { AuthContext } from '../../../context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';
import avatar from "../../../imgFile/avatar.png"

const MyAccount = () => {
    const {user,nameUpdate}=useContext(AuthContext)
    const [isAdmin, adminLoading] = useAdmin(user?.email);
    const [isSeller, sellerLoading] = useSeller(user?.email);
    const [imgfile,setImgfile]=useState<any>({})
    const [editNow,setEditNow]=useState<boolean>(false)
    
    let userRole:string =''
    if(isAdmin){
        userRole='admin'
    }if(isSeller) {
        userRole='seller'
    }else{
        userRole='buyer'
    }

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
        const role= form.role.value
        const photo=form.uplodeImg.files[0]
        console.log(name,email,phone,role,photo)

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
            console.log(imgdata.data.display_url);
            nameUpdate(name,imgdata.data.display_url)
            .then(()=>{})
            let updateProfile={
                email,
                name,
                phone,
                role
            }

            // Update profile in database

            fetch("http://localhost:5000/user",{
                method:"PATCH",
                headers:{
                    "content-type": "application/json"
                },
                body:JSON.stringify(updateProfile)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                toast.success('Thank you for Login')
                form.reset();
                setImgfile('')
                setEditNow(false)
                console.log(user);
            })    
        }
      })
      .catch(e=>console.log(e.message)) 
    }

    return (
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
                    
                        <h1 className='mt-5 text-lg text-center font-semibold font-mono'>{user?.displayName}</h1>
                        <h1 className='text-lg text-center font-normal font-serif'>{user?.email}
                        </h1>
                        <h1 className='text-lg text-center font-normal font-serif'>Role : {userRole}
                        </h1>
                    
                </div>
                <div className={editNow?"block":"hidden"}>
                    <form onSubmit={editProfile} action="">
                    <div className='relative'>
                        <label htmlFor="uplodeImg" className='absolute bg-gray-50 rounded bottom-[-2px] right-[102px] lg:bottom-[-2px] lg:right-[158px] text-3xl text-green-500'><FaRegEdit/>
                        </label>

                        <img className='w-40 h-40 mx-auto border-[#3DB188] border-2 rounded-xl hover:shadow-lg' src={imgfile}  alt="" />
                        <input className='hidden' name='uplodeImg' id='uplodeImg' type="file" onChange={imghandle} />
                    </div>
                    <div>
                        <div className='w-auto mx-auto'>
                            <label htmlFor='name' className='label label-text'>Name</label>
                            <input name='name' id='name' className='input input-bordered input-success w-full text-lg font-medium' defaultValue={user?.displayName} type="text" />
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
					    <label htmlFor="role" className="block text-gray-500">
						Select user role
					    </label>
					    <select id="role" name='role'
                        className='input input-bordered input-success w-full text-lg font-medium'
						defaultValue="Select user role">
						<option>buyer</option>
						<option>seller</option>
					    </select>
				</div>

                    <div className='flex justify-center my-5'>
                        <input className='bg-[#3DB188] border hover:border-[#3DB188] hover:bg-white hover:text-[#3DB188] py-2 w-[50%] text-white font-semibold rounded-full' type="submit" value="Save" />
                        <button
                        onClick={()=>setEditNow(false)}
                        className='bg-[#d04343] border hover:border-[#d04343] hover:bg-white hover:text-[#d04343] py-2 w-[50%] text-white font-semibold rounded-full'>censel</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;