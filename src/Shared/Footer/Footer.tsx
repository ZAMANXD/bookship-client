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
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">About Us</p>

              <nav aria-label="Footer About Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/blog"
                    >
                      Blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Meet the Team
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Employee Handbook
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Our Services</p>

              <nav aria-label="Footer Services Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Web Development
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Web Design
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Marketing
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Google Ads
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Resources</p>

              <nav aria-label="Footer Resources Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Online Guides
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Conference Notes
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Forum
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Downloads
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Upcoming Events
                    </Link>
                  </li>
                </ul>
              </nav>
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
