import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import useSeller from "../hooks/useSeller";
import Spinner from "../Shared/Spinner/Spinner";



const SellerRout = (props:any) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isSeller, sellerLoading] = useSeller(user?.email);
    if (loading || sellerLoading) {
      return <Spinner/>
    }
    if (user && isSeller) {
      return props.children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  };
  
  export default SellerRout;