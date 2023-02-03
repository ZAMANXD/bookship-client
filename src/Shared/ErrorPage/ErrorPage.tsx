import React from "react";
import { Link } from "react-router-dom";
import errorlottie from "../../Lottie/404.json";
import Lottie from "lottie-react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const ErrorPage = () => {
  // const error:any = useRouteError();
  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <div className="-mt-14">
              <Lottie animationData={errorlottie} loop={true} />
            </div>

            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something's missing.
            </p>
            <p className="mb-8 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <Link
              to="/"
              className="px-3 py-3 rounded-md bg-[#3DB188] text-white"
            >
              <button className="font-bold">Back to Homepage</button>
            </Link>
            {/* readme file added  */}
            {/* Comment for modification  */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
