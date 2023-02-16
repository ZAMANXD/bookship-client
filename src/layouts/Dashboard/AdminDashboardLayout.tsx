import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../Pages/Dashboard/DashboardSidebar/DashboardSidebar";
import NavBar from "../../Pages/Home/NavBar/NavBar";
import './AdminDashboardLayout.css'

const AdminDashboardLayout = () => {
  return (
    <div className="gradient-bg-4 bs-dash-layout mx-auto sm:max-w-xl md:max-w-full lg:max-w-[1600px] w-full md:px-24 lg:px-8">
      <NavBar />
      <div className="lg:flex justify-between  relative">
        <div className=" lg:w-[20%] w-full ">
        <DashboardSidebar />
        </div>
        <div className="w-[80%]">
        <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
