import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider";
import icon from "./fav.png";
import { useCart } from "../../../context/CartContext";
import { toast } from "react-hot-toast";
import SearchBar from "../../../SearchBar/SearchBar";
import avatar from "../../../imgFile/avatar.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const { cartQuantity } = useCart();
  const [searchInput, SetSearhInput] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleGetSeachInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    SetSearhInput(e.target.value.toLowerCase());
  };

  const handleInputSubmit = () => {
    setInputValue(searchInput);
    setIsOpen(true);
  };
  const navItem = (
    <>
      <li>
        <div className="flex border rounded-full">
          <input
            type="text"
            className="px-6 py-2 rounded-l-full"
            placeholder="Search a book..."
            onChange={handleGetSeachInput}
          />
          <button
            className="flex items-center justify-center px-4 border-l"
            onClick={handleInputSubmit}
          >
            <svg
              className="h-4 w-4 text-grey-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </li>
      <li>
        <Link
          to="/books"
          aria-label="Our Books"
          title="Our Books"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Books
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard/seller"
          aria-label="Our Books"
          title="Our Books"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/addtocart">
          <div className="flex justify-start md:justify-center text-lg items-center relative ">
            <FaShoppingCart />

            {cartQuantity === 0 ? (
              <></>
            ) : (
              <span className="bg-yellow-300 grow-0 rounded-full text-center font-semibold px-2 py-px text-xs -mt-6 ">
                {cartQuantity}
              </span>
            )}
          </div>
        </Link>
      </li>

      {user ? (<>
        <div className="dropdown dropdown-end hidden lg:block">
          <label tabIndex={0}>
            <img src={
              user?.photoURL? user.photoURL:avatar
              } alt="" className="w-6 h-6 rounded-full" />
          </label>
          <ul tabIndex={0} className="dropdown-content p-2 shadow bg-[#a9a9a9df] rounded-md w-52 ease-in-out duration-200">
            <Link
          to="/myaccount"
          aria-label="About us"
          title="My Profile"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        ><li className="p-3 hover:bg-green-400 rounded-md"><a>
          My Account
        </a></li></Link>
            <li
            onClick={() => {
            logOut()
            toast.error('Success fully logOut')
          }} className="p-3 hover:bg-green-400 rounded-md "><a>
            <button
          
          className="duration-200 text-gray-700 flex justify-center hover:text-red-600"
          title="Log out"
        > Log out {" "}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 pl-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>

        </button>
              </a></li>
          </ul>
        </div>
        
        <button
          onClick={() => {
            logOut();
            toast.error("Success fully logOut");
          }}
          className="rounded-full hover:bg-[#5df66031] duration-200 p-1 text-gray-700 block lg:hidden"
          title="Log out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </button>
        <li>
        <Link
          to="/myaccount"
          aria-label="About us"
          title="About us"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 block lg:hidden"
        >
          My Account
        </Link>
      </li></>
      ) : (
        <Link
          to="/login"
          className="rounded-full hover:bg-green-400 hover:text-white duration-200 px-2 py-1 text-green-500 font-semibold"
          aria-label="Sign up"
          title="Log in"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </Link>
      )}
      <SearchBar
        inputValue={inputValue}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      ></SearchBar>
    </>
  );

  return (
    <div className="sticky top-0 z-[9999] backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="w-6 lg:w-10">
              <img src={icon} alt="" />
            </span>
            <span className="ml-2 text-xl lg:text-4xl font-bold tracking-wide text-gray-800 uppercase">
              Book<span className="text-[#4ADE80]">Ship</span>
            </span>
          </Link>
          <ul className="items-center hidden space-x-8 lg:flex">{navItem}</ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-gray-50 border rounded shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <span className="w-6">
                          <img src={icon} alt="" />
                        </span>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Book<span className="text-[#4ADE80]">Ship</span>
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">{navItem}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
