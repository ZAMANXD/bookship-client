import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../Pages/Dashboard/DashboardSidebar/DashboardSidebar";
import NavBar from "../../Pages/Home/NavBar/NavBar";

const AdminDashboardLayout = () => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl w-full md:px-24 lg:px-8 px-4 ">
      <NavBar />
      <div className="flex">
        <DashboardSidebar />
        <div className="w-auto">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;