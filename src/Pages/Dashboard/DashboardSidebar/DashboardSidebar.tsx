import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="lg:w-56 w-full  h-auto lg:min-h-screen shadow-md bg-white px-1 lg:fixed">
      <h3 className="text-2xl font-bold py-5">
        <NavLink to="/">
          BOOK<span className="text-green-500">SHAP</span>{" "}
        </NavLink>
      </h3>
      <hr />
      <ul className="relative h-screen pl-0">
        <li className="relative">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-500 flex items-center  py-4  h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded"
                : "flex items-center  py-4  h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded"
            }
            to="/dashboard/admin"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Admin
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-500 flex items-center  py-4  h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded"
                : "flex items-center  py-4  h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded"
            }
            to="/dashboard/admin/sellerList"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Seller List
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-green-500 flex items-center  py-4  h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded"
                : "flex items-center  py-4  h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded"
            }
            to="/dashboard/admin/buyerList "
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Buyer List
          </NavLink>
        </li>
        {/* <li className="absolute bottom-20 btn rounded-full border border-gray-50 w-full">
          <NavLink
            className=""
            to="/"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Back To Home
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
