import { useEffect, useState } from "react";

// this made for admin
const useAdmin = (email:string)=>{
    
    const [isAdmin,setIsAdmin]= useState<boolean>(false)
    const [adminLoading,setAdminLoading]= useState<boolean>(true)

    useEffect(()=>{

        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setIsAdmin(data.isAdmin)
                setAdminLoading(false)
            })
        }
    },[email])

    return [isAdmin,adminLoading]
    
}

export default useAdmin;