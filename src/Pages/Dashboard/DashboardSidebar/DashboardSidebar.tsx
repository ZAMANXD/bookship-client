import React from "react";
import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="w-60 min-h-screen h-full shadow-md bg-white px-1">
      <ul className="relative">
        <li className="relative">
          <NavLink
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            to="/dashboard/admin"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Admin
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            to="/dashboard/admin/sellerList"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Seller List
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
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
