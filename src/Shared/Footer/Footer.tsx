import icon from "./fav.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mx-2 my-5">
      <footer
        aria-label="Site Footer"
        className="rounded-xl sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto custom_Footer"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
            <div className="text-center sm:text-left flex items-center flex-col">
              <p className="text-lg font-medium text-gray-900">
                Our Description
              </p>

              <nav aria-label="Footer About Nav" className="mt-8">
                <div className="w-[300px] mx-auto">
                  <p>
                    An online book selling website is a platform that allows
                    users to buy and sell books over the internet. These
                    websites typically offer a wide range of books.
                  </p>
                </div>
              </nav>
            </div>

            <div className="text-center sm:text-left flex  items-center flex-col">
              <p className="text-lg font-medium text-gray-900">See More</p>

              <nav aria-label="Footer Services Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/blog"
                    >
                      Our Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/aboutus"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/contactus"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="text-lg font-bold text-gray-900  ml-8 -mb-5">We Accept</p>
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
            <h1 className="flex justify-center text-[#46760A] sm:justify-start font-bold text-2xl">
              <span className="w-6 lg:w-10">
                <img src={icon} alt="" />
              </span>
              <span className="ml-2 text-xl lg:text-4xl font-bold tracking-wide text-gray-800 uppercase">
                Book<span className="text-[#4ADE80]">Ship</span>
              </span>
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
