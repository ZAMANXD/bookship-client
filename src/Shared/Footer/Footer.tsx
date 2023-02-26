import icon from "./fav.png";
import { Link } from "react-router-dom";
import "./Footer.css";
import bookShipLogo from "../../imgFile/BookShip-logo.png"

const Footer = () => {
  return (
    <div className="mx-2 my-5">
      <footer
        aria-label="Site Footer"
        className="rounded-xl sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto custom_Footer"
      >
        <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 ">
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
            <div className="text-center sm:text-left flex items-center lg:items-start flex-col">
              <p className=" text-lg font-semibold text-gray-900">
              About BookShip
              </p>

              <nav aria-label="Footer About Nav" className="mt-7">
                <div className="w-[300px] mx-auto">
                  <p className="leading-8">
                    BookShip is an online book selling platform that allows users to buy and sell books over the internet. We offer very a wide range of book collection.
                  </p>
                </div>
              </nav>
            </div>

            <div className="text-center sm:text-left flex  lg:items-start flex-col">
              <p className="text-lg font-semibold text-gray-900">Important Links</p>

              <nav aria-label="Footer Services Nav" className="mt-8">
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      className="text-black-600 transition text-base hover:text-black-600/75"
                      to="/blog"
                    >
                      Our Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black-600 transition text-base hover:text-black-600/75"
                      to="/aboutus"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black-600 transition text-base hover:text-black-600/75"
                      to="/contactus"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black-600 transition text-base hover:text-black-600/75"
                      to="/whybookship"
                    >
                      Why BookShip
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-900  ml-1 text-start">We Accept</p>
            <div className="text-center sm:text-left flex items-center flex-col">

              <nav aria-label="Footer Resources Nav" className="mt-8">
                <img
                  src="https://www.pngitem.com/pimgs/m/291-2918799_stripe-payment-icon-png-transparent-png.png"
                  alt=""
                />
              </nav>
            </div>
            </div>
          </div>

          <div className="mt-16 sm:flex sm:items-center sm:justify-between">
            <h1 className="flex justify-center text-black-600 sm:justify-start font-bold text-2xl">
            <img src={bookShipLogo} className="w-[110px]" alt="" />
            </h1>

            <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
              Copyright &copy; 2023. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
