import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer aria-label="Site Footer" class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

          <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-900">About Us</p>

              <nav aria-label="Footer About Nav" class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <Link
                      class="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Company History
                    </Link>
                  </li>

                  <li>
                    <Link
                      class="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Meet the Team
                    </Link>
                  </li>

                  <li>
                    <Link
                      class="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Employee Handbook
                    </Link>
                  </li>

                  <li>
                    <Link
                      class="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-900">Our Services</p>

              <nav aria-label="Footer Services Nav" class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <Link
                      class="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Web Development
                    </Link>
                  </li>

                  <li>
                    <Link
                      class="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Web Design
                    </Link>
                  </li>

                  <li>
                    <Link
                      class="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Marketing
                    </Link>
                  </li>

                  <li>
                    <Link
                      class="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Google Ads
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="text-center sm:text-left">
              <p class="text-lg font-medium text-gray-900">Resources</p>

              <nav aria-label="Footer Resources Nav" class="mt-8">
                <ul class="space-y-4 text-sm">
                  <li>
                    <Link
                      class="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Online Guides
                    </Link>
                  </li>

                  <li>
                    <Link
                      class="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Conference Notes
                    </Link>
                  </li>

                  <li>
                    <Link
                      class="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Forum
                    </Link>
                  </li>

                  <li>
                    <Link
                      class="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Downloads
                    </Link>
                  </li>

                  <li>
                    <Link
                      class="text-[#46760A] transition text-base hover:text-[#46760A]/75"
                      to="/"
                    >
                      Upcoming Events
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

          </div>


          <div class="mt-16 sm:flex sm:items-center sm:justify-between">
            <h1 class="flex justify-center text-[#46760A] sm:justify-start font-bold text-2xl">
              
              Book <span className="text-black">Ship</span>
            </h1>

            <p class="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Footer;
