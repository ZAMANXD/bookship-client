import React from "react";
import AppMockup from "../../../assets/app-mockup.png";
import downArrow from "../../../Lottie/down-arrow.json";
import Lottie from "lottie-react";

const DownloadApp = () => {
  return (
    <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto flex justify-center items-center">
      <div className="w-1/3 mx-auto ">
        <h2 className="text-5xl font-bold mb-8 text-gray-800 ">
          Download Our Android App
        </h2>
        <p className="mb-8 text-gray-600 ">
          Download our Android app for a seamless mobile experience. Get access
          to exclusive features and stay updated on-the-go
        </p>
        <a
          href="https://www.dropbox.com/s/09wpxz1u5o2161o/bookship-v1.apk?dl=1"
          download={true}
        >
          <button className="btn bg-gray-600 rounded-full flex justify-around items-center px-10">
            <div className="font-bold text-lg mr-3">download now</div>
            <div className="w-[24px] -mt-1">
              <Lottie animationData={downArrow} loop={true} />
            </div>
          </button>
        </a>
      </div>
      <div>
        <img className="w-8/12 mx-auto" src={AppMockup} alt="" />
      </div>
    </div>
  );
};

export default DownloadApp;
