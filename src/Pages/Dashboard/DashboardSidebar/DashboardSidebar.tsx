import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="lg:w-60 w-full  h-auto lg:min-h-screen shadow-md bg-white px-1 lg:fixed">
      <ul className="relative">
        <li className="relative">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-green-500 flex items-center  py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded"
                : "flex items-center  py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded"
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
                ? "bg-green-500 flex items-center  py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded"
                : "flex items-center  py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded"
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
                ? "bg-green-500 flex items-center  py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded"
                : "flex items-center  py-4 px-6 h-12 overflow-hidden  text-ellipsis whitespace-nowrap rounded"
            }
            to="/dashboard/admin/buyerList "
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Buyer List
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
