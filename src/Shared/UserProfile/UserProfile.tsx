import React, {useContext} from 'react'
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import avatar from "../../imgFile/avatar.png";
import { AuthContext } from '../../context/AuthProvider';

const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext);

  return (
    <>
    {user ? (
        <>
          <div className="dropdown dropdown-end hidden lg:block">
            <label tabIndex={0}>
              <img
                src={user?.photoURL ? user.photoURL : avatar}
                alt=""
                className="w-6 h-6 rounded-full"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content p-2 shadow bg-[#a9a9a9df] rounded-md w-52 ease-in-out duration-200"
            >
              <Link
                to="/myaccount"
                aria-label="About us"
                title="My Profile"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                <li className="p-3 hover:bg-green-400 rounded-md">
                  <a>My Account</a>
                </li>
              </Link>
              <li
                onClick={() => {
                  logOut();
                  toast.error("Success fully logOut");
                }}
                className="p-3 hover:bg-green-400 rounded-md "
              >
                <a>
                  <button
                    className="duration-200 text-gray-700 flex justify-center hover:text-red-600"
                    title="Log out"
                  >
                    {" "}
                    Log out{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-6 h-6 pl-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  </button>
                </a>
              </li>
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
          
        </>
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
      </>
  )
}

export default UserProfile