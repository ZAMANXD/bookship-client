import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import UserProfile from "../../../Shared/UserProfile/UserProfile";

const DashboardSidebar = () => {
  const [dashboardToggle, setDashboardToggle] = useState(false);
  const handleToggleDashboardMenu = () => {
    setDashboardToggle(!dashboardToggle);
  };
  return (
    <>
      <div className="">
        <div className="lg:w-[15%] w-full h-full  shadow-md bg-white px-1 lg:fixed">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold py-5">
              <NavLink to="/">
                BOOK<span className="text-green-500">SHAP</span>{" "}
              </NavLink>
            </h3>
            <div
              className="block lg:hidden"
              onClick={handleToggleDashboardMenu}
            >
              <FaBars/>
            </div>
          </div>
          <hr />
          <ul className="relative  pl-0 hidden lg:block">
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
          </ul>
          {/* For small divices */}
          <ul
            className={`relative  pl-0 lg:hidden ${
              dashboardToggle ? "block" : "hidden"
            }`}
          >
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
            <li>
              <UserProfile/>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
