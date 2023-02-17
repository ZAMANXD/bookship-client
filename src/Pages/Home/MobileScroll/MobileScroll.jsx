import React, { useState } from "react";
import "./MobileScroll.css";
import ScreenText from "./ScreenText";

const scrollData = [
  {
    heading: "we’ve got your back.",
    description:
      "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
    mobile_img: "https://i.ibb.co/S75wH0T/another-try.jpg",
  },
  {
    heading: "begin your winning streak.",
    description:
      "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
    mobile_img: "https://i.ibb.co/fCDW3yQ/store.jpg",
  },
  {
    heading: "for your eclectic taste.",
    description:
      "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
    mobile_img: "https://i.ibb.co/S75wH0T/another-try.jpg",
  },
  {
    heading: "more cash in your pockets.",
    description:
      "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
    mobile_img: "https://i.ibb.co/fCDW3yQ/store.jpg",
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="bg-gray-50 ">
      <div className="sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-30 flex justify-center items-center">
        <div className="mobile-scroll flex max-width ">
          <div className="scroll-full-screen-wrapper">
            {scrollData.map((screen, i) => (
              <div className="scroll-full-screen flex justify-center p-10">
                <ScreenText
                  screen={screen}
                  setCurrentImg={setCurrentImg}
                  i={i}
                />
              </div>
            ))}
          </div>
          <div className="mobile-mockup-wrapper flex justify-center ">
            <div className="mobile-mockup w-10/12 ">
              <div className="mobile-mockup-screen  ">
                <img
                  alt=""
                  src={scrollData[currentImg].mobile_img}
                  className="mobile-screen-img slide-in-right "
                  key={scrollData[currentImg].mobile_img}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
