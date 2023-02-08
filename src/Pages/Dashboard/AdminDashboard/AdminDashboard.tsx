import { useEffect } from "react";

const AdminDashboard = () => {
  let count:any = 1;
  useEffect(()=>{
    const url = window.location.href;
    const number = url.replace(url, '1')
    
    count = count + number
  }, [])


  return <div className=""></div>;
};

export default AdminDashboard;
